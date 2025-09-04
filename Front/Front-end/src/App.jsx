
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProjectsPage } from './pages';
import './App.css';

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
    mutations: {
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ProjectsPage />
      </div>
    </QueryClientProvider>
  );
}

export default App
