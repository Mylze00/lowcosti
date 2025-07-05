<<<<<<< HEAD
// src/components/SearchBar.jsx
import React from 'react';
import { Search } from 'lucide-react'; // Icône de recherche

function SearchBar() {
  // Logique pour les suggestions automatiques viendra ici plus tard
  return (
    <div className="p-4 bg-white"> {/* Fond blanc pour la section de recherche */}
      <div className="relative flex items-center border border-blue-400 rounded-lg overflow-hidden shadow-sm">
        <Search className="absolute left-3 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      {/* Les suggestions automatiques apparaîtront ici */}
    </div>
  );
}

=======
// src/components/SearchBar.jsx
import React from 'react';
import { Search } from 'lucide-react'; // Icône de recherche

function SearchBar() {
  // Logique pour les suggestions automatiques viendra ici plus tard
  return (
    <div className="p-4 bg-white"> {/* Fond blanc pour la section de recherche */}
      <div className="relative flex items-center border border-blue-400 rounded-lg overflow-hidden shadow-sm">
        <Search className="absolute left-3 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      {/* Les suggestions automatiques apparaîtront ici */}
    </div>
  );
}

>>>>>>> 7bfe36e (Nouveau départ)
export default SearchBar;