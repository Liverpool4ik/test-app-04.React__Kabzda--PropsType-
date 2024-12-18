type PageTitlePropsType = {
	title: string;
};

function PageTitle(props: PageTitlePropsType) {
	console.log("PageTitlerendering");

	return <h1>{props.title}</h1>;
}

export default PageTitle;
