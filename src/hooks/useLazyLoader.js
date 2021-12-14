import React, { useState } from "react";

const LazyLoader = (length) => {
	const [limit, setLimit] = useState(6);

	const ammountOfClick =  Math.floor(length / limit);

	const onLoadMore = (e) => {
		e.preventDefault();
		if (ammountOfClick > 0) {
			setLimit((prev) => prev + 6);
		}
	};

	return { limit, ammountOfClick, onLoadMore };
};

export default LazyLoader;