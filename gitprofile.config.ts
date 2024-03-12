// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'mashunterbd', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/mashunter/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Helpful video Content',
          description:
            'I have a YouTube channel through which I create content and distribute it to everyone so that everyone can benefit from it',
          imageUrl:
            'https://raw.githubusercontent.com/mashunterbd/mashunter/main/image/Picsart_24-03-06_16-17-15-331.jpg',
          link: 'https://www.youtube.com/@mashunter',
        },
        {
          title: 'Problem Solving Community',
          description:
            'Many problems related to Android, Linux, and Windows are constantly encountered by our community with some solutions and is updated over time',
          imageUrl:
            'https://raw.githubusercontent.com/mashunterbd/mashunter/main/image/Picsart_24-03-06_16-20-26-775.jpg',
          link: 'https://t.me/sloveproblems',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Md. Abu Bakar Siddik ',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'mashunter',
    twitter: 'mashunterbd',
    mastodon: '',
    facebook: 'masshuvo.fb',
    instagram: 'masshuvo.ins',
    youtube: 'mashunter', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'mashunter',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: 'mashunterbd',
    website: 'https://www.mashunter.xyz',
    phone: '',
    email: 'mdabubakar.mail.bd@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1z6XcqaDIR20UWdqyjexM_wSZDyJ7R-O1/view?usp=drivesdk', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'Python',
    'C',
  ],
  experiences: [
    {
      company: 'Byte Capsule',
      position: 'Jr.Penetration Taster',
      from: 'February 2024',
      to: 'Present',
      companyLink: 'https://bytecapsuleit.com',
    },
    {
      company: 'YouTube Inc',
      position: 'Content Creator',
      from: 'August 2020',
      to: 'Present',
      companyLink: 'https://www.youtube.com/@mashunter',
    },
  ],
  certifications: [
    {
      name: 'Ethical Hacking for Professionals',
      body: 'This certificate is proudly presented by Byte Capsule for successfully completing 7 Months of online course',
      year: 'February 2024',
      link: 'https://drive.google.com/file/d/1w9CgoVDU3VF4jQEjVFQJdRlbPCOHsfJg/view?usp=drivesdk',
    },
    { 
    name: 'Certified Ethical Hacker',
      body: 'Certification through examination administered by Team Matrix',
      year: 'August 2023',
      link: 'https://drive.google.com/file/d/1b5ehHZJfdEkXbrUvPZSZnglkRsELpjhi/view?usp=drivesdk',
      },
    { 
    name: 'Cyber Security Fundamentals in Bangla',
      body: 'Certification taught by Sakib Haque Zisan on Udemy.',
      year: 'March 2024',
      link: 'https://www.udemy.com/certificate/UC-03879d18-dcb9-44f5-82b7-7e33d60f61f7/',
      },
    { 
    name: 'Web Hacking for Beginners ',
      body: 'Certification taught by Juravlea Nicolae on Udemy.',
      year: 'March 2024',
      link: 'https://www.udemy.com/certificate/UC-bb9237df-e603-466a-aa31-839dbabe8c6a/',
      }
  ],
  educations: [
    {
      institution: 'Anjuman Mokhlesur Rahman Polytechnic Institute',
      degree: 'Computer Science and Engineering [CSE]',
      from: '2023',
      to: 'Present',
    },
    {
      institution: 'Metropolitan Creative College',
      degree: 'Secondary School Certificate [SSC]',
      from: '2019',
      to: '2020',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'mashunter', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/mashunterbd/mashunter"
      target="_blank"
      rel="noreferrer"
    >mashunterbd</a> and ❤️`,

  enablePWA: false,
};

export default CONFIG;
