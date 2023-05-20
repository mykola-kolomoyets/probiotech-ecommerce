import { memo } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import type { NavigationProps } from "./types";
import { NAVIGATION_LINKS } from "./constants";
import Link from "next/link";
import Typography from "@/ui/Typography/Typography";
import s from "./Navigation.module.css";

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const pathname = usePathname();

  return (
    <nav className={clsx(s.wrap, className)}>
      <ul className={s.list}>
        {NAVIGATION_LINKS.map((navLink) => {
          return (
            <li key={navLink.path}>
              <Link href={navLink.path} legacyBehavior>
                <a
                  className={clsx(
                    s.link,
                    pathname === navLink.path && s.active
                  )}
                >
                  <Typography component="span">{navLink.label}</Typography>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default memo(Navigation);
