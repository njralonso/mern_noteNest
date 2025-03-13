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

const Aside = ({ setSelectedNote }) => {
	const [openFolders, setOpenFolders] = useState({});

	const toggleFolder = (folder) => {
		setOpenFolders((prev) => ({ ...prev, [folder]: !prev[folder] }));
	};

	return (
		<aside className="w-64 bg-white shadow-md p-4">
			<h2 className="text-lg font-semibold mb-4">Notas</h2>
			<ul>
				{notesData.map(({ folder, notes }) => (
					<li key={folder} className="mb-2">
						<button
							className="flex items-center w-full text-left p-2 hover:bg-gray-200 rounded-md"
							onClick={() => toggleFolder(folder)}
						>
							<span className="ml-2 font-medium">{folder}</span>
						</button>
						{openFolders[folder] && (
							<ul className="ml-6 mt-1">
								{notes.map((note) => (
									<li key={note.id}>
										<button
											className="block w-full text-left p-2 hover:bg-gray-200 rounded-md text-sm"
											onClick={() => setSelectedNote(note)}  // Usamos la función para actualizar el estado
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
	);
};

export default Aside;
