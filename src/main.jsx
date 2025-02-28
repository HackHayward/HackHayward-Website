import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Dashboard from './pages/Dashboard.jsx'
import './index.css'
import { CountdownProvider } from './context/CountdownContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountdownProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/live" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </CountdownProvider>
  </React.StrictMode>,
)
