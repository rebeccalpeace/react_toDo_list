import { useState } from 'react';
import Navbar from "./components/Navbar";

function App() {
	const [things, setThings] = useState([]);

	function handleAddClick(e){
		e.preventDefault();
		const toDo = e.target.add.value;
		let allThings = [...things, toDo]
		setThings(allThings)
	}

	function handleDoneClick(e){
		const done = e.target.remove.value;
		let allThings = things
		for (let i=0; i < allThings.length; i++){
			if (allThings[i] === done){
				allThings.splice(i, 1);
			} 
		}
		setThings(allThings)
	}

	return (
		<>
			<Navbar />
			<div className='container'>
				<div className="row mt-5 me-2 ms-2 d-flex justify-content-around">
					<form onSubmit={handleAddClick} className="col-6 d-flex ">
						<label htmlFor="add" className="form-label me-2">Add:</label>
						<input type='text' className='form-control me-2' name='add' />
						<input type='submit' value='Add' className='btn btn-success' />
					</form>
					<form className="col-6">
						<div className="input-group">
							<label htmlFor="remove" className="form-label me-2">Done with:</label>
							<select className="form-select" onSubmit={handleDoneClick} id="inputGroupSelect04" name="remove" aria-label="Example select with button addon">
								<option defaultValue="Choose...">Choose...</option>
								{things.map((t, i) => <option value={i+1}>{t}</option>)}
							</select>
							<input className="btn btn-success" type="submit" value="Done" />
						</div>
					</form>
				</div>
				<table className='table mt-5 w-25 ms-auto me-auto'>
					<thead>
						<tr>
							<th scope="col"></th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						{things.map((t, i) => <tr><th scope='row'>{i+1}</th><td>{t}</td></tr>)}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default App;
