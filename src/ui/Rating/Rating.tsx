import { memo, useMemo } from "react";
import {
  Provider as TooltipProvider,
  Root as TooltipRoot,
  Trigger as TooltipTrigger,
  Portal as TooltipPortal,
  Content as TooltipContent,
  Arrow as TooltipArrow,
} from "@radix-ui/react-tooltip";
import { RiStarSFill } from "react-icons/ri";
import clsx from "clsx";
import type { RatingProps } from "./types";
import { MAX_RATING } from "./constants";
import s from "./Rating.module.css";

const Rating: React.FC<RatingProps> = ({ className, rating }) => {
  const roundedRating = Math.floor(rating);

  const starsJSX = useMemo(() => {
    return new Array(MAX_RATING).fill("").map((_, index) => {
      const isStarFilles = index < roundedRating;
      const starFilledClassName = isStarFilles && [s.filled];

      return (
        <RiStarSFill
          key={index}
          size={20}
          className={clsx(s.star, starFilledClassName)}
        />
      );
    });
  }, [roundedRating]);

  return (
    <div className={clsx(s.wrap, className)}>
      <TooltipProvider>
        <TooltipRoot>
          <TooltipTrigger className={s.trigger} asChild>
            <div className={s["stars-wrap"]}>{starsJSX}</div>
          </TooltipTrigger>
          <TooltipPortal />
          <TooltipContent side="right" className={s.content}>
            <TooltipArrow className={s.arrow} />
            <span className={s["tooltip-rating"]}>{rating.toFixed(1)}</span>
          </TooltipContent>
        </TooltipRoot>
      </TooltipProvider>
    </div>
  );
};

export default memo(Rating);
