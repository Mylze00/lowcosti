import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import CategoryNavigation from './components/CategoryNavigation';
import AuctionOfferZone from './components/AuctionOfferZone';
import ProductGrid from './components/ProductGrid';
import BottomNavigationBar from './components/BottomNavigationBar';
import FooterInfoSection from './components/FooterInfoSection';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CategoryPage from './pages/CategoryPage';
import AddProductPage from './pages/AddProductPage'; // ✅ Nouvelle page

import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute'; // ✅ Protection

import './App.css';

function HomePage() {
  return (
    <>
      <HeroCarousel />
      <CategoryNavigation />
      <AuctionOfferZone />
      <ProductGrid />
    </>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen bg-gray-100 font-sans pb-16">
            <Header />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <ProfilePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/add-product"
                element={
                  <PrivateRoute>
                    <AddProductPage />
                  </PrivateRoute>
                }
              />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/categories/:categoryName" element={<CategoryPage />} />
              <Route path="/categories" element={<CategoryPage />} />
            </Routes>

            <FooterInfoSection />

            <footer className="py-8 text-center text-gray-500 text-sm mt-auto">
              © 2025 Mon Lowcosti RDC. Tous droits réservés.
            </footer>

            <BottomNavigationBar />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
