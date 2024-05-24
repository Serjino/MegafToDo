import { FlexWrapper } from "../../../shared/ui/flexWrapper/FlexWrapper";
import { Typography } from "../../../shared/ui/typography/Typography";

export function Header() {
	return (
		<header>
			<FlexWrapper>
				<Typography>Логотип интернет магазина</Typography>
				<Typography variant="subtitle">Header</Typography>
			</FlexWrapper>
		</header>
	);
}
