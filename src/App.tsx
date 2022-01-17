import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import { usePeopleList } from './reducers/peopleList'
import './App.css';


const App = () => {
	const [list, dispatch] = usePeopleList()
	const [nameInput, setNameInput] = useState('')
	

	const handleAddButton = () => {
		if(nameInput) {
			dispatch({
				type: 'ADD',
				payload: {
					name: nameInput
				}
			})
			setNameInput('')
		}
	}

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNameInput(e.target.value)
	}

	const deletePerson = (id: string) => {
		dispatch({
			type: 'DEL',
			payload: {
				id
			}
		})
	}

	const handleOrderButton = () => {
		dispatch({
			type: 'ORDER',
		});
	}
	return (
		<div>
			<input
				type="text"
				value={nameInput}
				onChange={handleInputChange}
			/>

			<button onClick={handleAddButton}>Adicionar</button>

			<hr />

			<button onClick={handleOrderButton}>Ordenar</button>

			Lista de pessoas:
			<ul>
				{list.map((item, index) => (
					<li key={index}>
						{item.name}
						<button onClick={() => deletePerson(item.id)}>Deletar</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
