import React from "react";
import { motion } from "framer-motion";

interface PageProps {
  title: string;
  description?: string;
}

const DefaultPage: React.FC<PageProps> = ({ title, description }) => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center font-poppins bg-background text-dark dark:bg-dark dark:text-white px-4">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-bold mb-4 text-primary"
      >
        {title}
      </motion.h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-lg">
        {description || "Cette page est en cours de développement."}
      </p>
    </main>
  );
};

export default DefaultPage;
