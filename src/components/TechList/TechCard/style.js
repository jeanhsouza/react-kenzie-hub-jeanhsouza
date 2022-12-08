import styled from "styled-components";

export const StyledTechCard = styled.li`
	cursor: pointer;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	gap: 12px;

	background-color: var(--gray100);
	border-radius: 4px;

	&:hover {
		background-color: var(--gray300);
		> p {
			color: var(--gray500);
		}
	}

	> h3 {
		color: var(--gray500);
		font-weight: var(--font-weight-1);
		font-size: var(--font-size-3);
	}

	> p {
		color: var(--gray400);
		font-weight: var(--font-weight-3);
		font-size: var(--font-size-4);
	}
`;
