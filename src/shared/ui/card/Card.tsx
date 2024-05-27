import { FlexWrapper } from "../flexWrapper/FlexWrapper";
import { Typography } from "../typography/Typography";
import { ICardProps } from "./model/Card.def";

export function Card({ src, title, subTitle, children }: ICardProps) {
	return (
		<FlexWrapper column style={{ minHeight: 450, justifyContent: "flex-end" }}>
			<FlexWrapper style={{ flex: "0 0 60%" }}>
				<img src={src} alt={"img"}></img>
			</FlexWrapper>
			<FlexWrapper column style={{ alignItems: "flex-start", flex: "0 0 40%" }}>
				<Typography variant="h3">{title}</Typography>
				<Typography>{subTitle}</Typography>
				{children}
			</FlexWrapper>
		</FlexWrapper>
	);
}
