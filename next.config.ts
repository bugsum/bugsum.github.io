import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    trailingSlash: true,
    output: 'export',
    images: {
        unoptimized: true,
    },
};

// Merge MDX config with Next.js config
export default nextConfig;
