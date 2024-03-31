export const URL =
  process.env.NEXT_PUBLIC_DEV_NODE === 'production'
    ? process.env.NEXT_PUBLIC_BASE_API_URL
    : process.env.NEXT_PUBLIC_LIVE_API_URL
