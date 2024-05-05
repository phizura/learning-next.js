import { useRouter } from "next/router";
import Navbar from "../navbar";
import { Nunito } from "next/font/google";

type AppShellProps = {
  children: React.ReactNode;
};

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "1000"] });

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  return (
    <main className={nunito.className}>
      {disableNavbar.includes(pathname) ? null : <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;