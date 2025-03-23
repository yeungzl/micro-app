import microApp from '@micro-zoe/micro-app'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import './index.css'

microApp.start({
  plugins: {
    modules: {
      // 此处的app1必须和  <micro-app name='app1' url="http://localhost:3000"></micro-app> 一致
      'app1': [
        {
          /***
           * loader的作用是因为vite开发模式下引入的资源是相对路径，
           * 但是子应用也是vite的情况下，主应用加载资源的时候就会以主应用为域名去加载，
           * 加载不到子应用的资源，所以无法执行；
           * 需要处理子应用静态资源，写一个简易的插件，对开发环境的子应用进行处理，补全静态资源路径。
           */
          loader(code) {
            if (process.env.NODE_ENV === 'development') {
              // 这里 /vite-vue3-ts/ 需要和子应用vite.config.js中base的配置保持一致
              code = code.replace(/(from|import)(\s*['"])(\/app1\/)/g, all => {
                return all.replace('/app1/', `http://localhost:3002/`)
              })
            }
            // code = code.replace(/(from|import)(\s*['"])(\/app1\/)/g, all => {
            //   return all.replace('/app1/', 'http://localhost:3000/')
            // })
            return code;
          }
        }
      ]
    }
  }
});
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)