import { memo, useEffect, useState } from "react";
import MainLayout from "@/layout/MainLayout";
import Typography from "@/ui/Typography";
import s from "./NotFound.module.css";
import { usePathname } from "next/navigation";

const NotFound: React.FC = () => {
  const pathname = usePathname();
  const [currentPathname, setCurrentPathname] = useState("");

  useEffect(() => {
    setCurrentPathname(pathname.slice(1));
  }, [pathname]);
  return (
    <MainLayout title="Not Found">
      <div className={s.wrap}>
        <Typography className={s.title} component="h1" variant="h1">
          Oops...
        </Typography>
        {currentPathname ? (
          <Typography className={s.subtitle} component="h1" variant="h1">
            <span className={s["page-name"]}>{currentPathname}</span> page is in
            process
          </Typography>
        ) : null}
      </div>
    </MainLayout>
  );
};

export default memo(NotFound);
