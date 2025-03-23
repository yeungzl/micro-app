import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: `${process.env.NODE_ENV === 'production' ? 'http://my-site.com' : ''}/app1/`,
  plugins: [],
  // server: {
  //   port: 3000,
  // }
})
