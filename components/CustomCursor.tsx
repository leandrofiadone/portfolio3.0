import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [cursorColor, setCursorColor] = useState('#F7AB0A');

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);

    const updateColorOnScroll = () => {
      const sections = [
        { id: 'hero', color: '#F7AB0A' },           // Yellow
        { id: 'about', color: '#00DA97' },          // Green
        { id: 'projectexperience', color: '#61BAAD' }, // Cyan
        { id: 'skills', color: '#61BAAD' },         // Cyan
        { id: 'contact', color: '#00DA97' },        // Green
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCursorColor(section.color);
            break;
          }
        }
      }
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseleave', hideCursor);
    window.addEventListener('scroll', updateColorOnScroll);

    // Initial color check
    updateColorOnScroll();

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseleave', hideCursor);
      window.removeEventListener('scroll', updateColorOnScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div
          className="w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            backgroundColor: cursorColor,
            boxShadow: `0 0 12px ${cursorColor}`,
            transition: 'background-color 0.5s ease, box-shadow 0.5s ease',
          }}
        />
      </div>

      {/* Outer ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div
          className="w-8 h-8 rounded-full -translate-x-1/2 -translate-y-1/2 border-2"
          style={{
            borderColor: cursorColor,
            transition: 'border-color 0.5s ease, transform 0.15s ease',
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
