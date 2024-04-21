import { useRouter } from "next/router";
import Navbar from "../navbar"
import { Inter } from 'next/font/google'

type AppShellProps = {
    children: React.ReactNode
}

const inter = Inter({ subsets: ['latin'] })

const disableNavbar = ['/auth/login', '/auth/register', '/404']

const AppShell = (props : AppShellProps) => {
    const {children} = props;
    const {pathname} = useRouter();

    return (
        <main className={inter.className}>
            {disableNavbar.includes(pathname) ? null : <Navbar />}
            {children}
        </main>
    )
};

export default AppShell;