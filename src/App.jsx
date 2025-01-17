import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import Recipe from "./components/pages/backend/recipe/Recipe";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./components/pages/frontend/hompage/Homepage";
import Single from "./components/pages/frontend/single/Single";

import Category from "./components/pages/backend/category/Category";
import Level from "./components/pages/backend/level/Level";
import { StoreProvider } from "./components/store/storeContext";
import Dashboard from "./components/pages/backend/dashboard/Dashboard";

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
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/category" element={<Category />} />
            <Route path="/admin/level" element={<Level />} />
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;
