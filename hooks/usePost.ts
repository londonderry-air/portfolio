import useSWR from 'swr'
import { fetcher } from '../utils/fetch'

export type Post = {
  id: string
  title?: string
  slug?: string
  release: Date
  markdown?: string
  thumbnail?: {
    name: string
    url: string
  }
  custom: {
    color?: string
  }
}

export const usePost = (slug?: string): Post[] => {
  const { data, error } = useSWR(
    `/api/post${slug ? `/${slug}` : ''}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 6000,
      focusThrottleInterval: 6000,
      errorRetryCount: 1
    }
  )

  if (error) return []
  if (!data) return []

  return Array.isArray(data)
    ? data.map((d: any) => ({ ...d, release: new Date(d.release) }))
    : [{ ...data, release: new Date(data.release) }]
}
