import { memo } from "react";
import MainLayout from "@/layout/MainLayout";
import Typography from "@/ui/Typography";
import s from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <MainLayout title="Home">
      <div className={s.wrap}>
        <Typography className={s.title} component="h1" variant="h1">
          Home Page
        </Typography>
      </div>
    </MainLayout>
  );
};

export default memo(Home);
