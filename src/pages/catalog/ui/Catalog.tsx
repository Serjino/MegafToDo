import { useEffect, useState } from "react";
import { FlexWrapper } from "../../../shared/ui/flexWrapper/FlexWrapper";
import { Typography } from "../../../shared/ui/typography/Typography";
import { getProductsList } from "../../../entities/products/api/api";
import { ProductCard } from "../../../entities/products/ui/productCard/ProductCard";

export function Catalog() {
	const [productsList, setProductsList] = useState([]);

	useEffect(() => {
		productsList.length === 0 &&
			getProductsList().then(({ products }) => setProductsList(() => products));
	}, []);

	return (
		<FlexWrapper column gap={4} style={{ height: "100%" }}>
			<Typography as={"h1"} variant="h1">
				Наши товары
			</Typography>
			<FlexWrapper
				section
				style={{
					flexWrap: "wrap",
					height: "calc(100% - 156px)",
					width: "100%",
					overflow: "auto",
				}}
				gap={4}
			>
				{productsList.map((product) => {
					console.log(product);
					return (
						<ProductCard
							key={product.id}
							{...product}
							onClick={() => console.log("asd")}
						/>
					);
				})}
			</FlexWrapper>
		</FlexWrapper>
	);
}
