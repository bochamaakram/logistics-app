import React from "react";
import useInView from "./useInView";

const Section = ({ children, delay }) => {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
        marginBottom: "50px",
      }}
    >
      {children}
    </section>
  );
};

export default Section;