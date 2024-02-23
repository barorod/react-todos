import Create from '@mui/icons-material/Create';
import { InputAdornment, IconButton, TextField, ListItem } from '@mui/material';
import { useState } from 'react';

export default function TodoForm({ addTodo }) {
	const [text, setText] = useState('');
	const handleChange = (evt) => setText(evt.target.value);
	const handleSubmit = (evt) => {
		evt.preventDefault();
		addTodo(text);
		setText('');
	};
	return (
		<ListItem>
			<form onSubmit={handleSubmit}>
				<TextField
					id="outlined-basic"
					label="Outlined"
					variant="outlined"
					onChange={handleChange}
					value={text}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton aria-label="create todo" edge="end" type="submit">
									<Create />
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
			</form>
		</ListItem>
	);
}
