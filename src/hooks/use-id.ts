'use client';

import { useId as reactUseId } from 'react';

let counter = 0;

function generateFallbackId(prefix: string): string {
  return `${prefix}-${++counter}`;
}

export function useStableId(prefix = 'nova'): string {
  // React 18+ has useId — this is always available in our min supported version
  const id = reactUseId();
  return `${prefix}-${id}`;
}

/** For non-hook contexts (e.g., outside React components) */
export function generateId(prefix = 'nova'): string {
  return generateFallbackId(prefix);
}
