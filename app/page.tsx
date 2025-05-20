import ExperienceCard from '@/components/cards/experience';
import ProjectCard from '@/components/cards/project';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { experience } from '@/content/experience';
import { projects } from '@/content/projects';

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
                                {experience.map(exp => {
                                    return (
                                        <ExperienceCard
                                            key={exp.company}
                                            title={exp.title}
                                            company={exp.company}
                                            period={exp.period}
                                            description={exp.description}
                                            // technologies={['JavaScript', 'TypeScript', 'React']}
                                            links={exp.links}
                                            url={exp.url}
                                        />
                                    );
                                })}
                            </div>
                        </section>

                        {/* Projects Section */}
                        <section id="projects" className="space-y-6">
                            <h2 className="px-4 font-sans text-2xl font-bold text-gray-100">
                                Projects
                            </h2>
                            <div className="group space-y-8">
                                {projects.map(project => {
                                    return (
                                        <ProjectCard
                                            key={project.title}
                                            title={project.title}
                                            description={project.description}
                                            image={project.image}
                                            link={project.link}
                                            technologies={project.technologies}
                                            installs={project.installs}
                                            stars={project.stars}
                                        />
                                    );
                                })}
                            </div>
                        </section>

                        <Footer />
                    </div>
                </div>
            </div>
        </main>
    );
}
