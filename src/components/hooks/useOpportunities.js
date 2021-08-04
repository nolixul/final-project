import { useEffect, useState } from "react";

import { getOpportunities } from "../../utils/api";

const useOpportunities = () => {
	const [opportunities, setOpportunities] = useState([]);
	console.log("in use opps");

	useEffect(() => {
		console.log("in use effect");
		getOpportunities()
			.then((opportunitiesfromAPI) => {
				setOpportunities(opportunitiesfromAPI);
				console.log(opportunities, "Opps");
			})
			.catch((err) => console.log(err, "ERROR"));
	}, []);
	return { opportunities, setOpportunities };
};

export default useOpportunities;
