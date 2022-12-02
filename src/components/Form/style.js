import styled from "styled-components";

export const StyledForm = styled.form`
	max-width: 23.125rem;
	background-color: var(--gray200);
	box-shadow: 0rem 0.25rem 2.5rem -0.625rem rgba(0, 0, 0, 0.25);
	border-radius: 0.25rem;
	padding: 1.875rem 1.375rem;
	width: 100%;
	color: var(--gray500);
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 2rem;

	h2 {
		font-weight: var(--font-weight-1);
		font-size: var(--font-size-1);
		text-align: center;
	}

	p {
		color: var(--gray400);
		font-weight: var(--font-weight-3);
		font-size: var(--font-size-3);
		text-align: center;
	}

	span {
		color: var(--negative100);
		font-weight: var(--font-weight-3);
		font-size: var(--font-size-3);
	}

	@media (min-width: 900px) {
		max-width: 23.125rem;
	}
`;
