import { type Context, useContext } from 'react'

export function useSafeContext<T>(Context: Context<T | undefined>) {
  const context = useContext(Context)

  if (context === undefined) {
    throw new Error("Context Provider not found")
  }

  return context as T
}
