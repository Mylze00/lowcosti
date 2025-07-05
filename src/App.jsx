import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import CategoryNavigation from './components/CategoryNavigation';
import AuctionOfferZone from './components/AuctionOfferZone';
import ProductGrid from './components/ProductGrid';
import BottomNavigationBar from './components/BottomNavigationBar';
import FooterInfoSection from './components/FooterInfoSection'; // Section personnalisée ajoutée

import { CartProvider } from './context/CartContext';

import './App.css';

import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CategoryPage from './pages/CategoryPage';

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
      <CartProvider>
        <div className="min-h-screen bg-gray-100 font-sans pb-16">
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/categories/:categoryName" element={<CategoryPage />} />
            <Route path="/categories" element={<CategoryPage />} />
          </Routes>

          {/* ✅ Section personnalisée en bas de page */}
          <FooterInfoSection />

          {/* ✅ Footer classique */}
          <footer className="py-8 text-center text-gray-500 text-sm mt-auto">
            © 2025 Mon Lowcosti RDC. Tous droits réservés.
          </footer>

          <BottomNavigationBar />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
