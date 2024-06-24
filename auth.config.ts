import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnAdmin = nextUrl.pathname.startsWith('/admin');
      if (isOnAdmin && !isLoggedIn) {
        return false; // Redirect unauthenticated users to login page
      }
      return true;
    },
     async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      const urlObject = new URL(url)
      const callbackUrl = urlObject.searchParams.get('callbackUrl')
     
      if (callbackUrl) return url = callbackUrl

      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    }
  },
  providers: [], 
} satisfies NextAuthConfig;