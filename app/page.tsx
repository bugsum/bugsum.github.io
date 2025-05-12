import ExperienceCard from '@/components/cards/experience';
import ProjectCard from '@/components/cards/project';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default async function Home() {
    return (
        <main className="min-h-screen bg-[#0a192f] font-mono text-gray-300">
            <div className="container mx-auto">
                <div id="wrapper" className="flex flex-col lg:flex-row">
                    {/* Left Section (Sticky) */}
                    <Header />

                    {/* Right Section */}
                    <div className="space-y-20 p-8 lg:ml-[40%] lg:w-[60%] lg:p-16">
                        {/* About Section */}
                        <section id="about" className="space-y-6 px-4">
                            <h2 className="font-sans text-2xl font-bold text-gray-100">About Me</h2>
                            <div className="space-y-4">
                                <p>
                                    I'm a full-stack developer who loves building smooth,
                                    high-performance user experiences — from sleek interfaces to
                                    powerful backend systems. I enjoy merging creative design with
                                    solid engineering, making sure everything not only looks clean
                                    but works flawlessly under the hood.
                                </p>
                                <p>
                                    Right now, I'm focused on crafting modern web tools,
                                    game-related platforms, and automation systems that save time
                                    and effort — whether it's for Minecraft servers, RP communities,
                                    or public APIs. I care deeply about clean architecture,
                                    maintainability, and developer-first workflows.
                                </p>
                                <p>
                                    Over the years, I've worked on a variety of projects — solo and
                                    in teams — across gaming networks, Discord bots, complex
                                    roleplay frameworks, and full-stack web platforms. Whether I'm
                                    designing a beautiful UI, scripting server logic, or automating
                                    deployments, I aim to bring clarity and structure to everything
                                    I build.
                                </p>
                                <p>
                                    Outside of coding, you'll find me brainstorming future projects,
                                    designing systems, or deep-diving into game mechanics and
                                    community tools.
                                </p>
                            </div>
                        </section>

                        {/* Experience Section */}
                        <section id="experience" className="space-y-6">
                            <h2 className="px-4 font-sans text-2xl font-bold text-gray-100">
                                Experience
                            </h2>
                            <div className="group space-y-0">
                                <ExperienceCard
                                    title="Senior Frontend Engineer, Accessibility"
                                    company="Acme Corp"
                                    period="2024 — PRESENT"
                                    description="Build and maintain critical components used to construct the frontend across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
                                    technologies={[
                                        'JavaScript',
                                        'TypeScript',
                                        'React',
                                        'Storybook',
                                    ]}
                                    links={[{ name: 'Acme Corp', url: 'https://example.com' }]}
                                />

                                <ExperienceCard
                                    title="Lead Engineer"
                                    company="TechStart Inc"
                                    period="2018 — 2024"
                                    description="Led development teams in creating responsive web applications. Architected frontend solutions and implemented design systems for consistent user experiences across multiple products."
                                    technologies={['React', 'Next.js', 'Node.js', 'GraphQL']}
                                    links={[{ name: 'TechStart', url: 'https://example.com' }]}
                                />

                                <ExperienceCard
                                    title="UI Engineer Co-op"
                                    company="Apple"
                                    period="JULY — DEC 2017"
                                    description="Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback."
                                    technologies={['JavaScript', 'SCSS', 'Ember', 'MusicKit.js']}
                                    links={[
                                        { name: 'MusicKit.js', url: 'https://example.com' },
                                        { name: '9to5Mac', url: 'https://example.com' },
                                        { name: 'The Verge', url: 'https://example.com' },
                                    ]}
                                />

                                <ExperienceCard
                                    title="Developer"
                                    company="Scout Studio"
                                    period="2016 — 2017"
                                    description="Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations."
                                    technologies={['JavaScript', 'HTML', 'CSS', 'jQuery']}
                                    links={[]}
                                />
                            </div>
                        </section>

                        {/* Projects Section */}
                        <section id="projects" className="space-y-6">
                            <h2 className="px-4 font-sans text-2xl font-bold text-gray-100">
                                Projects
                            </h2>
                            <div className="group space-y-8">
                                <ProjectCard
                                    title="Build a Spotify Connected App"
                                    description="Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more."
                                    image=""
                                    technologies={['React', 'Express', 'Spotify API', 'Heroku']}
                                    link="https://example.com/project1"
                                />

                                <ProjectCard
                                    title="Spotify Profile"
                                    description="Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
                                    image=""
                                    technologies={['React', 'Express', 'Spotify API', 'Heroku']}
                                    link="https://example.com/project2"
                                    stars={680}
                                />

                                <ProjectCard
                                    title="Halcyon Theme"
                                    description="Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more."
                                    image=""
                                    technologies={['VS Code', 'Sublime Text', 'Atom', 'iTerm']}
                                    link="https://example.com/project3"
                                    installs="100k+"
                                />

                                <ProjectCard
                                    title="Portfolio v4"
                                    description="An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks"
                                    image=""
                                    technologies={['Gatsby', 'Styled Components', 'Netlify']}
                                    link="https://example.com/project4"
                                    stars={7870}
                                />
                            </div>
                        </section>

                        <Footer />
                    </div>
                </div>
            </div>
        </main>
    );
}
