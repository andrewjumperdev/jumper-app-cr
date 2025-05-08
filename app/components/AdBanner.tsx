// src/components/AdBanner.tsx
"use client";
import React, { useEffect } from "react";
import Script from "next/script";

const AD_CLIENT = "ca-pub-5864327417374034"; // ← tu ID de publicador
const AD_SLOT = "8999036935";           // ← tu ID de unidad de anuncio (slot)

const AdBanner: React.FC = () => {
  useEffect(() => {
    // Cuando el script ya esté cargado, inicializamos el anuncio
    if (typeof window !== "undefined" && (window as any).adsbygoogle) {
      try {
        (window as any).adsbygoogle.push({});
      } catch (e) {
        console.error("Error inicializando AdSense:", e);
      }
    }
  }, []);

  return (
    <>
      {/* 1) Carga asíncrona de la librería de AdSense */}
      <Script
        id="adsense-script"
        strategy="afterInteractive"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`}
        crossOrigin="anonymous"
      />

      {/* 2) Contenedor donde AdSense insertará el anuncio */}
      <div className="my-8 flex justify-center">
        <ins
          className="adsbygoogle block"
          style={{ display: "block", maxWidth: "728px", width: "100%" }}
          data-ad-client={AD_CLIENT}
          data-ad-slot={AD_SLOT}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </>
  );
};

export default AdBanner;
