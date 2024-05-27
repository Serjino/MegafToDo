import { useEffect, useState } from "react";
import { FlexWrapper } from "../../../shared/ui/flexWrapper/FlexWrapper";
import { Typography } from "../../../shared/ui/typography/Typography";
import { getProductsList } from "../../../entities/products/api/api";
import { ProductCard } from "../../../entities/products/ui/poductCard/ProductCard";

export function Catalog() {
	const [productsList, setProductsList] = useState([]);

	useEffect(() => {
		productsList.length === 0 &&
			getProductsList().then(({ products }) => setProductsList(() => products));
	}, []);

	return (
		<FlexWrapper section column gap={4}>
			<Typography as={"h1"} variant="h1">
				Наши товары
			</Typography>
			<FlexWrapper style={{ flexWrap: "wrap" }}>
				{productsList.map((product) => {
					return <ProductCard key={product.id} {...product} />;
				})}
			</FlexWrapper>
		</FlexWrapper>
	);
}
