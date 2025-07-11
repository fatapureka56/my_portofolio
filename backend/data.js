// backend/data.js

const educationHistory = [
  {
    id: 1,
    period: '2023 - Sekarang',
    institution: 'Universitas Amikom Yogyakarta',
    major: 'S1 - Teknik Informatika'
  },
  {
    id: 2,
    period: '2017 - 2020',
    institution: 'MAN PACITAN',
    major: 'IPA'
  },
  {
    id: 3,
    period: '2013 - 2016',
    institution: 'MTSN PACITAN',
    major: 'MTS'
  },
  {
    id: 4,
    period: '2008 - 2014',
    institution: 'SDN PLOSO 2',
    major: 'SD'
  },
];


const skills = [
  { name: 'Vue.js', level: 'Mahir' },
  { name: 'Tailwind CSS', level: 'Mahir' },
  { name: 'Node.js', level: 'Menengah' },
  { name: 'JavaScript', level: 'Mahir' },

];


const projects = [
  {
    title: 'DemonTix',
    image: 'https://via.placeholder.com/500x300?text=Jogja+Inside',
    description: 'Website rekomendasi destinasi wisata di Yogyakarta dengan fitur login admin, manajemen user & destinasi.',
    tech: ['Vue.js', 'Laravel', 'MySQL'],
    link: 'https://github.com/iqblmlnf/DemonTix-Kelompok-5.git' // atau link deploy kamu
  },

];

module.exports = { educationHistory, skills, projects };
