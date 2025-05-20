interface Link {
    name: string;
    url: string;
}

export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
    links: Link[];
    url: string;
}

export interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
    stars?: number;
    installs?: string;
}
