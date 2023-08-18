import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children, nonNavbar }: { children: React.ReactNode; nonNavbar: boolean }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {!nonNavbar && <Navbar />}

                {children}
            </body>
        </html>
    );
}
