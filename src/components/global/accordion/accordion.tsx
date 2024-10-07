"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface AccordionProps {
  header: React.ReactNode;
  children: React.ReactNode;
  bodyClass?: string;
  headerClass?: string;
  borders?: boolean
  className?: string;
  showIcons?: boolean
  iconsClass?: string;
} 

const Accordion: React.FC<AccordionProps> = ({
  header,
  children,
  bodyClass,
  headerClass,
  className,
  iconsClass,
  borders = true,
  showIcons = true
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${borders ? 'border border-gray-200' : ''} rounded-md mb-2 ${className}`}>
      <div
        className={`bg-gray-100 p-3 cursor-pointer flex justify-between items-center`}
        onClick={toggleAccordion}
      >
        <div className={`${headerClass}`}>{header}</div>
        <div className={`${iconsClass} ${showIcons ? '' : 'hidden'}`}>
          {" "}
          {isOpen ? (
            <FaMinus className="text-xl" />
          ) : (
            <FaPlus className="text-xl" />
          )}
        </div>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`overflow-hidden `}
      >
        <div className={`p-2  ${bodyClass}`}>{children}</div>
      </motion.div>
    </div>
  );
};

export default Accordion;
