import React, { useEffect, useState } from 'react';

const CVPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('cvPopupClosed');
    if (!hasSeenPopup) {
      setVisible(true);
      setTimeout(() => setAnimateIn(true), 100); // Delay for smooth slide-in
    }
  }, []);

  const handleClose = () => {
    setAnimateIn(false);
    setTimeout(() => {
      setVisible(false);
      localStorage.setItem('cvPopupClosed', 'true');
    }, 500); // Wait for transition to finish
  };

  const handleDownload = () => {
    // Update the path to your actual CV PDF
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Rhiannon Lind - Resume .pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-8 right-0 z-50 transition-transform duration-1000 ${animateIn ? 'translate-x-0' : 'translate-x-full'} bg-white shadow-lg rounded-l-lg p-4 flex items-center gap-4 min-w-[200px] max-w-xs`}
      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}
    >
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-xl text-gray-400 hover:text-gray-700 focus:outline-none"
        aria-label="Close popup"
      >
        ×
      </button>
      <div className="flex-1 pr-8">
        <h3 className="font-bold text-lg mb-2">Want to learn more?</h3>
        <p className="text-sm text-gray-600 mb-4">Download my CV to learn more about my experience and skills.</p>
        <button
          onClick={handleDownload}
          className="bg-primary text-white px-4 py-1 text-sm rounded hover:bg-accent/80 transition-colors"
        >
          Download CV
        </button>
      </div>
    </div>
  );
};

export default CVPopup; 