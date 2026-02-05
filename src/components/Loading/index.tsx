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
      loading
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
