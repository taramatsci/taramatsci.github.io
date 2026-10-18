import { readFileSync } from 'fs';
import bibtexParse from 'bibtex-parse';

type BibEntry = {
  type: string;
  id: string;
  properties: Record<string, { value: string }>;
};

export type Category = 'preprint' | 'inpress' | 'lead' | 'significant' | 'coauthor' | 'thesis';

export type Publication = {
  key: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  doi: string;
  doiLabel: string;
  arxiv: string;
  note: string;
  category: Category;
};

const LATEX: [RegExp, string | ((m: string, c: string) => string)][] = [
  [/\$\\delta\$/g, 'δ'],
  [/\$_?\{?(\d)\}?\$/g, '<sub>$1</sub>'],
  [/_\{?(\d)\}?/g, '<sub>$1</sub>'],
  [/\{\\v\{?c\}?\}/g, 'č'],
  [/\{\\'\\i\}/g, 'í'],
  [/\{\\'e\}/g, 'é'],
  [/\{?\\"\{?([aeiouAEIOU])\}?\}?/g, (_: string, c: string) => (c + '\u0308').normalize('NFC')],
  [/[{}$]/g, ''],
];

function delatex(s: string): string {
  return LATEX.reduce((acc, [re, rep]) => acc.replace(re, rep as string), s);
}

// "Mishra*#, Tara P" -> "Tara P Mishra*#"
function formatAuthor(raw: string): string {
  const a = raw.trim();
  const comma = a.indexOf(',');
  if (comma === -1) return delatex(a);
  return delatex(`${a.slice(comma + 1).trim()} ${a.slice(0, comma).trim()}`);
}

const raw = readFileSync('./src/content/publications/refs.bib', 'utf-8');
const parsed: BibEntry[] = bibtexParse.parse(raw).entries;

const prop = (e: BibEntry, k: string) => e.properties[k]?.value ?? '';

export const publications: Publication[] = parsed
  .map((e) => ({
    key: e.id,
    title: delatex(prop(e, 'title')),
    authors: prop(e, 'author')
      .split(/\s+and\s+/)
      .filter((a) => a && a !== 'others')
      .map(formatAuthor),
    hasOthers: / and others\s*$/.test(prop(e, 'author')),
    venue: prop(e, 'journal') || prop(e, 'booktitle') || prop(e, 'school'),
    year: Number(prop(e, 'year')) || 0,
    doi: prop(e, 'doi'),
    doiLabel: prop(e, 'doilabel'),
    arxiv: prop(e, 'eprint'),
    note: prop(e, 'note'),
    category: prop(e, 'category') as Category,
  }))
  .map(({ hasOthers, ...p }) => (hasOthers ? { ...p, authors: [...p.authors, 'et al.'] } : p))
  .sort((a, b) => b.year - a.year);

export const byCategory = (c: Category) => publications.filter((p) => p.category === c);

export const isSelf = (author: string) => /Tara\s+(P(rasad)?\.?\s+)?Mishra/.test(author);

// Figures reused under CC BY 4.0 from open-access papers, keyed by DOI.
export const pubFigures: Record<string, { src: string; alt: string }> = {
  '10.1038/s41565-024-01787-y': { src: '/figures/nn-haadf.jpg', alt: 'Atomic-resolution HAADF-STEM image of a δ-phase cathode with its Fourier transform inset' },
  '10.1002/adma.202412871': { src: '/figures/adma-delta-schematic.jpg', alt: 'Schematic of the DRX to δ-phase transformation through electrochemical pulsing' },
  '10.1002/advs.76414': { src: '/figures/advs-gan-on-si.jpg', alt: 'GaN-on-Si heterostructures and correlated cathodoluminescence–STEM measurement' },
};
