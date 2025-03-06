'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';

// Define menu structure
const menuItems = [
  {
    title: 'About',
    submenu: ['Overview', 'Chairman Message', 'Director Message', 'Affiliations', 'Administration']
  },
  {
    title: 'Academics',
    submenu: ['Academic Calendar', 'Programs Offered', 'Syllabus', 'Time Table']
  },
  {
    title: 'Admission',
    submenu: ['Admission Process', 'Fee Structure', 'Scholarships', 'How to Apply']
  },
  {
    title: 'Campus',
    submenu: ['Infrastructure', 'Facilities', 'Hostels', 'Library']
  },
  {
    title: 'Departments',
    submenu: ['Computer Science', 'Mechanical', 'Civil', 'Electronics']
  },
  {
    title: 'Student Corner',
    submenu: ['Student Activities', 'Clubs', 'Sports', 'Events']
  },
  // {
  //   title: 'TPO',
  //   submenu: ['Placement Overview', 'Our Recruiters', 'Training Programs']
  // },
  // {
  //   title: 'Alumni',
  //   submenu: ['Alumni Network', 'Success Stories', 'Alumni Events']
  // },
  {
    title: 'Gallery',
    submenu: ['Photo Gallery', 'Video Gallery', 'Media Coverage']
  },
  {
    title: 'Contact Us',
    submenu: ['Location', 'Get in Touch', 'Careers']
  }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
          setShow(false); 
        } else { // if scroll up show the navbar
          setShow(true);  
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY); 
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const isActiveLink = (itemTitle: string) => {
    return pathname.toLowerCase().startsWith(`/${itemTitle.toLowerCase()}`);
  };

  return (
    <nav className={`bg-white dark:bg-gray-900 shadow-md w-full transition-all duration-300 sticky top-0 z-20 ${
      show ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and College Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/college-logo.png"
                alt="Aishwarya College Logo"
                width={50}
                height={50}
                className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
                priority
              />
              <div>
                <h1 className="text-xl font-bold text-blue-600 dark:text-white leading-tight">
                  Aishwarya College
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  of Education, Pali
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            
            {/* Existing menu items with dark mode classes */}
            <div className="flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button 
                    className={`flex items-center px-3 py-2 text-[15px] font-medium rounded-md transition-colors
                      ${isActiveLink(item.title) 
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50 font-semibold' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                  >
                    {item.title}
                    <svg
                      className={`w-4 h-4 ml-1 transition-colors
                        ${isActiveLink(item.title) ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown with dark mode */}
                  <div className="absolute left-0 hidden group-hover:block w-56 mt-1 py-2 bg-white dark:bg-gray-800 shadow-lg rounded-md border border-gray-100 dark:border-gray-700">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={`/${item.title.toLowerCase()}/${subItem.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                        className={`block px-4 py-2 text-[14px] hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors
                          ${pathname.toLowerCase() === `/${item.title.toLowerCase()}/${subItem.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}` 
                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50 font-medium' 
                            : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                          }`}
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button with dark mode */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu with dark mode */}
        {isMenuOpen && (
          <div className="lg:hidden fixed top-20 left-0 right-0 bottom-0 bg-white dark:bg-gray-900 overflow-y-auto">
            <div className="px-2 pt-2 pb-3">
              {menuItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100 dark:border-gray-700">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`flex items-center justify-between w-full px-4 py-3.5 text-left transition-colors
                      ${isActiveLink(item.title) 
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50 font-semibold' 
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                  >
                    <span className="text-[15px]">{item.title}</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 
                        ${activeAccordion === index ? 'transform rotate-180' : ''}
                        ${isActiveLink(item.title) ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-500'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`transition-all duration-200 overflow-hidden ${
                      activeAccordion === index ? 'max-h-[400px]' : 'max-h-0'
                    }`}
                  >
                    <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={`/${item.title.toLowerCase()}/${subItem.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                          className={`block py-2.5 text-[14px] hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors
                            ${pathname.toLowerCase() === `/${item.title.toLowerCase()}/${subItem.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}` 
                              ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50 font-medium' 
                              : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                            }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 