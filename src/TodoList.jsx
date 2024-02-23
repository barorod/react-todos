import List from '@mui/material/List';
import { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const initialTodos = [
	{ id: 1, text: 'Walk the dog', completed: false },
	{ id: 2, text: 'Walk the cat', completed: false },
	{ id: 3, text: 'Walk the chicken', completed: true },
	{ id: 4, text: 'Walk the tiger', completed: false },
	{ id: 5, text: 'Walk the frog', completed: false },
	{ id: 6, text: 'Walk the rabbit', completed: true },
];

export default function TodoList() {
	const [todos, setTodos] = useState(initialTodos);
	const toggleTodo = (id) =>
		setTodos((prevTodos) =>
			prevTodos.map((t) => {
				if (t.id === id) {
					return { ...t, completed: !t.completed };
				} else {
					return t;
				}
			})
		);
	const removeTodo = (id) => {
		setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
	};
	const addTodo = (text) => {
		setTodos((prevTodos) => [
			...prevTodos,
			{ text: text, id: Math.floor(Math.random() * 1000), completed: false },
		]);
	};
	return (
		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			{todos.map((todo) => (
				<TodoItem
					todo={todo}
					key={todo.id}
					remove={() => removeTodo(todo.id)}
					toggle={() => toggleTodo(todo.id)}
				/>
			))}
			<TodoForm addTodo={addTodo} />
		</List>
	);
}
