import { Card } from "../../../../shared/ui/card/Card";
import { FlexWrapper } from "../../../../shared/ui/flexWrapper/FlexWrapper";
import { IProduct } from "../../model/product.def";

export function ProductCard({ sale, ...rest }: IProduct) {
	return (
		<Card src={rest.previewURL} {...rest}>
			<FlexWrapper>{rest.price}</FlexWrapper>
			<FlexWrapper>{sale}</FlexWrapper>
		</Card>
	);
}
