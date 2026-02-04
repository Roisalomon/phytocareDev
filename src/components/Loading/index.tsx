import React from "react";

interface LoadingProps {
  fullScreen?: boolean;
  text?: string;
}

const Loading: React.FC<LoadingProps> = ({
  fullScreen = true,
  text = "Loading Knowledge... Please Wait Wisely!",
}) => {
  const content = (
    <div className="flex flex-col items-center justify-center gap-6 text-center relative">
      {/* ✅ Logo Educeet en image */}
      <img
        src="/assets/mes/pencil-upper.png"
        alt="Educeet Logo"
        className=" w-[300px] lg:w-[450px] h-auto relative z-1 top-[-20px] "
      />

      {/* ✅ Ligne animée */}
      <div className="relative w-[220px] h-[2px] bg-transparent overflow-hidden">
        <div className="absolute left-0 top-0 h-full bg-[#5D3FD3] animate-draw-line" />
      </div>

      {/* ✅ Crayon animé */}
      <img
        src="/assets/mes/pencil.png"
        alt="Crayon"
        className="absolute bottom-[calc(50%-20px)] left-0 lg:w-[100px] w-[40px] z-10 h-auto animate-crayon-move"
      />

      {/* ✅ Texte de chargement */}
      <p className="text-gray-600 font-medium italic mt-1">{text}</p>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        {content}
      </div>
    );
  }

  return <div className="py-6 ">{content}</div>;
};

export default Loading;
