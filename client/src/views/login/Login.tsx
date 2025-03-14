import { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="h-screen flex">
			{/* Panel izquierdo (solo visible en pantallas grandes) */}
			<div className="hidden lg:flex w-1/2 bg-green-600 text-white flex-col justify-center items-center p-10">
				<h1 className="text-3xl font-bold">NotasApp</h1>
				<p className="text-lg mt-2">La forma más sencilla de organizar tus ideas.</p>
				<Button className="mt-6 bg-white !text-green-600 hover:!bg-gray-200 transition-all !w-fit">
					¡Empieza ahora!
				</Button>
			</div>

			{/* Panel derecho (formulario de login) */}
			<div className="w-full lg:w-1/2 flex justify-center items-center bg-white p-6">
				<div className="w-full max-w-md bg-white shadow-md p-6 rounded-lg">
					<h2 className="text-2xl font-semibold text-gray-800">¡Bienvenido de nuevo!</h2>
					<p className="text-gray-500 text-sm mb-6">Ingresa tus datos para continuar</p>

					<form className="space-y-4">
						<div>
							<label htmlFor="email" className="text-sm font-medium text-gray-700">
								Correo electrónico
							</label>
							<Input
								id="email"
								type="email"
								placeholder="ejemplo@correo.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<div>
							<label htmlFor="password" className="text-sm font-medium text-gray-700">
								Contraseña
							</label>
							<Input
								id="password"
								type="password"
								placeholder="••••••••"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						<Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
							Iniciar sesión
						</Button>

						<div className="text-sm text-center">
							<a href="#" className="text-blue-500 hover:underline">
								¿Olvidaste tu contraseña?
							</a>
						</div>
					</form>

					<p className="text-sm text-gray-600 mt-4 text-center">
						¿No tienes una cuenta?{" "}
						<a href="#" className="text-blue-500 font-medium hover:underline">
							Regístrate
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
