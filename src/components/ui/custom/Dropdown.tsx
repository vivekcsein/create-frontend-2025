import { ChevronDown } from "lucide-react";
import React from "react";

interface DropdownProps {
  label: string;
  children: React.ReactNode;
}
const Dropdown = ({ label, children }: DropdownProps) => {
  return (
    <div className="group relative">
      <div className="flex items-center gap-1 w-fit font-medium text-[1rem] cursor-pointer">
        {label}
        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
      </div>
      <div className="absolute top-full w-fit min-w-30 -left-5 mt-2 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
