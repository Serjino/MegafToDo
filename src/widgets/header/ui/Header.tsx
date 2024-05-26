import { FlexWrapper } from "../../../shared/ui/flexWrapper/FlexWrapper";
import { Typography } from "../../../shared/ui/typography/Typography";
import { ReactComponent as Logo } from "../../../shared/assets/images/logo.svg";
import { Navigation } from "../../../features/navigation/Navigation";

export function Header() {
	return (
		<header>
			<FlexWrapper section>
				<FlexWrapper>
					<Logo />
					<Typography as="h1" variant={'h1'}>Furniro</Typography>
				</FlexWrapper>
				<Navigation />
			</FlexWrapper>
		</header>
	);
}
