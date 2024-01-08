import React, { useState, useEffect, useRef } from 'react';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };


  return (
    <nav className="px-6 lg:px-16 py-8 flex justify-between items-center">
      <div className="text-[#121417] font-bold">Mode UI</div>
      <div className="hidden lg:block">
        <ul className="text-sm flex space-x-8 gap-6">
          <li className="flex items-center justify-center gap-2">
            <div>Card Access</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </li>
          <li>Banking Processing</li>
          <li>About</li>
          <li>Carrier</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center justify-center bg-gray-200 text-black text-sm px-4 py-1 rounded">
          Login
          <svg
            className="w-4 h-4 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
          </svg>
        </button>
        <button
          className="lg:hidden bg-gray-200 text-black text-sm px-4 py-1 rounded"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        {showMenu && (
          <div ref={menuRef} className="absolute top-14 right-0 bg-white shadow-md p-2">
            <ul className="text-sm space-y-2">
              <li>Card Access</li>
              <li>Banking Processing</li>
              <li>About</li>
              <li>Carrier</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
