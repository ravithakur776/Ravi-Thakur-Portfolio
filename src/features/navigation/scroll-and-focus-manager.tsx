"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollAndFocusManager() {
  const pathname = usePathname();

  useEffect(() => {
    const main = document.getElementById("main-content");

    if (!main || window.location.hash) {
      return;
    }

    main.focus({ preventScroll: true });
  }, [pathname]);

  return null;
}
