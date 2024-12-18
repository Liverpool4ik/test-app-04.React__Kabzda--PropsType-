type AccordionPropsType = {
	AcrdTitle: string;
	opened: boolean; // Accordion open or close ****
};

function Accordion(props: AccordionPropsType) {
	// debugger;
	return (
		<div>
			<AccordionTitle thisTitle={props.AcrdTitle} />
			<AccordionBody />
		</div>
	); //{props.titleValue}** Dimuch**
}

//<div>
//          <div>
// 			<AccordionTitle thisTitle={props.AcrdTitle} />
// 			<AccordionBody />
// 		   </div>
//       </div>
//       <div>
//          if(props.opened === true)
//{
// 			<AccordionTitle />
//          <AccordionBody />}
//          else
//  {<AccordionTitle />}
// </div>

type AccordionTitlePropsType = {
	thisTitle: string;
};

function AccordionTitle(props: AccordionTitlePropsType) {
	// console.log("This is AccordionTitle");
	return <h3>----- {props.thisTitle} ---- </h3>; //{props.title}** Dimuch
}

function AccordionBody() {
	// debugger;
	// console.log("This is AccordionBody");
	return (
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
	);
}

export default Accordion;
