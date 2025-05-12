import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="py-6 font-mono text-sm text-gray-400">
            <p>
                Inpired by{' '}
                <Link href="https://brittanychiang.com/" className="text-teal-400 hover:underline">
                    Brittany Chiang
                </Link>{' '}
                and coded in{' '}
                <Link
                    href="https://code.visualstudio.com"
                    className="text-teal-400 hover:underline"
                >
                    Visual Studio Code
                </Link>{' '}
                by Samarth Sharma. Built with{' '}
                <Link href="https://nextjs.org" className="text-teal-400 hover:underline">
                    Next.js
                </Link>{' '}
                and{' '}
                <Link href="https://tailwindcss.com" className="text-teal-400 hover:underline">
                    Tailwind CSS
                </Link>
                , deployed with{' '}
                <Link href="https://vercel.com" className="text-teal-400 hover:underline">
                    Vercel
                </Link>
                . All text is set in the{' '}
                <Link
                    href="https://fonts.google.com/specimen/Inter"
                    className="text-teal-400 hover:underline"
                >
                    Inter
                </Link>{' '}
                typeface.
            </p>
        </footer>
    );
}
