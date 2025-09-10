import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.jpg';
import grubmarketImage from '../images/portfolio/grubmarket.png';
import loanwatchImage from '../images/portfolio/loanwatch.png';
import saasconsoleImage from '../images/portfolio/saasconsole.png';
import snaptoappImage from '../images/portfolio/snap.png';
import vecosImage from '../images/portfolio/vcs.png';
import zentiveImage from '../images/portfolio/zentive-img.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Alexander Venus Portfolio',
  description: "Alexander Venus Portfolio Website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Alexander Venus.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Philippines based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Hooli Software Inc</strong> helping build software solutions for our clients.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me mashing buttons in <strong className="text-stone-100">Wuthering Waves</strong>,
        studying <strong className="text-stone-100">Next.js</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">South East Asian Countries</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Venus, Alexander M._CV.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a software engineer with a passion for building software solutions that are both functional and efficient. 
  I am a quick learner and I am always looking to improve my skills. My main tech stack is React and Golang. I have worked on a variety of projects, from small to large, and I have a strong understanding of the software development process. `,
  aboutItems: [
    {label: 'Location', text: 'Bulacan, Philippines', Icon: MapIcon},
    {label: 'Age', text: '26', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Filipino', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Gaming, Traveling', Icon: SparklesIcon},
    {label: 'Study', text: 'STI College of Balagtas', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Hooli Software Inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 7,
      },
      {
        name: 'Filipino',
        level: 10,
      }
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 10,
      },
      {
        name: 'Typescript',
        level: 9,
      },
      {
        name: 'Next.js',
        level: 4,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Golang',
        level: 10,
      },
      {
        name: 'VB .Net',
        level: 5,
      },
      {
        name: 'Node.js',
        level: 4,
      },
    ],
  },
  {
    name: 'State Management Libraries',
    skills: [
      {
        name: 'Redux Saga',
        level: 9,
      },
      {
        name: 'Tanstack Query',
        level: 8,
      },
      {
        name: 'Jotai',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'SaaSConsole',
    description: 'SaaSConsole is a platform that manages groups of users and collections of SaaS apps. It helps the user manage their users/groups and assign them to multiple SaaS applications with common rights.',
    url: 'https://www.saasconsole.com',
    image: saasconsoleImage,
  },
  {
    title: 'Loanwatch',
    description: 'LoanWatch is a financial technology platform that specializes in Asset-Based Lending (ABL) automation. It serves as a calculation engine that automates ineligibles and borrowing base calculations for financial institutions.',
    url: 'https://loanwatch.io/',
    image: loanwatchImage,
  },
 
  {
    title: 'Zentive',
    description: 'Zentive is an all-in-one Field Service Management Software designed specifically for the green industry. It automates daily business operations for landscaping, lawn care, tree service, and snow removal businesses.',
    url: 'https://zentive.io/',
    image: zentiveImage,
  },
  {
    title: 'Vecos',
    description: 'Vecos is a digital locker access management platform that provides secure access control and user management for locker systems. It enables users to reserve, access, and manage lockers through a web-based interface.',
    url: 'https://www.vecos.com',
    image: vecosImage,
  },
  {

    title: 'SnaptoApp',
    description: 'SnaptoApp is a platform that helps the users to create their own pwa apps without the need to code.',
    url: 'https://www.snaptoapp.com/',
    image: snaptoappImage,
  },
  {
    title: 'GrubMarket Connect',
    description: 'Grubmarket Connect is a proprietary platform made specifically for the Grubmarket Group.',
    url: 'https://www.grubmarket.com',
    image: grubmarketImage,
  },
  

  
 
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2020',
    location: 'STI College of Balagtas',
    title: 'Bachelor of Science Major in Computer Engineering',
    content: <></>,
  },
  {
    date: 'June 2015',
    location: 'Jesus is Lord Colleges Inc',
    title: 'High School',
    content: <></>
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2022 - Present',
    location: 'Hooli Software Inc',
    title: 'Full Stack Developer - Team Lead',
    content: (
      <p>
        Got more responsibilities and started leading a team of developers. Also started to create projects from scratch and help other projects to finish the development.
        <br/> Notable Projects: Zentive and Vecos, 
      </p>
    ),
  },

  {
    date: 'May 2021 - June 2022',
    location: 'Hooli Software',
    title: 'Junior Full Stack Developer',
    content: (
      <p>
          Started working on projects more so on frontend development. I have also developed some backend tools with GoLang. I also got to work for some months with Terraform.
          <br/>Notable Projects: SaaSConsole, Loanwatch, GrubMarket
      </p>
    ),
  },
  {
    date: 'March 2021 - May 2021',
    location: 'Hooli Software',
    title: 'Intern Software Engineer',
    content: (
      <p>
        Trained for 2 months on the basics of software development and then started working on projects more so on frontend development.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'alexandervenus22@gmail.com',
      href: 'mailto:alexandervenus22@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Bulacan, Philippines',
      href: 'https://www.google.com/maps/place/Bulacan/@14.8560519,120.8300262,12z/data=!3m1!4b1!4m6!3m5!1s0x3397c8262c6b37a1:0x564808802819302!8m2!3d14.8560519!4d120.8300262!16s%2Fg%2F11f86qk1nb?hl=en&entry=ttu',
    },
    {
      type: ContactType.Instagram,
      text: '@bbaboiiiii',
      href: 'hhttps://www.instagram.com/bbaboiiiii/',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Alexander Venus',
      href: 'https://www.linkedin.com/in/alexander-venus-338482150/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/alexander-venus-338482150/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'hhttps://www.instagram.com/bbaboiiiii/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://x.com/extrangxander22'},
];
