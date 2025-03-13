const Header = () => {
	return (
		<header className="bg-white shadow-md p-4 flex justify-between items-center">
			<h1 className="text-lg font-semibold">App de Notas</h1>
			<div>
				<button className="mr-4 px-4 py-2 bg-blue-500 text-white rounded-md">Login</button>
				<button className="px-4 py-2 bg-green-500 text-white rounded-md">Registro</button>
			</div>
		</header>
	);
}

export default Header