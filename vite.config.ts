import { defineConfig } from 'vite'
import { resolve } from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'
import externalGlobals from "rollup-plugin-external-globals"
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'
// @ts-ignore
import { devDependencies } from './package.json'

function replaceVersion (version: string) {
  return version.replace(/\^/,'')
}

const reactV = replaceVersion(devDependencies.react)
const reactDomV = replaceVersion(devDependencies['react-dom'])
const reactRouterDomV = replaceVersion(devDependencies['react-router-dom'])
const designReactV = replaceVersion(devDependencies['@base-stone/react'])

export default ({ mode }: { mode: string}) => {
  const externalObj: any = mode == "dev" || mode == "prod" ? {
    "react": "React",
    "react-dom/client": "ReactDOM",
    "@remix-run/router": "RemixRouter",
    "react-router": "ReactRouter",
    "react-router-dom": "ReactRouterDOM",
    "@base-stone/react": "DesignReact"
  } : null
  const injectScript = `
    <script crossorigin="anonymous" type="text/javascript" src="/static/react@${reactV},react-dom@${reactDomV},react-router-dom@${reactRouterDomV}/index.js"></script>
    <script crossorigin="anonymous" type="text/javascript" src="/static/design-react@${designReactV}/index.js"></script>
  `
  return defineConfig({
    plugins: [
      react({ jsxRuntime: 'classic' }),
      mkcert(),
      createHtmlPlugin({
        minify: true,
        template: 'public/index.html',
        inject: {
          data: {
            injectScript,
            injectCss: `<link rel="stylesheet" type="text/css" href="/static/design-react@${designReactV}/index.css"/>`
          }
        }
      }),
    ],
    build: {
      rollupOptions: {
        plugins: externalObj ? [
          externalGlobals(externalObj)
        ] : [] as any
      }
    },
    esbuild: {
      drop: mode == 'prod' ? ["console", "debugger"] : []
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      }
    },
    server: {
      port: 8080,
      host: '0.0.0.0',
      proxy: {
        '^/admin': {
          //target: "http://192.168.32.211:8410",
          target: 'https://anchor-manage-test.shengtian.com',
          changeOrigin: true
        }
      }
    }
  })
}
