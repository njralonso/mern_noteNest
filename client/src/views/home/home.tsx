import { useState } from "react";

const Home = ({ children }) => {
	const [selectedNote, setSelectedNote] = useState(null);

	// Pasar setSelectedNote a Aside y selectedNote a Main como props
	return (
		<div className="flex h-screen bg-gray-100">
			{children({
				selectedNote,
				setSelectedNote
			})}
		</div>
	);
};

export default Home;
