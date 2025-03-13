import Home from "./views/home/Home"
import Aside from "./components/Aside";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

	return (
		<>
			<Header />
			<Home>
				{({ selectedNote, setSelectedNote }) => (
					<>
						<Aside setSelectedNote={setSelectedNote} />
						<Main selectedNote={selectedNote} />
					</>
				)}
			</Home >
			<Footer />
		</>
	)
}

export default App
