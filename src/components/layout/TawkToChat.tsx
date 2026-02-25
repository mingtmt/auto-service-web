"use client";

import { useEffect } from "react";

export default function TawkToChat() {
  useEffect(() => {
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];

    s1.async = true;
    s1.src = process.env.NEXT_PUBLIC_TAWKTO_DIRECT_CHAT_LINK || "";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    }

    return () => {
      if (s1 && s1.parentNode) {
        s1.parentNode.removeChild(s1);
      }
    };
  }, []);

  return null;
}
