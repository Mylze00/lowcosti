// src/components/FooterInfoSection.jsx
import React from 'react';

function FooterInfoSection() {
  return (
    <section className="relative bg-[#121C2F] w-full text-white mt-10 px-4 py-8 overflow-hidden">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 items-center relative z-10">
        {/* Colonne gauche : logo + texte */}
        <div className="flex flex-col items-start">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-20 h-20 rounded-full mb-2"
          />
          <p className="text-xs font-medium">
            #1 Marketplace congolaise dédiée à l'économie locale.
          </p>
        </div>

        {/* Colonne droite : moyens de paiement */}
        <div>
          <h3 className="text-sm font-medium text-white mb-2">
            Moyens de paiement acceptés
          </h3>
          <div className="flex items-center gap-3 flex-wrap">
            <img src="/images/images.png" alt="Airtel Money" className="w-9 h-9 object-contain" />
            <img src="/images/images.jpg" alt="M-Pesa" className="w-10 h-9 object-contain" />
            <img src="/images/orange-money-logo-png_seeklogo-440383.png" alt="Orange Money" className="w-9 h-9 object-contain" />
            <img src="/images/tarjetas credito pago hortum.png" alt="Carte Bancaire" className="w-20 h-9 object-contain" />
          </div>
        </div>
      </div>

      {/* Ligne blanche */}
      <div className="border-t border-white my-4 w-3/4 mx-auto" />

      {/* Zone communautaire */}
      <div className="text-center">
        <h4 className="text-[#FAF759] font-extrabold text-base mb-2">
          Rejoignez notre communauté de vendeurs locaux
        </h4>
        <p className="text-xs font-bold max-w-xs mx-auto text-white leading-5">
          ✓ Inscription gratuite et simple<br />
          ✓ Exposition à des milliers d’acheteurs<br />
          ✓ Assistance dédiée aux vendeurs<br />
          ✓ Paiements sécurisés
        </p>
      </div>

      {/* Image livreur */}
      <img
        src="/images/delivery.png"
        alt="Livreur"
        className="absolute bottom-2 right-4 w-32 h-32 object-contain z-0 opacity-80"
      />
    </section>
  );
}

export default FooterInfoSection;
