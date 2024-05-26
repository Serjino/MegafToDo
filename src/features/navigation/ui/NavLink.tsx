import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.text.main};
`;
