import React, { Component } from "react";
import "./App.css";
import { ToDoList } from "./components/ToDoList";


import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
	state = {
		visible: true
		//   whichComponentToShow: "ImageSlider"
	};

	render() {
		return (
			<div className="App">
				<h1>To Do List</h1><br/>
				<div className="row">
					
					<ToDoList />
				</div>

				{/* <FetchRandomUser /> */}
			</div>
		);
	}
	//  let slider = this.state.visible ? <ImageSlider /> : <div><Counter /></div>;
	//  if (this.state.whichComponentToShow === "ImageSlider") {

	// return (

	//   <div className="App">
	//     <ToDoList />
	//     <div style={
	//       this.state.visible
	//         ? {}
	//         : {
	//           display: 'none'
	//         }
	//     }
	//     >
	//       <Counter />
	//     </div>

	//     <button onClick={() => {
	//       this.setState({
	//         visible: !this.state.visible
	//       });
	//     }}>Toogle button</button>

	//   </div>

	// <div className="App">

	//   <ToDoList />
	//   <ImageSlider />
	//   <button onClick={() => {
	//     this.setState({ whichComponentToShow: "Counter" })
	//   }}> show for Counter</button>

	// </div>
	//   );

	// }

	// else if (this.state.whichComponentToShow === "Counter") {
	//   return (
	//     <div className="App">
	//       <Counter initialValue={0} />
	//       <button onClick={() => {
	//         this.setState({ whichComponentToShow: "ImageSlider" })
	//       }}> show for ImageSlider</button>
	//     </div>

	//);

	// return null;
}

// }
// }

export default App;
