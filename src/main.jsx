import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes.jsx'
import AuthProvider from './Authentication/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import 'aos/dist/aos.css';
import Aos from 'aos'
import { ThemeProvider } from './Context/ThemeContext.jsx'

Aos.init();

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <ThemeProvider>
      <AuthProvider>
            <ToastContainer></ToastContainer>
            <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
        
    </ThemeProvider>
  // </StrictMode>
)
