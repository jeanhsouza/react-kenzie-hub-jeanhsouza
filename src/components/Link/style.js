import { Link as LinkRouter } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(LinkRouter)`
	width: 100%;
	padding: 0.75rem 1.25rem;
	background-color: var(--gray300);
	color: var(--white100);
	border-radius: 0.5rem;
	font-size: var(--font-size-3);
	font-weight: var(--font-weight-2);
	text-align: center;

	:hover {
		background-color: var(--gray400);
	}
`;
