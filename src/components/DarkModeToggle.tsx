'use client';

import { useTheme } from '@/context/ThemeContext';

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>{theme === 'light' ? '☀️' : '🌙'}</button>;
}
