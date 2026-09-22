export const profile = {
  name: 'Saurav Kumar',
  position: 'Full-Stack Developer | Aspiring SDE | GenAI',
  email: 'kumarsaurav1881@gmail.com',
  phone: '+91-8235852423',
  location: 'Kota, Rajasthan, India',
  available: true,
  links: {
    github: 'https://github.com/sauraviiitk',
    linkedin: 'https://www.linkedin.com/in/saurav-yadav-9b410b28b/',
    leetcode: 'https://leetcode.com/mylciiitk',
    codechef: 'https://www.codechef.com/users/silentstack'
  },
  heroTitle: 'Saurav Kumar — Full-Stack Developer | Aspiring SDE | GenAI',
  heroDescription:
    'Final year CSE student at IIIT Kota building production-grade distributed systems with Node.js, Redis, Socket.IO and PostgreSQL. I design real-time WebSocket architectures handling 1K+ concurrent connections and resolve concurrency issues with atomic Redis operations. Passionate about scalable backend systems, cloud-native development and networking.'
}

export const skills = {
  Languages: ['JavaScript', 'TypeScript', 'Python', 'C++'],
  'Backend & Networking': ['Node.js', 'Express.js', 'REST APIs', 'WebSocket / Socket.IO', 'Redis (Pub/Sub, atomic ops)', 'JWT Auth'],
  Frontend: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS'],
  Databases: ['MongoDB', 'PostgreSQL', 'Firebase'],
  'DevOps & Cloud': ['Docker', 'Linux', 'Git', 'CI/CD basics', 'Vercel', 'Postman'],
  Coursework: ['Operating Systems', 'DBMS', 'SQL', 'Computer Networks', 'Machine Learning']
}

export const experience = [
  {
    role: 'Software Development Intern',
    company: 'Dicotr',
    period: 'Aug 2025 — Nov 2025',
    certificate: 'https://drive.google.com/file/d/1t5pS2c-zE_ygRty6rmcxL7G7EgAhTkbw/view?usp=sharing',
    points: [
      'Architected MySQL database schemas and deployed RESTful APIs in Node.js and Express.js, optimizing queries, routing, validation and error handling across 4 microservices to eliminate data-sync inconsistencies.',
      'Resolved critical production data inconsistency issues by tracing query and API logic across services, fixing recurring synchronization failures affecting live users.',
      'Collaborated in an Agile team using Git-based workflows, code reviews and GitHub Copilot to accelerate development cycles.'
    ]
  }
]

export const education = [
  {
    school: 'Indian Institute of Information Technology (IIIT) Kota',
    degree: 'B.Tech in Computer Science and Engineering',
    period: 'Aug 2023 — May 2027'
  },
  {
    school: 'Patna Collegiate School, Bihar',
    degree: 'Class XII',
    period: '85.6%'
  },
  {
    school: 'St. John Residential Public School, Bihar',
    degree: 'Class X',
    period: '94.6%'
  }
]

export const achievements = [
  'Top 10 out of 600+ teams — IEEE Hackathon, IIIT Gwalior (built a distributed real-time system under 24 hours)',
  '700+ problems solved across Codeforces, LeetCode (1685+ rating), and CodeChef (3 star)',
  "Advanced to Round 3 of Flipkart GRiD 8.0, one of India's premier engineering competitions, by excelling in the screening and online assessment rounds.",
];

export type Project = {
  slug: string
  name: string
  image: string
  description: string
  longDescription: string
  tags: string[]
  github?: string
  live?: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    slug: 'urbanmove',
    name: 'UrbanMove — Real-Time Ride Hailing Platform',
    image: '/projects/urbanmove.png',
    description:
      'A real-time ride-booking platform with Redis geospatial matching, distributed locking for exactly-once ride assignment, and a WebSocket presence layer.',
    longDescription:
      'Architected a real-time ride-booking system leveraging Redis GEOSEARCH for geospatial indexing and low-latency nearest-driver discovery, enabling efficient ride matching at scale. Built a Redis + MongoDB distributed locking mechanism that guarantees exactly-once ride assignment across distributed services, eliminating race conditions during failures. Built a bidirectional Socket.IO layer with heartbeat-based presence tracking and automatic stale-state cleanup in under 5 seconds. Decoupled authentication, real-time state management, and location services into independent modules.',
    tags: ['Node.js', 'Express.js', 'Socket.IO', 'Redis', 'MongoDB', 'React.js', 'Leaflet.js'],
    github: 'https://github.com/sauraviiitk/urbanmove',
    live: 'https://urbanmove-eou3.vercel.app/',
    highlights: [
      'Redis GEOSEARCH for low-latency nearest-driver discovery',
      'Redis + MongoDB distributed locking — exactly-once ride assignment',
      'Socket.IO presence layer with sub-5s stale-state cleanup',
      'Decoupled auth, real-time state, and location service modules'
    ]
  },
  {
    slug: 'arogyapath',
    name: 'Arogyapath — Mental Wellness Platform',
    image: '/projects/arogyapath.svg',
    description:
      'A mental wellness platform combining Gemini-powered insights with a real-time, JWT-secured chat microservice backed by Firebase.',
    longDescription:
      'Designed a scalable Node.js backend integrating the Gemini API to generate personalized mental wellness insights, engineering resilient API pipelines with custom rate-limiting and automated error recovery. Developed a low-latency, real-time chat microservice utilizing WebSockets, secured with JWT-based handshakes and synchronized state with Firebase for highly available, persistent message storage. Designed an event-driven architecture to orchestrate asynchronous background tasks, including appointment webhooks and onboarding pipelines.',
    tags: ['React.js', 'Node.js', 'Firebase', 'Gemini API', 'WebSocket', 'JWT'],
    github: 'https://github.com/sauraviiitk/Arogyapathiiitm',
    highlights: [
      'Gemini API integration with custom rate-limiting and error recovery',
      'Real-time WebSocket chat secured via JWT handshakes',
      'Firebase-backed persistent, highly-available message storage',
      'Event-driven pipeline for webhooks and onboarding tasks'
    ]
  },
  {
    slug: 'chatapp',
    name: 'Chat App — Real-Time Messaging',
    image: '/projects/chatapp.svg',
    description:
      'A real-time chat application built with Node.js and Socket.IO for instant, bidirectional messaging between users.',
    longDescription:
      'A real-time messaging application featuring instant bidirectional communication between users, built on a Node.js/Express backend with a WebSocket layer for live message delivery. Focused on low-latency delivery and a clean, responsive chat interface.',
    tags: ['Node.js', 'Express.js', 'Socket.IO', 'JavaScript'],
    github: 'https://github.com/sauraviiitk/Chatapp',
    live: 'https://chatapp-seven-ochre.vercel.app',
    highlights: [
      'Real-time bidirectional messaging over WebSockets',
      'Node.js/Express backend with room-based delivery',
      'Deployed and live on Vercel'
    ]
  },
  {
    slug: 'fashly',
    name: 'Fashly — Fashion Discovery App',
    image: '/projects/fashly.png',
    description:
      'A modern, fast fashion discovery front-end built with React, Vite and Tailwind CSS.',
    longDescription:
      'Fashly is a fashion-focused web app built for speed and a clean shopping-style browsing experience, using React and Vite for instant HMR and Tailwind CSS for a polished, responsive UI.',
    tags: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/sauraviiitk/Fashly-',
    live: 'https://fashly.vercel.app',
    highlights: [
      'React + Vite front-end with fast HMR dev experience',
      'Tailwind CSS design system for a polished shopping UI',
      'Deployed and live on Vercel'
    ]
  }
]
