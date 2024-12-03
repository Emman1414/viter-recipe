import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Recipe from "./components/pages/backend/recipe/Recipe";
import Homepage from "./components/pages/frontend/hompage/Homepage";
import { StoreProvider } from "./components/store/storeContext";
import Single from "./components/pages/frontend/single/Single";

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/recipe/single" element={<Single />} />
          <Route path="/admin/recipe" element={<Recipe />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
};

export default App;
