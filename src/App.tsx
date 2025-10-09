import { RouterProvider } from 'react-router-dom';
import Router from './router/Router';
import { ThemeProvider } from './themes/theme.provider';

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={Router} />
    </ThemeProvider>
  );
};

export default App;
