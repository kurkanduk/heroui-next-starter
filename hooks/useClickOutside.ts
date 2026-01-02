"use client";

import { useEffect, useRef, type RefObject } from "react";

/**
 * Hook to detect clicks outside of a specified element.
 *
 * @example
 * ```tsx
 * const ref = useClickOutside(() => {
 *   setIsOpen(false);
 * });
 *
 * return <div ref={ref}>Content</div>;
 * ```
 */
export function useClickOutside<T extends HTMLElement = HTMLElement>(
  handler: () => void
): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [handler]);

  return ref;
}
