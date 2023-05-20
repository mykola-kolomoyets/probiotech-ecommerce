import { memo } from "react";
import type { NextPage } from "next";
import About from "@/modules/About";

const AboutPage: NextPage = () => {
  return <About />;
};

export default memo(AboutPage);
