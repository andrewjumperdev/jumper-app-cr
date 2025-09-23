import React, { useState } from "react";

export default function ContactNumber() {
  const [show, setShow] = useState(false);

  return (
    <div className="text-center mt-4">
      {show ? (
        <p className="text-blue-600 font-semibold">+33 07 49 92 75 46</p>
      ) : (
        <button
          onClick={() => setShow(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Afficher le numéro
        </button>
      )}
    </div>
  );
}
