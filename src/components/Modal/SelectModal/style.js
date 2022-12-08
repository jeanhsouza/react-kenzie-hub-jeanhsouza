import styled from "styled-components";

export const StyledSelectModal = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	>label {
		font-size: var(--font-size-4);
	}

	>select {
		background: var(--gray300);
		color: var(--grey400);
		border: 0.0625rem solid var(--gray300);
		border-radius: 0.25rem;
		padding: 0.625rem 1rem;
		outline: none;

		font-weight: var(--font-weight-3);
		font-size: var(--font-size-3);
		line-height: var(--line-heigh);

		>option {
			color: var(--grey400);
			:focus {
				border: 0.0625rem solid var(--gray500);
				color: var(--gray500);
			}
		}
	}
`;
