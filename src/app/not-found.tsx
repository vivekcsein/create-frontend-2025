"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        // type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const digitVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        // type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center  px-4 text-center">
      <motion.div
        className="space-y-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 className="text-8xl font-extrabold tracking-tight sm:text-9xl lg:text-[10rem] ">
          <motion.span
            variants={digitVariants}
            className="inline-block text-[100px] "
          >
            4
          </motion.span>
          <motion.span
            variants={digitVariants}
            className="inline-block text-[100px]"
          >
            0
          </motion.span>
          <motion.span
            variants={digitVariants}
            className="inline-block text-[100px]"
          >
            4
          </motion.span>
        </motion.h1>
        <motion.p
          className="text-2xl font-medium text-muted sm:text-3xl"
          variants={itemVariants}
        >
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </motion.p>
        <motion.p
          className="text-lg text-muted-foreground sm:text-xl"
          variants={itemVariants}
        >
          It seems you&apos;ve ventured into uncharted territory.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link
            href="/"
            className="mt-8 rounded-full bg-primary  px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary-foreground hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Go Back Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
