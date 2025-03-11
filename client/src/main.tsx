import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import Register from './components/Register.tsx';
import Login from './components/Login.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<App />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>

)