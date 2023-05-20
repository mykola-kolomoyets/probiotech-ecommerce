import { memo } from "react";
import MainLayout from "@/layout/MainLayout";
import Typography from "@/ui/Typography";
import s from "./About.module.css";

const About: React.FC = () => {
  return (
    <MainLayout title="About">
      <div className={s.wrap}>
        <Typography className={s.title} component="h1" variant="h1">
          About
        </Typography>
      </div>
    </MainLayout>
  );
};

export default memo(About);
