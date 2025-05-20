'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Star } from 'lucide-react';
import { Download } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
    stars?: number;
    installs?: string;
}

export default function ProjectCard({
    title,
    description,
    image,
    technologies,
    link,
    stars,
    installs,
}: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group/list relative border-b border-gray-800 pb-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Desktop Layout */}
            <div
                className={cn(
                    'hidden gap-6 rounded-sm p-4 transition-opacity duration-300 md:grid md:grid-cols-[1fr_2fr]',
                    isHovered ? 'bg-slate-800 opacity-100' : 'group-hover:opacity-30'
                )}
            >
                <div className="relative h-48 w-full overflow-hidden rounded-md">
                    <Image
                        src={image || 'https://placehold.co/100'}
                        alt={title}
                        width={200}
                        height={48}
                        className="aspect-video rounded border-2 border-slate-200/10 object-cover transition group-hover:border-slate-200/30"
                    />
                </div>

                <div>
                    <div className="mb-3 flex items-center gap-2">
                        <h3 className="font-sans text-xl font-bold text-gray-100">{title}</h3>
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/list text-teal-400 transition-colors hover:text-teal-300"
                        >
                            <ExternalLink size={16} />
                        </a>
                    </div>

                    <p className="mb-4 text-gray-300">{description}</p>

                    <div className="mb-3 flex flex-wrap gap-2">
                        {technologies.map(tech => (
                            <span
                                key={tech}
                                className="rounded bg-teal-400/10 px-2 py-1 text-xs text-teal-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {(stars || installs) && (
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                            {stars && (
                                <div className="flex items-center gap-1">
                                    <Star size={14} />
                                    <span>{stars.toLocaleString()}</span>
                                </div>
                            )}
                            {installs && (
                                <div className="flex items-center gap-1">
                                    <Download size={14} />
                                    <span>{installs} Installs</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="space-y-4 md:hidden">
                <div className="mb-3 flex items-center gap-2">
                    <h3 className="font-sans text-xl font-bold text-gray-100">{title}</h3>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 transition-colors hover:text-teal-300"
                    >
                        <ExternalLink size={16} />
                    </a>
                </div>

                <p className="text-gray-300">{description}</p>

                <div className="relative h-48 w-full overflow-hidden rounded-md">
                    <Image
                        src={image || '/placeholder.svg'}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="mb-3 flex flex-wrap gap-2">
                    {technologies.map(tech => (
                        <span
                            key={tech}
                            className="rounded bg-teal-400/10 px-2 py-1 text-xs text-teal-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {(stars || installs) && (
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                        {stars && (
                            <div className="flex items-center gap-1">
                                <Star size={14} />
                                <span>{stars.toLocaleString()}</span>
                            </div>
                        )}
                        {installs && (
                            <div className="flex items-center gap-1">
                                <Download size={14} />
                                <span>{installs} Installs</span>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
