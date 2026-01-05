import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', color: '#F7AB0A' },
  { id: 'about', color: '#00DA97' },
  { id: 'projectexperience', color: '#61BAAD' },
  { id: 'skills', color: '#61BAAD' },
  { id: 'contact', color: '#00DA97' },
];

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentColor, setCurrentColor] = useState('#F7AB0A');

  useEffect(() => {
    const scrollContainer = document.getElementById('scroll-container');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      const scrolled = scrollContainer.scrollTop;
      const progress = (scrolled / scrollHeight) * 100;
      setScrollProgress(progress);

      // Determine current section color using closest to viewport center
      const viewportCenter = window.innerHeight / 2;
      let closestSection = sections[0];
      let closestDistance = Infinity;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const distance = Math.abs(elementCenter - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
          }
        }
      }

      setCurrentColor(closestSection.color);
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800/50 z-[100] backdrop-blur-sm">
      <div
        className="h-full transition-all duration-300 ease-out"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: currentColor,
          boxShadow: `0 0 10px ${currentColor}`,
        }}
      />
    </div>
  );
}
