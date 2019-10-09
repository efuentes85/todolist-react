import React from "react";

export class ToDoList extends React.Component {

	constructor(props) {
		super(props);
			
	   }

	state = {
		ToDoList: ["Make the bed", "Wash my hands", "Eat", "Walk the dog"],
		element: ""
	};

	agregaElemento = event => {
		this.setState({ element: event.target.value });
	};

	handlerSubmit = event => {
		event.preventDefault();
		var newArray = this.state.ToDoList.slice(); //copia todo el array
		newArray.push(this.state.element);
		this.setState({ ToDoList: newArray });
		event.target.reset();
	};

	deleteElement = id => {
		var newArray = this.state.ToDoList.slice();
		newArray.splice(id, 1);
		this.setState({ ToDoList: newArray });

	};

	showIcon = event => {
		console.log("por aqui pasé!!");
	};

	render() {
		return (
			<div className="col-3">
				<div className="text-center">
					<form onSubmit={this.handlerSubmit}>
						<input onChange={this.agregaElemento} placeholder="Add your task"/>
					</form>
					<ul className="list-group">
						{this.state.ToDoList.map((items,id) => (							
							<li key={id} onMouseEnter={this.showIcon}>								
								{items}							
								<button type="button" className="close" onClick={() => this.deleteElement(id)}>
									&times;								
								</button>
							</li>
						))}
					</ul>
					<pre className="text-left">
						{this.state.ToDoList.length} task to be done!
					</pre>
				</div>
			</div>
		);
	}
}
