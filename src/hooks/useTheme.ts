import { useTheme } from '@/themes/useThemes';

export const useThemes = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return { toggleTheme, theme, setTheme };
};
