import React from "react";
import PolicySection from "@/components/context/home/PolicySection";
import { termsAndConditions } from "@/libs/data/data.policy";

const Terms = () => {
  return (
    <>
      <PolicySection
        title={termsAndConditions.title}
        description={termsAndConditions.description}
        query={termsAndConditions.query}
        contentList={termsAndConditions.conditions}
      />
    </>
  );
};

export default Terms;
