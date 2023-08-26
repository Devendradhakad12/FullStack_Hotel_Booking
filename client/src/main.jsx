import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthCotext.jsx'
 

ReactDOM.createRoot(document.getElementById('root')).render(
<AuthContextProvider>
    <App />
</AuthContextProvider>
)
