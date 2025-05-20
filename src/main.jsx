import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/reset.scss'
import './styles/main.scss'
import App from './App.jsx'
import { ThemeProvider } from './ThemeContext' // make sure path is correct

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider> {/* Wrap here */}
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
