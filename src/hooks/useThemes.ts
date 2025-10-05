import { useTheme } from '@/themes/theme.provider';

export const useThemes = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return { toggleTheme };
};
