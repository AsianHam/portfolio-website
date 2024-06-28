"use client";

import { ReactElement, useRef } from "react";
import { Tag } from "./tag";
import { useInView } from "framer-motion";
import { useWindowDimensions } from "./window-dimensions";

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  textContent: ReactElement[];
  tagText: string;
}

export const ExperienceCard = ({
  title,
  subtitle,
  textContent,
  tagText,
}: ExperienceCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { width } = useWindowDimensions();

  return (
    <section ref={ref}>
      <div
        className="flex flex-col 768:flex-row"
        style={{
          transform: isInView ? "none" : `translateX(${width}px)`,
          opacity: isInView ? 1 : 0,
          transition: "all 0.7s ease-out",
        }}
      >
        <Tag textContent={tagText} />
        <span className="flex mt-8 768:mt-0">
          <div className="flex flex-col w-4 mx-4 items-center shrink-0">
            <span className="w-full h-4 shrink-0 mt-3 bg-torch-red rounded-full" />
            <span className="w-0.5 h-full bg-alabaster mt-4" />
          </div>
          <div className="flex flex-col place-self-start">
            <h3 className="text-3xl text-alabaster font-bold">{title}</h3>
            <h4 className="text-xl text-alabaster">{subtitle}</h4>
            <span className="text-iron mt-6">{textContent}</span>
          </div>
        </span>
      </div>
    </section>
  );
};
