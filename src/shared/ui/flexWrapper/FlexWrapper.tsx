import styled from "@emotion/styled";
import { IFlexWrapperProps } from "./FlexWrapper.def";

export const FlexWrapper = styled.div<IFlexWrapperProps>`
	display: flex;
	flex-direction: ${({ column }) => (column ? "column" : "row")};
	align-items: center;
	padding: ${({ theme, section }) =>
		section &&
		`${theme.spaces.sectionSpacingX} ${theme.spaces.sectionSpacingY}`};
	gap: ${({ gap, theme }) =>
		(gap ? gap * theme.spacing : theme.spacing) + "px"};
`;
