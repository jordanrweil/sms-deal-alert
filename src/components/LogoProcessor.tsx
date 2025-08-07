import React, { useEffect, useState } from 'react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';

const LogoProcessor = () => {
  const [processing, setProcessing] = useState(false);
  const [processed, setProcessed] = useState(false);

  useEffect(() => {
    const processLogo = async () => {
      if (processed || processing) return;
      
      setProcessing(true);
      try {
        // Fetch the uploaded logo
        const response = await fetch('/lovable-uploads/3095ec13-b9d6-404d-9cd1-fe66af9185db.png');
        const blob = await response.blob();
        
        // Load as image
        const img = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(img);
        
        // Convert to base64 for easier use in components
        const reader = new FileReader();
        reader.onload = () => {
          // Store the processed logo data
          localStorage.setItem('processed-logo', reader.result as string);
          setProcessed(true);
          console.log('Logo processed and stored successfully');
        };
        reader.readAsDataURL(processedBlob);
        
      } catch (error) {
        console.error('Error processing logo:', error);
      } finally {
        setProcessing(false);
      }
    };

    processLogo();
  }, [processed, processing]);

  return null; // This component doesn't render anything visible
};

export default LogoProcessor;