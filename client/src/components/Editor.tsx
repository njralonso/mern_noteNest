import { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';

const DEFAULT_INITIAL_DATA = {
	"time": new Date().getTime(),
	"blocks": [
		{
			"type": "header",
			"data": {
				"text": "This is my awesome editor!",
				"level": 1
			}
		},
	]
}

const Editor = () => {
	const editorInstance = useRef();

	const initEditor = () => {
		const editor = new EditorJS({
			holder: 'editorjs',
			onReady: () => {
				editorInstance.current = editor;
			},
			autofocus: true,
			// data: DEFAULT_INITIAL_DATA,
			onChange: async () => {
				let content = await editor.saver.save();

				console.log(content);
			},
			tools: {
				header: {
					class: Header,
					config: {
						placeholder: 'Enter a header',
						levels: [1, 6],
						defaultLevel: 1
					}
				},
				image: {
					class: ImageTool,
					config: {
						endpoints: {
							byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
							byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
						}
					}
				}
			},
			placeholder: 'Escribe algo increíble...',
		});
	};

	useEffect(() => {
		if (editorInstance.current === null) {
			initEditor();
		}

		return () => {
			editorInstance?.current?.destroy();
			editorInstance.current = null;
		};
	}, []);

	return (
		<div id="editorjs"></div>
	);
}



export default Editor