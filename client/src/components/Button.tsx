export function Button({ className, children, ...props }) {
	return (
		<button
			className={`w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-300 ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}
