'use client';
import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/data';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Zalo Button */}
      <a 
        href="" 
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-600 hover:scale-110 transition-all duration-300 animate-bounce-slow"
        title="Chat Zalo"
      >
        <span className="font-bold text-xs">Zalo</span>
      </a>

      {/* Phone Button */}
      <a 
        href={`tel:${CONTACT_INFO.hotline.replace(/\s/g, '')}`} 
        className="group relative flex items-center justify-end"
      >
        {/* Tooltip text */}
        <span className="absolute right-14 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Gọi ngay: {CONTACT_INFO.hotline}
        </span>
        
        {/* Icon */}
        <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center text-white shadow-lg hover:bg-red-700 hover:scale-110 transition-all duration-300 border-2 border-white">
          <Phone size={20} className="animate-pulse" />
        </div>
      </a>
    </div>
  );
}