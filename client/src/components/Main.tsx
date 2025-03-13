const Main = ({ selectedNote }) => {
	return (
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
	);
};

export default Main;
