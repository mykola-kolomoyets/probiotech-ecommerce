import { memo } from "react";
import type { NextPage } from "next";
import NotFound from "@/modules/NotFound";

const NotFoundPage: NextPage = () => {
  return <NotFound/>;
};

export default memo(NotFoundPage);