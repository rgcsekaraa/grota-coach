'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from './icons';

export function ThemeToggler() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before applying the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine the current theme (system preference or user selection)
  const currentTheme = theme === 'system' ? systemTheme : theme;

  // If not mounted, avoid rendering the icon until the theme is resolved
  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => {
        if (currentTheme === 'dark') {
          setTheme('light');
        } else {
          setTheme('dark');
        }
      }}
      className="rounded-full p-1 hover:bg-gray-200 hover:dark:bg-gray-700 mr-3"
    >
      {currentTheme === 'dark' ? (
        <span className="sun-icon">
          <SunIcon height={24} width={24} />
        </span>
      ) : (
        <span className="moon-icon">
          <MoonIcon height={24} width={24} />
        </span>
      )}
    </button>
  );
}
