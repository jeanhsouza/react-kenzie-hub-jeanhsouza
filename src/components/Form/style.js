import styled from "styled-components";

export const StyledForm = styled.form`
	max-width: 370px;	
	background-color: var(--gray200);
	box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
	border-radius: 4px;
	padding: 30px 22px;
	width: 100%;
	color: var(--gray500);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	margin-bottom: 2rem;

	h2 {
		font-weight: var(--font-weight-1);
		font-size: var(--font-size-1);
	}

	span {
		color: var(--gray400);
		font-weight: var(--font-weight-3);
		font-size: var(--font-size-3);
	}

	@media (min-width: 900px) {
		max-width: 370px;
	}
`;
