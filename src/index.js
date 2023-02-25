import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./routes/Home";
import Ingredient from "./routes/Ingredient";
import Product from "./routes/Product";
import Offer from "./routes/Offer";
import Profile from "./routes/Profile";
import NavBar from "./components/NavBar";
import NewProduct from "./routes/NewProduct";
import TermsConditions from "./routes/TermsConditions";
import ResetPassword from "./routes/ResetPassword";
import ProductDetails from"./routes/ProductDetails";
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Login from "./routes/Login";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(0);

  if (token == 0) {
    return <Login setToken={token} />;
  }

  return (
    <>
      <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/offer" element={<Offer />} />
              <Route path="/ingredient" element={<Ingredient />} />
              <Route path="/profile" element={<Profile />}/>
              <Route path="/newproduct" element={<NewProduct />} />
            </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


const clientQuery = new QueryClient();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={clientQuery}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);





// import "./App.css";


// const AppLayout = () => (
//   <>
//     <Outlet />
//     <NavBar />
//   </>
// );

// const queryClient = new QueryClient();

// const router = createBrowserRouter([ 
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "product",
//         element: <Product />,
//       },
//       {
//         path: "ingredient",
//         element: <Ingredient />,
//       },
//       {
//         path: "offer",
//         element: <Offer />,
//       },
//       {
//         path: "profile",
//         element: <Profile />,
//       },
//       {
//         path: "newproduct",
//         element: <NewProduct />
//       },
//       {
//         path: "termsconditions",
//         element: <TermsConditions />
//       },
//       {
//         path: "resetpassword",
//         element: <ResetPassword />
//       },
//       {
//         path: "Dettagli Prodotto",
//         element: <ProductDetails />
//       }
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <QueryClientProvider client={queryClient}>
//     <RouterProvider router={router} />
//   </QueryClientProvider>
// );
