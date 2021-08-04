import { useEffect, useState } from "react";

import { getOpportunities } from "../../utils/api";

const useOpportunities = () => {
	const [opportunities, setOpportunities] = useState([]);
	const [category, setCategory] = useState("");

	useEffect(() => {
		console.log(category, "category in useEffect");
		getOpportunities(category)
			.then((opportunitiesfromAPI) => {
				setOpportunities(opportunitiesfromAPI);
			})
			.catch((err) => console.log(err, "ERROR"));
	}, [category]);
	return { opportunities, setOpportunities, category, setCategory };
};

export default useOpportunities;
