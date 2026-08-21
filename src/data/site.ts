export const profile = {
  name: 'Sanxin Jiang',
  nameZh: '蒋三新',
  initials: 'SJ',
  role: 'Lecturer',
  roleZh: '讲师',
  department: 'School of Electronics and Information Engineering',
  departmentZh: '电子与信息工程学院',
  institution: 'Shanghai University of Electric Power',
  institutionZh: '上海电力大学',
  location: 'Shanghai, China',
  email: 'samjoe_2018@shiep.edu.cn',
  tagline: 'Audio Coding · Visual Perception · Learned Compression',
  statement:
    'My research spans audio signal coding and compressive sensing, industrial visual inspection, camouflaged object detection, and rate–distortion guided generative models for image compression.',
  photo: 'profile.jpg',
  cvFile: '',
  links: {
    scholar: 'https://scholar.google.com/citations?user=XBs4DqAAAAAJ',
    github: '',
    orcid: 'https://orcid.org/0000-0002-4840-5635',
  },
};

export const researchAreas = [
  {
    number: '01',
    slug: 'audio-coding',
    title: 'Audio Coding & Compressive Sensing',
    short: 'Finite-state quantization, structured sparsity, and compressive sampling for speech and audio.',
    description:
      'Early work developed memory-efficient finite-state entropy-constrained vector quantizers for MDCT coefficients, structured sparse models for lossy audio compression, and compressive sensing methods for speech and audio signals.',
    topics: ['Finite-state ECVQ', 'MDCT coding', 'Structured sparsity', 'Speech compressive sampling'],
  },
  {
    number: '02',
    slug: 'machine-audition',
    title: 'Machine Audition & Acoustic Sensing',
    short: 'UAV-based acoustic event detection, sound source localization, and array speech enhancement.',
    description:
      'Projects on machine audition systems explore acoustic event detection and recognition in complex scenes with unmanned aerial vehicles, compressive-sensing based sound source localization, and deep reinforcement learning for spatial microphone-array speech enhancement and separation.',
    topics: ['Acoustic event detection', 'UAV sensing', 'Sound source localization', 'Array speech enhancement'],
  },
  {
    number: '03',
    slug: 'defect-detection',
    title: 'Industrial Visual Inspection',
    short: 'Surface defect detection for wafers and manufacturing, with improved non-maximum suppression.',
    description:
      'Recent work builds defect detectors on generic object-detection networks, proposes category-related NMS guided by cover ratios, and develops positive-sample expansion methods for surface defect detection in industrial settings.',
    topics: ['Wafer defect detection', 'Category-related NMS', 'Few-shot inspection', 'Industrial AI'],
  },
  {
    number: '04',
    slug: 'camouflage',
    title: 'Camouflaged Object Detection',
    short: 'Segmentation–diffusion networks and boundary-guided attention for hidden targets.',
    description:
      'We design two-stage segmentation–diffusion frameworks, dual-optimized COD pipelines, and boundary-guided differential attention to improve accuracy on objects that blend into complex backgrounds.',
    topics: ['SDNet', 'Boundary-guided attention', 'Two-stage COD', 'Fine-grained segmentation'],
  },
  {
    number: '05',
    slug: 'learned-compression',
    title: 'Learned Image Compression',
    short: 'Rate–distortion guided diffusion models that enhance learned image codecs.',
    description:
      'RDDM treats learned image compression as an RD-constrained codec and uses diffusion priors to restore structure and texture, improving fidelity across CNN, Transformer, and hybrid LIC architectures.',
    topics: ['RDDM', 'Diffusion priors', 'Rate–distortion', 'LIC enhancement'],
  },
];

export const navigation = [
  { label: 'Home', href: '' },
  { label: 'Research', href: 'research/' },
  { label: 'Publications', href: 'publications/' },
  { label: 'Teaching', href: 'teaching/' },
  { label: 'Projects', href: 'projects/' },
  { label: 'CV / Contact', href: 'cv-contact/' },
];
