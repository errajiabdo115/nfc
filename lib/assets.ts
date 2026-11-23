export const BASE_PATH = '/nfc'

export function assetUrl(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${BASE_PATH}${normalizedPath}`
}
