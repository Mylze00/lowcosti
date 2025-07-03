import { ShoppingCart, Menu, Search } from "lucide-react";
import logo from "../assets/logo.png"; // ← chemin vers l’image

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo image */}
        <img
  src={logo}
  alt="LowCost Logo"
  className="w-20 md:w-24 object-contain"
/>

        {/* Barre de recherche */}
        <div className="hidden md:flex items-center w-1/2 bg-gray-100 rounded-lg px-3 py-2">
          <Search className="text-gray-500 mr-2" size={18} />
          <input
            type="text"
            placeholder="Rechercher des produits..."
            className="bg-transparent outline-none w-full text-sm text-gray-700"
          />
        </div>

        {/* Icônes droite */}
        <div className="flex items-center space-x-4">
          <div className="relative cursor-pointer">
            <ShoppingCart className="text-gray-700" size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              3
            </span>
          </div>
          <div className="md:hidden">
            <Menu className="text-gray-700" size={24} />
          </div>
        </div>
      </div>

      {/* Recherche mobile */}
      <div className="px-4 pb-3 md:hidden">
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
          <Search className="text-gray-500 mr-2" size={18} />
          <input
            type="text"
            placeholder="Rechercher..."
            className="bg-transparent outline-none w-full text-sm text-gray-700"
          />
        </div>
      </div>
    </header>
  );
}
