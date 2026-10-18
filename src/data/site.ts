// Single source of truth for profile and CV content. Everything here is taken
// from the CV (public/cv.pdf); update both together.

export const profile = {
  name: 'Tara P. Mishra',
  shortName: 'Tara Mishra',
  role: 'Group Leader',
  unit: 'Stuttgart Center for Electron Microscopy (StEM)',
  institute: 'Max Planck Institute for Solid State Research',
  instituteShort: 'MPI-FKF',
  location: 'Stuttgart, Germany',
  tagline: 'Attempts to solve problems in energy storage through quantitative microscopy, computational modeling, and automated characterizations',
  email: 't.mishra@fkf.mpg.de',
  links: {
    cv: '/cv.pdf',
    scholar: 'https://scholar.google.com/citations?user=vtbEcEsAAAAJ&hl=en',
    orcid: 'https://orcid.org/0000-0002-3000-2555',
    github: 'https://github.com/taramatsci',
    mpi: 'https://www.fkf.mpg.de',
  },
};

export const researchAreas = [
  {
    id: 'atomistic',
    title: 'Atomistic engineering of functional materials',
    summary:
      'Atomistic engineering of next-generation functional materials through correlative quantitative electron microscopy integrated with multiscale computational modeling.',
  },
  {
    id: 'autonomous',
    title: 'Self-driving electron microscopy',
    summary:
      'Advancing high-throughput, quantitative, and self-driving electron microscopy for accelerated materials characterization.',
  },
];

export const positions = [
  { period: 'May 2026 – present', title: 'Group Leader', org: 'Max Planck Institute for Solid State Research', detail: 'Stuttgart Center for Electron Microscopy (StEM)' },
  { period: 'Jan 2025 – Apr 2026', title: 'Project Scientist', org: 'Lawrence Berkeley National Laboratory', detail: 'National Center for Electron Microscopy, Molecular Foundry' },
  { period: 'Jul 2022 – Dec 2024', title: 'Postdoctoral Scholar', org: 'Lawrence Berkeley National Laboratory', detail: 'Advisor: Prof. Gerbrand Ceder' },
];

export const education = [
  { period: 'Aug 2018 – Apr 2022', title: 'Ph.D., Materials Science', org: 'National University of Singapore', detail: 'Singapore-MIT Alliance for Research and Technology (SMART). Advisors: Profs. Canepa, Pennycook and Gradečak' },
  { period: '2014 – 2018', title: 'B.Sc. (Research)', org: 'Indian Institute of Science, Bangalore', detail: '' },
  { period: 'May – Aug 2017', title: 'Summer Internship', org: 'National University of Singapore', detail: 'Advisor: Prof. Stephen Pennycook' },
  { period: 'May – Aug 2016', title: 'Summer Internship', org: 'Japan Advanced Institute of Science and Technology (JAIST)', detail: 'Advisor: Prof. Yoshifumi Oshima' },
];

export const awards = [
  { date: 'Oct 2025', title: 'Poster Award, 2nd Prize', detail: '248th ECS Meeting, Chicago' },
  { date: '2023 – 2026', title: 'Elected Member, Users Executive Committee', detail: 'The Molecular Foundry' },
  { date: 'Jun 2024', title: 'Berkeley Lab Spot Award', detail: '“The identification of the δ-phase in DRX materials through advanced microscopy”' },
  { date: 'May 2018', title: 'Institute Gold Medal', detail: 'Best performance in Materials, IISc Bangalore' },
  { date: 'Apr 2018', title: 'SMART Fellowship', detail: 'Singapore-MIT Alliance for Research and Technology; Ph.D. under supervision of professors from NUS and MIT' },
  { date: 'Aug 2017', title: 'Most Promising Young Researcher', detail: 'Materials Students’ Symposium, IISc Bangalore' },
  { date: 'May 2016', title: 'JASSO Scholarship', detail: 'Japan Student Services Organization, for summer internship at JAIST' },
  { date: 'Mar 2014', title: 'KVPY University Entrance Exam', detail: 'All India Rank 105' },
];

export const grants = [
  {
    date: 'Oct 2025',
    role: 'Co-PI',
    program: 'Laboratory Directed Research & Development (LDRD), Lawrence Berkeley National Laboratory',
    title: 'Bragg Enhanced Microsecond XAS for Real-time Reactions of Materials in Gas and Liquid Environments',
    amount: 'US$250,000',
  },
  {
    date: 'Aug 2024',
    role: 'Co-PI',
    program: 'Rapid Development of Instrumentation for us (RADIUS), Advanced Light Source',
    title: 'Integrating X-ray characterization and electron microscopy by unified sample holder with clean transfer',
    amount: 'US$300,000',
  },
];

export const patents = [
  { title: 'Synthesis of partially disordered phase in rocksalt materials via electrochemical pulsing', detail: 'International application, WIPO. Publication No. WO/2025/075989', url: 'https://patentscope.wipo.int/search/en/WO2025075989' },
  { title: 'High-capacity Mn-based rocksalt cathodes with structural changes', detail: 'International application, WIPO. Publication No. WO/2025/188327', url: 'https://patentscope.wipo.int/search/en/WO2025188327' },
  { title: 'Autonomous sample preparation for electron microscopy', detail: 'Invention disclosure filed with Lawrence Berkeley National Laboratory', url: '' },
];

