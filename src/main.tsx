import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import Navbar from "./components/Navbar.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <div className="bg-white min-h-screen py-20">
          <Navbar />
            <App />
      </div>
  </React.StrictMode>,
)
