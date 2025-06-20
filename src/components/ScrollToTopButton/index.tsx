import React, { useEffect, useState } from 'react'

const ScrollToTopButton: React.FC = () => {

  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 1000); // Show after 300px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    isVisible ? <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-[#302219] text-white px-4 py-2 rounded-md shadow-md cursor-pointer transition"
    >
      ↑ Top
    </button>
      : null
  )
}

export default ScrollToTopButton