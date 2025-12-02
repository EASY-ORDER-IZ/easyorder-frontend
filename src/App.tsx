import { RouterProvider } from 'react-router-dom';
import Router from './router/Router';
import { ThemeProvider } from './themes/theme.provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <RouterProvider router={Router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
