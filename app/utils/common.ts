import type { CxOptions } from 'class-variance-authority'
import { cx } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: CxOptions) {
  return twMerge(cx(inputs))
}

export const { format: formatNumber } = Intl.NumberFormat('en-EN', { notation: 'compact', maximumFractionDigits: 1 })
