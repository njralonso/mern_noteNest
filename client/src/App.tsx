function App() {

	type Product = {
		nombre: string,
		precio: number,
		categoria: "electrónica" | "ropa" | "hogar",
		displnible?: boolean
	}

	interface Vehiculo {
		marca: string,
		modelo: string,
		anio: string,
		arrancar(): void
	}

	enum DiasSemana {
		Lunes = "LUNES",
		Martes = "MARTES"
	}

	function calcularArea(radio: string, altura: string): string
	function calcularArea(radio: number, altura: number): number
	function calcularArea(radio: any, altura: any): any {
		return radio + altura
	}
	console.log(calcularArea("5", "5"))
	console.log(calcularArea(10, 10))
	console.log(calcularArea(1, "Hola"));  // ❌ Error

	return (
		<>
		</>
	)
}

export default App
