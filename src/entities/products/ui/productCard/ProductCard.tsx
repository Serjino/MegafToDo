import { Card } from "../../../../shared/ui/card/Card";
import { FlexWrapper } from "../../../../shared/ui/flexWrapper/FlexWrapper";
import { IProduct, IProductCardProps } from "../../product.def";

export function ProductCard({ sale, ...rest }: IProductCardProps) {
	return (
		<Card src={rest.previewPath} {...rest}>
			<FlexWrapper>{rest.price}</FlexWrapper>
			<FlexWrapper>{sale}</FlexWrapper>
		</Card>
	);
}
