import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import TodoList from './TodoList';
import NavBar from './NavBar';

function App() {
	return (
		<>
			<NavBar />
			<CssBaseline />
			<TodoList />
		</>
	);
}

export default App;
