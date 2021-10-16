import { useEffect, useState } from "react";

const useProdcuts = () => {
	const [products, setProdudcts] = useState([]);
	useEffect(() => {
		fetch("./products.JSON")
			.then((res) => res.json())
			.then((data) => setProdudcts(data));
	}, []);
	//return nessesary things
	return [products, setProdudcts];
};

export default useProdcuts;
