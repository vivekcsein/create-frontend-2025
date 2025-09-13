import React from "react";
import { privacyPolicy } from "@/libs/data/data.policy";
import PolicySection from "@/components/context/home/PolicySection";

const PrivacyPage = () => {
  return (
    <>
      <PolicySection
        title={privacyPolicy.title}
        description={privacyPolicy.description}
        query={privacyPolicy.query}
        contentList={privacyPolicy.conditions}
      />
    </>
  );
};

export default PrivacyPage;
