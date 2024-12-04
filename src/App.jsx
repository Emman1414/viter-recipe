import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Recipe from "./components/pages/backend/recipe/Recipe";
import Homepage from "./components/pages/frontend/hompage/Homepage";
import Single from "./components/pages/frontend/single/Single";
import { StoreProvider } from "./components/store/storeContext";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/recipe/single/:slug" element={<Single />} />
            <Route path="/admin/recipe" element={<Recipe />} />
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;
