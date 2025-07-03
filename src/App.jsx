// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
// REMOVED: import SearchBar from './components/SearchBar'; // This was the duplicate search bar
import HeroCarousel from './components/HeroCarousel';
import CategoryNavigation from './components/CategoryNavigation';
import AuctionOfferZone from './components/AuctionOfferZone';
import ProductGrid from './components/ProductGrid';
import BottomNavigationBar from './components/BottomNavigationBar';

import { CartProvider } from './context/CartContext';

import './App.css';

import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CategoryPage from './pages/CategoryPage'; // <-- Importez la nouvelle page

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
          {/* REMOVED: <SearchBar /> */} {/* This line rendered the duplicate search bar */}

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            {/* Nouvelle route pour les catégories, avec un paramètre dynamique */}
            <Route path="/categories/:categoryName" element={<CategoryPage />} /> 
            {/* Optionnel: une route générique si les liens CategoryNavigation n'ont pas de nom dynamique */}
            <Route path="/categories" element={<CategoryPage />} /> 
          </Routes>

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