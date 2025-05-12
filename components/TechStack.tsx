'use client';

import type React from 'react';

import { useState } from 'react';
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiNodedotjs,
    SiGraphql,
    SiGit,
    SiFigma,
    SiAdobephotoshop,
    SiVercel,
    SiGithub,
    SiNpm,
    SiYarn,
    SiWebpack,
    SiVite,
    SiMongodb,
    SiPostgresql,
    SiRedux,
    SiStyledcomponents,
    SiSass,
} from 'react-icons/si';
import { BiLogoVisualStudio as SiVisualstudiocode } from 'react-icons/bi';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface TechIcon {
    icon: React.ReactNode;
    name: string;
    color: string;
}

export default function TechStack() {
    const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

    const techIcons: TechIcon[] = [
        { icon: <SiReact size={20} />, name: 'React', color: '#61DAFB' },
        { icon: <SiNextdotjs size={20} />, name: 'Next.js', color: '#FFFFFF' },
        { icon: <SiTypescript size={20} />, name: 'TypeScript', color: '#3178C6' },
        { icon: <SiJavascript size={20} />, name: 'JavaScript', color: '#F7DF1E' },
        { icon: <SiHtml5 size={20} />, name: 'HTML5', color: '#E34F26' },
        { icon: <SiCss3 size={20} />, name: 'CSS3', color: '#1572B6' },
        { icon: <SiTailwindcss size={20} />, name: 'Tailwind CSS', color: '#06B6D4' },
        { icon: <SiNodedotjs size={20} />, name: 'Node.js', color: '#339933' },
        { icon: <SiGraphql size={20} />, name: 'GraphQL', color: '#E10098' },
        { icon: <SiGit size={20} />, name: 'Git', color: '#F05032' },
        { icon: <SiFigma size={20} />, name: 'Figma', color: '#F24E1E' },
        { icon: <SiAdobephotoshop size={20} />, name: 'Photoshop', color: '#31A8FF' },
        { icon: <SiVisualstudiocode size={20} />, name: 'VS Code', color: '#007ACC' },
        { icon: <SiVercel size={20} />, name: 'Vercel', color: '#FFFFFF' },
        { icon: <SiGithub size={20} />, name: 'GitHub', color: '#FFFFFF' },
        { icon: <SiNpm size={20} />, name: 'npm', color: '#CB3837' },
        { icon: <SiYarn size={20} />, name: 'Yarn', color: '#2C8EBB' },
        { icon: <SiWebpack size={20} />, name: 'Webpack', color: '#8DD6F9' },
        { icon: <SiVite size={20} />, name: 'Vite', color: '#646CFF' },
        { icon: <SiMongodb size={20} />, name: 'MongoDB', color: '#47A248' },
        { icon: <SiPostgresql size={20} />, name: 'PostgreSQL', color: '#336791' },
        { icon: <SiRedux size={20} />, name: 'Redux', color: '#764ABC' },
        { icon: <SiStyledcomponents size={20} />, name: 'Styled Components', color: '#DB7093' },
        { icon: <SiSass size={20} />, name: 'Sass', color: '#CC6699' },
    ];

    return (
        <TooltipProvider>
            <div className="flex flex-wrap gap-4">
                {techIcons.map(tech => (
                    <Tooltip key={tech.name}>
                        <TooltipTrigger asChild>
                            <div
                                className="cursor-pointer transition-colors"
                                onMouseEnter={() => setHoveredIcon(tech.name)}
                                onMouseLeave={() => setHoveredIcon(null)}
                                style={{
                                    color: hoveredIcon === tech.name ? tech.color : '#FFFFFF',
                                }}
                            >
                                {tech.icon}
                            </div>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                            <p>{tech.name}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    );
}
