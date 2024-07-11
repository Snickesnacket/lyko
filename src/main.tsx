import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <div className="bg-white min-h-screen pt-20">
          <Navbar />
            <App />
          <Footer />
      </div>
  </React.StrictMode>,
)
