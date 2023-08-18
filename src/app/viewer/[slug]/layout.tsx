import RootLayout from '../../layout';

export default function ViewerLayout({ children }: { children: React.ReactNode }) {
    return <RootLayout nonNavbar>{children}</RootLayout>;
}
