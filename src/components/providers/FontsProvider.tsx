"use client";

import React, { FC } from "react";
import { roboto, poppins } from "@/libs/configs/config.styles";

/**
 * FontsProvider injects global font styles for semantic HTML elements.
 * Roboto is applied to headings; Poppins to body text and form elements.
 */
const FontsProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {children}
      <style jsx global>{`
        /* Headings use Roboto */
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${roboto.style.fontFamily}, sans-serif;
        }

        /* Body text and form elements use Poppins */
        p,
        div,
        span,
        label,
        input,
        textarea,
        button {
          font-family: ${poppins.style.fontFamily}, sans-serif;
        }
      `}</style>
    </>
  );
};

export default FontsProvider;
