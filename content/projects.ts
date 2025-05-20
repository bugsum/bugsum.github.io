import { Project } from '@/types';

export const projects: Project[] = [
    {
        title: 'CyberBully Tweet Classifier',
        description:
            'A machine learning project that detects cyberbullying in tweets by classifying text as harmful or non-harmful. Built for educational and research purposes to explore text classification and responsible AI use.',
        image: '/images/cyberbully.jpg',
        technologies: ['Python', 'sci-kit', 'Spotify API', 'Heroku'],
        link: 'https://cyber-bully-tweet-detection.onrender.com/',
    },
    {
        title: 'Markdown To HTML Convertor',
        description:
            'A simple web-based editor that lets users write Markdown and instantly see the HTML preview. Built for lightweight, real-time Markdown editing and conversion.',
        image: '/images/md-to-html.png',
        technologies: ['HTML', 'CSS', 'Javascript', 'Marked'],
        link: 'https://bugsum.github.io/markdown-to-html/',
    },
    {
        title: 'Ochako',
        description:
            'A sleek, modern Discord bot built for simplicity and performance. Features include moderation tools, utility commands, API integrations, and a modular architecture for easy scalability. Designed for smooth UX and fast response times across growing communities.',
        image: 'https://i.ibb.co/z51dJQs/image.jpg',
        technologies: ['Node.js', 'Discord.js', 'MongoDB'],
        link: 'https://google.com',
    },
];
