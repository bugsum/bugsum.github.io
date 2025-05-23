'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Link {
    name: string;
    url: string;
}

interface ExperienceCardProps {
    title: string;
    company: string;
    period: string;
    description: string;
    links: Link[];
    url: string;
}

export default function ExperienceCard({
    title,
    company,
    period,
    description,
    links,
    url,
}: ExperienceCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group/list relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Desktop Layout */}
            <div
                className={cn(
                    'hidden rounded-sm border-b border-gray-800 px-4 py-8 transition-opacity duration-300 md:grid md:grid-cols-[1fr_3fr] md:gap-10',
                    isHovered ? 'bg-slate-800 opacity-100' : 'group-hover:opacity-30'
                )}
            >
                {/* Left side - Timeline */}
                <div className="font-mono text-sm text-gray-400 uppercase">{period}</div>

                {/* Right side - Content */}
                <div className={`transition-opacity duration-300`}>
                    <div className="mb-2 flex items-center gap-2">
                        <h3 className="font-sans text-xl font-bold text-gray-100 group-hover:text-teal-400">
                            <a href={url} className="group/link">
                                {title} · {company}
                            </a>
                        </h3>
                    </div>

                    <p className="mb-4 text-gray-300">{description}</p>

                    {links.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                            {links.map(link => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-teal-400"
                                >
                                    <span>{link.name}</span>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="border-b border-gray-800 py-8 md:hidden">
                <div className="mb-2 font-mono text-sm text-gray-400">{period}</div>

                <div className="mb-2 flex items-center gap-1">
                    <h3 className="font-sans text-xl font-bold text-gray-100 group-hover:text-teal-400">
                        <a href={url}>
                            {title} · {company}
                        </a>
                    </h3>
                </div>

                <p className="mb-4 text-gray-300">{description}</p>

                {links.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                        {links.map(link => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-teal-400"
                            >
                                <span>{link.name}</span>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
