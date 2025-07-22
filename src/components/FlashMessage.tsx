'use client';

import { useEffect } from 'react';

export default function FlashMessage({ message }: { message: { text: string; type: string } }) {
  useEffect(() => {
    // Clear the flash message after display
    fetch('/api/clear-flash', { method: 'POST' });
  }, []);

  return (
    <div className={`fixed top-4 right-4 p-4 rounded-md shadow-lg z-50 
      ${message.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
      {message.text}
    </div>
  );
}