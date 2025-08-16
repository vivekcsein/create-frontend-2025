import React from "react";
import Link from "next/link";
import Lucid_Icon from "../ui/helper/Lucid_Icon";
import Navbar_link from "../context/navbar/Navbar_link";
import { footerLinks } from "@/libs/data/data.layout";

const Footer = () => {
  const {
    messages,
    sections,
    quickLinks,
    serviceLinks,
    socialLinks,
    featureLinks,
  } = footerLinks;

  return (
    <footer className="bg-background py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* <!-- Company Info --> */}
          <div>
            <h3 className="text-xl  text-primary mb-4">{messages.heading}</h3>
            <p className="text-muted mb-4">{messages.description}</p>
          </div>
          {/* <!-- Customer Service --> */}
          <div className="flex flex-col md:flex-row gap-8 justify-around ">
            <div>
              <h4 className="font-semibold mb-4">{sections?.[1]}</h4>
              <ul className="space-y-2 text-muted">
                {serviceLinks?.map((link, index) => (
                  <li key={index}>
                    <Navbar_link link={link} key={index} />
                  </li>
                ))}
              </ul>
            </div>
            {/* <!-- Quick Links --> */}
            <div>
              <h4 className="font-semibold mb-4">{sections?.[0]}</h4>
              <ul className="space-y-2 text-muted">
                {quickLinks?.map((link, index) => (
                  <li key={index}>
                    <Navbar_link link={link} key={index} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* <!-- Newsletter --> */}
          <div className="lg:pl-8">
            <h4 className="font-semibold mb-4">{sections?.[2]}</h4>
            <p className="text-muted mb-4">{messages?.subscribe}</p>
            <div className="flex space-x-4">
              {socialLinks?.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-muted hover:text-muted-foreground"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Lucid_Icon iconName={link.icon} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* <!-- Bottom Footer --> */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[14px] mb-4 md:mb-0">
              {messages?.copyright}
            </div>
            {/* <!-- Trust Badges --> */}
            <div className="flex justify-center items-center space-x-6 text-muted text-sm">
              {featureLinks?.map((link, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <Lucid_Icon iconName={link.icon} className="text-sm" />
                  </div>
                  <Navbar_link link={link} fontSize="14px" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
