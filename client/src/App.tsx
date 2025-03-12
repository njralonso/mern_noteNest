import Home from "./views/home/home"
import { useState } from "react";

const notesData = [
	{
		folder: "Trabajo",
		notes: [
			{ id: 1, title: "Reunión con equipo", content: "Discutir avances del proyecto." },
			{ id: 2, title: "Informe mensual", content: "Preparar informe para la gerencia." }
		]
	},
	{
		folder: "Personal",
		notes: [
			{ id: 3, title: "Lista de compras", content: "Leche, huevos, pan..." },
			{ id: 4, title: "Ideas de proyectos", content: "App de productividad, blog personal..." }
		]
	}
];
function App() {
	const [openFolders, setOpenFolders] = useState({});
	const [selectedNote, setSelectedNote] = useState(null);

	const toggleFolder = (folder) => {
		setOpenFolders((prev) => ({ ...prev, [folder]: !prev[folder] }));
	};
	return (
		<>
			<Home>
				<div className="flex h-screen bg-gray-100">
					{/* Sidebar */}
					<aside className="w-64 bg-white shadow-md p-4">
						<h2 className="text-lg font-semibold mb-4">Notas</h2>
						<ul>
							{notesData.map(({ folder, notes }) => (
								<li key={folder} className="mb-2">
									<button
										className="flex items-center w-full text-left p-2 hover:bg-gray-200 rounded-md"
										onClick={() => toggleFolder(folder)}
									>
										{/* {openFolders[folder] ? <ChevronDown size={16} /> : <ChevronRight size={16} />} */}
										<span className="ml-2 font-medium">{folder}</span>
									</button>
									{openFolders[folder] && (
										<ul className="ml-6 mt-1">
											{notes.map((note) => (
												<li key={note.id}>
													<button
														className="block w-full text-left p-2 hover:bg-gray-200 rounded-md text-sm"
														onClick={() => setSelectedNote(note)}
													>
														{note.title}
													</button>
												</li>
											))}
										</ul>
									)}
								</li>
							))}
						</ul>
					</aside>

					{/* Main Content */}
					<main className="flex-1 p-6">
						{selectedNote ? (
							<div className="bg-white shadow-md p-4 rounded-lg">
								<h2 className="text-xl font-semibold mb-2">{selectedNote.title}</h2>
								<p className="text-gray-700">{selectedNote.content}</p>
							</div>
						) : (
							<p className="text-gray-500">Selecciona una nota para verla.</p>
						)}
					</main>
				</div>
			</Home>
		</>
	)
}

export default App
