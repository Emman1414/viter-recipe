import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipe from "./components/pages/backend/recipe/Recipe";
import { StoreProvider } from "./components/store/storeContext";

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route path="/admin/recipe" element={<Recipe />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
};

export default App;
