// src/pages/AddProductPage.jsx
import React, { useState } from 'react';
import { db, auth } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function AddProductPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const selected = Array.from(e.target.files).slice(0, 3); // Max 3 images
    setImages(selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!auth.currentUser) {
      alert("Vous devez être connecté pour ajouter un produit");
      return;
    }

    setLoading(true);

    try {
      const storage = getStorage();
      const imageUrls = [];

      for (const image of images) {
        const storageRef = ref(storage, `products/${Date.now()}-${image.name}`);
        await uploadBytes(storageRef, image);
        const url = await getDownloadURL(storageRef);
        imageUrls.push(url);
      }

      await addDoc(collection(db, 'products'), {
        title,
        description,
        category,
        price: parseFloat(price),
        images: imageUrls,
        userId: auth.currentUser.uid,
        createdAt: serverTimestamp(),
      });

      alert('Produit ajouté avec succès !');
      setTitle('');
      setDescription('');
      setCategory('');
      setPrice('');
      setImages([]);
    } catch (error) {
      console.error('Erreur ajout produit:', error);
      alert('Erreur lors de l’ajout du produit.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4 text-blue-600">Mettre un produit en vente</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nom du produit"
          className="w-full border px-4 py-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          className="w-full border px-4 py-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Catégorie"
          className="w-full border px-4 py-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Prix (USD)"
          className="w-full border px-4 py-2 rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="w-full"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? 'Ajout en cours...' : 'Ajouter le produit'}
        </button>
      </form>
    </div>
  );
}

export default AddProductPage;
  