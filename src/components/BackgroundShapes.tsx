import React from 'react';

const BackgroundShapes: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* First row of shapes */}
      <div className="absolute top-[10%] left-[5%] w-32 h-32 rounded-full bg-secondary opacity-10 transform -rotate-12" />
      <div className="absolute top-[15%] right-[10%] w-24 h-24 bg-accent opacity-10 transform rotate-45" />
      <div className="absolute top-[30%] left-[20%] w-16 h-16 bg-secondary opacity-10 transform rotate-12" />
      
      {/* Middle row of shapes */}
      <div className="absolute top-[45%] right-[15%] w-28 h-28 rounded-full bg-secondary opacity-10" />
      <div className="absolute top-[60%] left-[30%] w-20 h-20 bg-accent opacity-10 transform rotate-12" />
      
      {/* Bottom row of shapes */}
      <div className="absolute bottom-[15%] left-[12%] w-36 h-36 bg-secondary opacity-10 transform rotate-45" />
      <div className="absolute bottom-[20%] right-[8%] w-24 h-24 rounded-full bg-accent opacity-10" />
    </div>
  );
};

export default BackgroundShapes; 