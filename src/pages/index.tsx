import { memo } from "react";
import type { NextPage } from "next";
import Home from "@/modules/Home";

const HomePage: NextPage = () => {
  return <Home />;
};

export default memo(HomePage);
