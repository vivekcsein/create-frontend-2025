import React from "react";
import { cookiePolicy } from "@/libs/data/data.policy";
import PolicySection from "@/components/context/home/PolicySection";

const Cookie = () => {
  return (
    <>
      <PolicySection
        title="Cookie Policy"
        description="Welcome to our website! By accessing or using this site, you agree to the following terms and conditions. Please read them carefully."
        query="If you have any questions, feel free to contact us. Thanks for visiting!"
        contentList={cookiePolicy}
      />
    </>
  );
};

export default Cookie;
