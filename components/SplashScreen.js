'use client'

import { useState } from "react";
import Markertplace from "./Markertplace";
const SplashScreen = () => {
    const [showSplash, setShowSplash] = useState(true);

    // Simulation d'attente (3 secondes) pour le splash screen
    const hideSplashScreen = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Splash visible 3 secondes
      setShowSplash(false);
    };
  
    // Démarrage du splash screen à la première exécution
    if (showSplash) {
      hideSplashScreen();
      return (
        <div className="flex items-center justify-center h-screen bg-black text-white">
          <h1 className="text-4xl font-bold animate-pulse">sawerni</h1>
        </div>
      );
    }
    else {
        return <Markertplace/>;
    }
};
  
  export default SplashScreen;
  