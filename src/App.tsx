import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { log } from "console";
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import PageTitle from "./components/PageTitle/PageTitle";
import { ImportsNotUsedAsValues } from "typescript";
// import Accordion from "./components/Accordion/Accordion";

//===================================// //function expression
// const App = function () {
// 	return <div> This is APP Component</div>;
// };
// export default App;

//===================================// arrow function expression (ARROW =>)
// const App = () => {
// 	return <div> This is APP Component</div>;
// };
// export default App;
//==========================================================

//function declaration
function App() {
	console.log("App rendering");

	// debugger;
	//function does some usefull things
	//{ }
	// function must return JSX (looks like html)
	return (
		<div>
			<PageTitle title={"This is PageTitle component"} />
			<PageTitle title={"down - is an Article Title"} />
			ARTICLE---1
			<Accordion AcrdTitle={"First____Menu Accordion"} opened={true} />
			<Accordion AcrdTitle={"SECOND_____Users Accordion"} opened={true} />
			<PageTitle title={"Here will be some ... S.T.A.R.S.***"} />
			ARTICLE---2
			<Rating value={0} />
			<Rating value={1} />
			<Rating value={2} />
			<Rating value={3} />
			<Rating value={4} />
			<Rating value={5} />
			<Rating value={6} />
		</div>
	); // 			<Accordion AcrdTitle={"First____Menu Accordion"} /> ===>  <Accordion titleValue** ={"First____Menu Accordion"} /> Dimuch**
}

export default App;
