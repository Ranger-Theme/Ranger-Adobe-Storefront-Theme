import nookies, { parseCookies, destroyCookie } from 'nookies'

interface Options {
  domain?: string
  encode?: string
  expires?: string
  httpOnly?: boolean
  maxAge?: number
  path?: string
  sameSite?: boolean | string
  secure?: boolean
}

const defaultOptions: Options = {
  maxAge: 60 * 60 * 24 * 1,
  path: '/',
  sameSite: 'lax',
  secure: true
}

export const setItem = (name: string, value: string, options?: Options) => {
  const mergeOptions: any = options || defaultOptions
  nookies.set(null, name, value, mergeOptions)
}

export const getItem = (name: string) => {
  const cookies = nookies.get()
  return cookies[name]
}

export const removeItem = (name: string, options?: Options) => {
  const mergeOptions: any = options || defaultOptions
  nookies.destroy(null, name, mergeOptions)
}

export { parseCookies, destroyCookie }
