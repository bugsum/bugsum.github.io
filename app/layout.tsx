import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Particles } from '@/components/magicui/particles';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Samarth Sharma',
    description: 'A portfolio for Samarth Sharma',
    icons: '/samarth.jpg',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className={`${inter.className} relative antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}

                    {/* <Pointer className="hidden fill-purple-500 lg:flex" /> */}

                    <Particles
                        className="absolute inset-0 z-0"
                        quantity={100}
                        ease={80}
                        color={'#ffffff'}
                        refresh
                    />

                    <div className="absolute top-0 z-[-2] h-fit w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
                </ThemeProvider>
            </body>
        </html>
    );
}
