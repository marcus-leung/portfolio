// id
// title
// desciption
// img
// links
// featured
// categories
// technologies
// details
//    overview
//    tech
//    features
//    achieve

import SFIG from '../assets/sfig.png';
import Stock from '../assets/stock.png';
import CruzHacks24 from '../assets/cruzhacks24.png';
import CruzHacks25 from '../assets/cruzhacks25.png';
import SunnyViewsImage from '../assets/sunnyviews.png';
import HackDavis from '../assets/hackdavis.png';

const projects = [
  {
    id: 1,
    title: 'CruzHacks 2025: SlugMeditate',
    description:
      'A VR meditation pipeline that transforms user prompts into immersive virtual environments using generative AI and 3D scene mapping.',
    img: CruzHacks25,
    links: {
      github: 'https://github.com/briankhoi/slugmeditate',
      live: 'https://slugmeditate.tech/',
      devpost: 'https://devpost.com/software/slugmeditate',
    },
    featured: true,
    categories: ['AI', 'hackathon'],
    technologies: [
      'Google AI Gemini',
      'Niantic Studio WebXR',
      'Gaussian Splatting',
    ],
    details: {
      overview:
        'A VR meditation pipeline that transforms user prompts into immersive virtual environments using generative AI and 3D scene mapping.',
      tech: [
        'Used Google Imagen 3 to generate vivid, AI-powered images from user prompts',
        'Animated the generated images into smooth video loops using Google AI Gemini Veo 2 for cinematic quality',
        'Converted the video into a 3D scene using Gaussian Splatting, enabling users to explore it in virtual reality',
        'Built the VR experience using Niantic Studio WebXR, enabling browser-based immersive experiences',
        'Integrated calming ambient music with Google MusicFX to complement the visual experience and enhance the meditative atmosphere',
      ],
      features: [
        "Transformed text inputs like 'a peaceful forest at dusk' into an immersive VR experience with AI-powered image and video generation",
        'Utilized cutting-edge generative AI tools to build a pipeline that converts thoughts into an ambient 3D scene in real-time',
        'Created a relaxing and personalized VR experience with fully immersive sound and visual components',
      ],
      achieve: [
        'Built a complete text-to-VR pipeline with generative AI in under 48 hours during the CruzHacks hackathon',
        'Successfully integrated Google AI Gemini tools for media generation and combined them with 3D spatial computing and VR rendering',
        'Created an emotionally resonant experience that blends creativity, technology, and mindfulness',
        'Learned and applied advanced tools like Imagen 3, Veo 2, and Gaussian Splatting under time constraints',
        'Winner of the [MLH - Gemini] Best Use of Gemini API',
        'Winner of the [Sponsor - Niantic Studio WebXR track]',
      ],
    },
  },

  {
    id: 2,
    title: 'CruzHacks 2024: SlugHug',
    description:
      'A therapeutic messaging platform designed to foster meaningful and secure communication through sentiment-analyzed messages. It ensures a safe and positive environment for users to connect and interact.',
    img: CruzHacks24,
    links: {
      github: 'https://github.com/marcus-leung/SlugHug',
      devpost: 'https://devpost.com/software/slughug',
    },
    featured: false,
    categories: ['web', 'hackathon'],
    technologies: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'Tailwind CSS',
    ],
    details: {
      overview:
        'A therapeutic messaging platform designed to foster meaningful and secure communication through sentiment-analyzed messages. It ensures a safe and positive environment for users to connect and interact.',
      tech: [
        'Developed using the MERN (MongoDB Atlas, Express.js, React.js, Node.js) stack',
        'Robust back-end functionalities integrated with an engaging front-end',
        'Leveraged Axure for UI/UX design, ensuring a visually appealing and cohesive user interface.',
        'Integrated Tailwind CSS for streamlined and efficient styling, ensuring a visually cohesive design across the platform.',
      ],
      features: [
        'Aesthetically pleasing design with bubbly characters',
        'Advance sentiment analysis using Meaning Cloud to filter troll/negative messages',
        'Unique one-time response system',
      ],
      achieve: [
        'Fostered meaningful and secure communication through sentiment-analyzed messages',
        'Won 2nd place in Health Hack category and received sponsorship from Axure at CruzHacks 2024',
      ],
    },
  },
  {
    id: 3,
    title: "HackDavis 2025: EthicScope",
    description:
      "A tool that empowers users to make informed purchasing decisions by scanning products and revealing supply chain ethics, including potential links to child labor, sustainability issues, and other concerns.",
    img: HackDavis,
    links: {
      github: "https://github.com/marcus-leung/EthicScope",
      devpost: "https://devpost.com/software/ethicscope",
    },
    featured: true,
    categories: ["web", "hackathon"],
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Flask", "MongoDB", "Cerebras"],
    details: {
      overview:
        "A tool that empowers users to make informed purchasing decisions by scanning products and revealing supply chain ethics, including potential links to child labor, sustainability issues, and other concerns.",
      tech: [
        "Built the backend with Flask for API logic and MongoDB for ethical data storage",
        "Integrated Cerebras for high-performance AI-powered data processing",
        "Developed the frontend with Next.js for server-side rendering and React.js for interactivity",
        "Styled the interface with Tailwind CSS to ensure consistency and responsiveness across devices",
      ],
      features: [
        "Live scanning feature to check product ethics instantly via barcode",
        "Aggregated information on child labor, sustainability, and corporate ethics",
        "AI-enhanced perspective analysis to present multiple sides of complex issues",
        "Clean and accessible UI that encourages thoughtful user engagement",
      ],
      achieve: [
        "Won Best Social Justice Hack at HackDavis 2025",
        "Created a meaningful tool to raise awareness and promote ethical purchasing habits",
        "Successfully integrated cutting-edge tools into a functional, intuitive product",
      ],
    },
  },

  {
    id: 4,
    title: 'Slug Fund Investment Group Website',
    description:
      'A simple informative website showcasing club details, events, research papers, and FAQs with a user-friendly interface.',
    img: SFIG,
    links: {
      github:
        'https://github.com/marcus-leung/Slug-Fund-Investment-Group-Website',
      live: 'https://slugfundinvestmentgroup.com',
    },
    featured: false,
    categories: ['web'],
    technologies: ['React.js', 'Bootstrap'],
    details: {
      overview:
        'A simple informative website showcasing club details, events, research papers, and FAQs with a user-friendly interface.',
      tech: [
        "Utilized HTML and CSS for structuring and styling the website's content and layout",
        'Integrated React.js to develop reusable components, enabling efficient rendering of content',
        'Implemented Bootstrap framework for responsive design elements and to streamline the development process',
      ],
      features: [
        'Implemented routing and intuitive navigation, ensuring easy exploration across different sections and pages',
        'Included a user-friendly dropdown FAQ for quick access to commonly asked questions, enhancing user convenience and accessibility',
        "Showcased a collection of photos featuring club members and activities, offering a glimpse into the club's vibrant community",
      ],
      achieve: [
        'Improved accessibility to club information, resulting in heightened member involvement and attendance in events and meetings',
        "Enhanced the club's overall online presence and reputation, attracting potential new members and generating interest among the college community",
        'Accumulated notable online traffic with more than 225 unique visitors and logged over 1,500 event counts to date',
      ],
    },
  },
  {
    id: 5,
    title: 'SunnyViews',
    description:
      'SunnyViews is a web application that predicts stock and cryptocurrency prices using machine learning. Built with a React.js frontend and FastAPI backend, it provides users with a sleek interface to forecast market trends and visualize predictions, all containerized with Docker and hosted on AWS Fargate.',
    img: SunnyViewsImage,
    links: {},
    featured: false,
    categories: ['web'],
    technologies: [
      'React.js',
      'Tailwind CSS',
      'FastAPI',
      'Docker',
      'AWS Fargate',
      'Machine Learning',
    ],
    details: {
      overview:
        'SunnyViews is a market prediction platform that allows users to forecast the future prices of stocks and cryptocurrencies.',
      tech: [
        'Developed a responsive frontend using React.js and styled with Tailwind CSS for a modern, user-friendly interface',
        'Implemented the backend using FastAPI to serve machine learning models and process prediction requests efficiently',
        'Trained and integrated machine learning models to forecast future stock and crypto price movements',
        'Containerized the entire application using Docker for consistency across development and production environments',
        'Deployed on AWS Fargate, using ECS to manage containers and ensure scalable, serverless infrastructure',
      ],
      features: [
        'Live prediction interface for entering stock or crypto tickers',
        'Visualized forecast results using dynamic charts to help users understand trends and market behavior',
        'Efficient API calls between the frontend and backend to deliver real-time prediction results',
      ],
      achieve: [
        'Successfully deployed a full-stack ML-powered financial app using modern DevOps tools',
        'Learned and applied real-world cloud deployment practices using AWS Fargate and ECS',
        'Enhanced user understanding of market trends through intuitive charting and forecasting visuals',
      ],
    },
  },

  {
    id: 6,
    title: 'Stock Market Analysis and Visualization Application',
    description:
      'A user-friendly stock market tool to analyze stock prices using various indicators for better decision-making.',
    img: Stock,
    links: {
      github: 'https://github.com/marcus-leung/stockmarketanalysistool',
    },
    featured: false,
    categories: ['application'],
    technologies: ['Python', 'Matplotlib', 'PyQT5'],
    details: {
      overview:
        'A user-friendly stock market tool to analyze stock prices using various indicators for better decision-making.',
      tech: [
        'Python for overall application development',
        'Alpha Vantage API for accessing stock market data',
        'Matplotlib library for creating graphs and visual representations',
        'PyQT5 for building an intuitive interface for user interaction',
      ],
      features: [
        'Enables users to input and track their desired stock tickers',
        'Allows selection of different indicators like simple moving averages, exponential moving averages, and Fibonacci retracement levels',
        'Displays stock price movements alongside chosen indicators',
        'Offers interactive graphs for specified time intervals, aiding analysis',
      ],
      achieve: [
        'Facilitates comprehensive analysis through multiple indicators in a single platform',
        'Offers up-to-date stock market information via the Alpha Vantage API',
        'Empowers users to make informed decisions by visualizing stock price trends with selected indicators',
      ],
    },
  },
];

export default projects;
