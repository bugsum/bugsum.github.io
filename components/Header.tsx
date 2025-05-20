'use client';

import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import { FileText, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import TechStack from './TechStack';
import { Button } from './ui/button';

const Header = () => {
    return (
        <section className="lg:fixed lg:h-screen lg:w-[30%] lg:overflow-hidden">
            <div className="flex h-full flex-col justify-between p-8 lg:p-16">
                <div className="space-y-6">
                    <div className="h-32 w-32 overflow-hidden rounded-full border-2 border-teal-400">
                        <Image
                            src="/samarth.jpg"
                            alt="Developer"
                            width={128}
                            height={128}
                            className="object-cover"
                        />
                    </div>

                    <div className="space-y-2">
                        <h1 className="font-sans text-4xl font-bold text-gray-100">
                            Samarth Sharma
                        </h1>
                        <h2 className="font-sans text-2xl font-medium text-teal-400">
                            <Typewriter
                                words={[
                                    'Full Stack Developer',
                                    'Software Engineer',
                                    'Student',
                                    'Freelancer',
                                    'Open-Source Geek',
                                ]}
                                loop={0}
                                cursor
                                cursorStyle={'_'}
                            />
                        </h2>
                    </div>

                    <p className="text-lg">
                        I build pixel-perfect web designs, hunt bugs, play games and help people.
                    </p>

                    <Button asChild variant={'ghost'}>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="mb-4 flex cursor-pointer items-center gap-2 rounded border border-teal-400 px-4 py-2 text-teal-400 transition-colors hover:bg-teal-400/10"
                        >
                            <FileText size={18} />
                            <span>Download Resume</span>
                        </a>
                    </Button>

                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-gray-100">Tech Stack</h3>
                        <TechStack />
                    </div>
                </div>

                <div className="flex flex-col gap-4 pt-8">
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/bugsum"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer text-gray-400 transition-colors hover:text-teal-400"
                        >
                            <Github size={26} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/samarth-sharma-111923286/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer text-gray-400 transition-colors hover:text-teal-400"
                        >
                            <Linkedin size={26} />
                        </a>
                        <a
                            href="https://x.com/Samarth1098"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer text-gray-400 transition-colors hover:text-teal-400"
                        >
                            <Twitter size={26} />
                        </a>
                        <a
                            href="https://www.instagram.com/samarthsharma9377/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer text-gray-400 transition-colors hover:text-teal-400"
                        >
                            <Instagram size={26} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
