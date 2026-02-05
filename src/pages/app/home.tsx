import React from "react";
import { useNavigate } from "react-router-dom";
import { env } from "../../config/env.local";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background font-poppins flex flex-col justify-center items-center text-center">
      je suis le main 
    </main>
  );
};

export default HomePage;
