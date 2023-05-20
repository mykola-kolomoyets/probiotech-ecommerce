import { memo } from "react";
import Head from "next/head";
import type { MainLayoutProps } from "./types";
import Navigation from "@/layout/Navigation";
import s from "./MainLayout.module.css";

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Probiotech {title ? `| ${title}` : ""}</title>
      </Head>
      <main className={s.wrap}>
        <Navigation />
        {children}
      </main>
    </>
  );
};

export default memo(MainLayout);
