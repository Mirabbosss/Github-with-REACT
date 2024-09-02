import OverviewIcon from '../components/icons/navigation_overview.svg';
import RepositoriesIcon from '../components/icons/navigation_repositories.svg';
import ProjectsIcon from '../components/icons/navigation_projects.svg';
import PackagesIcon from '../components/icons/navigation_packages.svg';
import StarsIcon from '../components/icons/navigation_stars.svg';
import NamozVaqtlari from '../assets/images/namoz-vaqtlari.png';
import Github from '../assets/images/github.png';
import ToDo from '../assets/images/to-do.png';
import MoviesPark from '../assets/images/movies-park.png';
import CarsCompany from '../assets/images/cars-company.png';
import OsonUz from '../assets/images/oson-uz.png';
import BookMagazine from '../assets/images/book-magazine.png';
import LandingPage from '../assets/images/landing-page.png';

export const headerTopNavigation = [
    {
        title: 'Product',
        link: '/'
    },
    {
        title: 'Solutions',
        link: '/'
    },
    {
        title: 'Open Source',
        link: '/'
    },
    {
        title: 'Pricing',
        link: '/'
    }
];

export const userNavigation = [
    {
        path: '/',
        title: 'Overview',
        icon:  OverviewIcon,
    },
    {
        path: '/repositories',
        title: 'Repositories',
        icon: RepositoriesIcon,
    },
    {
        path: '/projects',
        title: 'Projects',
        icon: ProjectsIcon,
    },
    {
        path: '/packages',
        title: 'Packages',
        icon: PackagesIcon,
    },
    {
        path: '/stars',
        title: 'Stars',
        icon: StarsIcon,
    }
];

export const footerNavigation = [
    {
        title: 'Terms',
        link: '/terms'
    },
    {
        title: 'Privacy',
        link: '/privacy'
    },
    {
        title: 'Security',
        link: '/security'
    },
    {
        title: 'Status',
        link: '/status'
    },
    {
        title: 'Docs',
        link: '/docs'
    },
    {
        title: 'Contant GitHub',
        link: '/contact'
    },
    {
        title: 'Pricing',
        link: '/pricing'
    },
    {
        title: 'API',
        link: '/api'
    },
    {
        title: 'Training',
        link: '/training'
    },
    {
        title: 'Blog',
        link: '/blog'
    }, 
    {
        title: 'About',
        link: '/about'
    }
];

export const projects = [
    {
        title: 'Namoz vaqtlari',
        used: 'JavaScript, HTML, CSS, TailwindCSS',
        link: 'https://namoz-vaqtlari-mu.vercel.app',
        github: 'https://github.com/Mirabbosss/Namoz-vaqtlari',
        image: NamozVaqtlari
    },
    {
        title: 'GitHub by Mirabbos',
        used: 'React, JavaScript, Axios, SCSS, TailwindCSS',
        link: 'https://github-with-react.vercel.app',
        github: 'https://github.com/Mirabbosss/Github-with-REACT',
        image: Github
    },
    {
        title: 'TO-DO',
        used: 'React, SCSS, TailwindCSS',
        link: 'https://to-do-react-rho-two.vercel.app',
        github: 'https://github.com/Mirabbosss/TO-DO---REACT',
        image: ToDo
    },
    {
        title: 'Movies Park',
        used: 'JavaScript, CSS, TailwindCSS',
        link: 'movies-park-bay.vercel.app',
        github: 'https://github.com/Mirabbosss/Movies-park',
        image: MoviesPark
    },
    {
        title: 'Cars Company',
        used: 'JavaScript, CSS, TailwindCSS',
        link: 'https://cars-project-nine.vercel.app/',
        github: 'https://github.com/Mirabbosss/EXAM-3',
        image: CarsCompany
    },
    {
        title: 'OSON-UZ',
        used: 'HTML, TailwindCSS, Figma',
        link: 'https://oson-uz-team-project.netlify.app/',
        github: 'https://github.com/Mirabbosss/Oson-uz',
        image: OsonUz
    },
    {
        title: 'Book Magazine',
        used: 'HTML, SCSS, TailwindCSS',
        link: 'https://book-magazine.vercel.app/',
        github: 'https://github.com/Mirabbosss/Book-magazine',
        image: BookMagazine
    },
    {
        title: 'Landing Page',
        used: 'CSS, SCSS, Bootstrap',
        link: 'https://landing-page-liart-gamma.vercel.app/',
        github: 'https://github.com/Mirabbosss/Landing-page',
        image: LandingPage
    }
]