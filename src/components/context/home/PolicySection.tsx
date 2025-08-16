import React from "react";
import Link from "next/link";

interface PolicyProps {
  title: string;
  description: string;
  query: string;
  contentList?: Array<{
    title: string;
    content: string;
  }>;
}

const PolicySection = ({
  title,
  description,
  query,
  contentList,
}: PolicyProps) => {
  return (
    <section className="min-h-screen p-6">
      <header className="w-full flex justify-center items-center mb-8 ">
        <h3 className="text-2xl font-bold text-center">{title}</h3>
      </header>

      <section className="space-y-6 max-w-3xl mx-auto">
        <p>{description}</p>

        {contentList &&
          contentList.length > 0 &&
          contentList?.map((item, index) => (
            <div key={index}>
              <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
              <p>{item.content}</p>
            </div>
          ))}

        <p>{query}</p>
        <Link href="/">
          <button className=" cursor-pointer px-4 py-2 bg-primary text-white rounded hover:bg-primary-foreground transition">
            Home
          </button>
        </Link>
      </section>
    </section>
  );
};

export default PolicySection;