export const pressCoverage = [
  { date: 'Sep 25, 2024', outlet: 'Berkeley Lab News Center', title: 'Manganese Cathodes Could Boost Lithium-ion Batteries', url: 'https://newscenter.lbl.gov/2024/09/25/manganese-cathodes-could-boost-lithium-ion-batteries/' },
  { date: 'Apr 28, 2021', outlet: 'MIT News', title: 'SMART investigates the science behind varying performance of different colored LEDs', url: 'https://news.mit.edu/2021/smart-performance-different-colored-leds-0428' },
];

export type TalkKind = 'Invited talk' | 'Invited workshop' | 'Oral' | 'Poster';

export const talks: { year: number; month?: string; title: string; venue: string; kind: TalkKind; note?: string }[] = [
  { year: 2026, month: 'Oct', title: 'Understanding the atomic habits of materials for energy storage', venue: 'Institute Colloquium, Max Planck Institute for Solid State Research, Stuttgart', kind: 'Invited talk' },
  { year: 2026, month: 'Feb', title: 'Looking closer, repeatedly, until energy storage makes sense', venue: 'University of California, Santa Barbara', kind: 'Invited talk' },
  { year: 2025, title: 'Development of next generation DRX cathodes through the lenses of electron microscopes', venue: 'Electrochemical Society Meeting, Chicago', kind: 'Poster', note: '2nd Prize' },
  { year: 2025, title: 'Multimodal electron microscopy characterization of electrochemically formed δ phase in manganese-rich rocksalt cathodes', venue: 'Microscopy and Microanalysis, Salt Lake City', kind: 'Oral' },
  { year: 2024, title: 'Unraveling nanoengineered microstructure in large particle DRX cathode particles', venue: 'MRS Fall Meeting, Boston', kind: 'Oral' },
  { year: 2024, title: 'Exploring next-generation DRX cathodes through multimodal electron microscopy', venue: 'Molecular Foundry, Berkeley Lab', kind: 'Invited talk' },
  { year: 2024, title: 'Hands-on tutorial on the automated orientation mapping module of the py4DSTEM package', venue: 'HyperSpy Workshop 2024, Diamond Light Source, UK', kind: 'Invited workshop' },
  { year: 2021, title: 'Detection and suppression of compositional fluctuations in InGaN light emitting diodes', venue: 'MRS Fall Meeting, Boston', kind: 'Oral' },
  { year: 2021, title: 'Origin of compositional fluctuations in InGaN light emitting diodes', venue: 'Institute of Physics Singapore', kind: 'Oral' },
  { year: 2019, title: 'Quantitative measurement of sub-nanometer In fluctuations in InGaN quantum well', venue: 'ICMASS, Nagoya', kind: 'Poster' },
  { year: 2019, title: 'Detection of large thermal vibration for Cu atoms in tetrahedrite by high-angle annular dark-field imaging', venue: 'ICMAT', kind: 'Poster' },
  { year: 2017, title: 'Anomalous scattering at high angles stemming from anisotropic atomic vibrations', venue: 'Materials Student Symposium, Indian Institute of Science, Bangalore', kind: 'Oral' },
];

export const software = [
  {
    name: 'NIMBUS',
    role: 'Lead developer',
    description:
      'A vendor-agnostic platform for high-throughput and self-driving operation of transmission electron microscopes, for new and legacy instruments.',
    deployments: ['MPI-FKF', 'Lawrence Berkeley National Laboratory', 'Stanford University'],
    url: '',
  },
  {
    name: 'py4DSTEM',
    role: 'Contributor',
    description:
      'Open-source Python tools for processing and analysis of four-dimensional scanning transmission electron microscopy (4D-STEM) data. Developed the automated multiphase detection feature for 4D-STEM datasets.',
    deployments: [],
    url: 'https://github.com/py4dstem/py4DSTEM',
  },
  {
    name: 'HyperSpy',
    role: 'Contributor',
    description:
      'Open-source Python library for the interactive analysis of multidimensional datasets that can be described as multidimensional arrays of a given signal.',
    deployments: [],
    url: 'https://github.com/hyperspy/hyperspy',
  },
];

export const skills = [
  { group: 'Electron microscopy', items: ['Atomic-resolution HAADF-STEM', '4D-STEM (SEND, ptychography)', 'EELS & EDS', 'Cryo and in-situ TEM', 'FIB sample preparation'] },
  { group: 'Modeling', items: ['First-principles (VASP, CRYSTAL)', 'Molecular dynamics (LAMMPS)', 'Monte Carlo & cluster expansion (CASM)', 'pymatgen'] },
  { group: 'Software', items: ['Python, C++, C, MATLAB', 'abTEM, py4DSTEM, HyperSpy', 'Image & signal processing toolkits', 'Linux HPC'] },
];
