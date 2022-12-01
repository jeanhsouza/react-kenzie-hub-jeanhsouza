import styled from "styled-components";

export const StyledInput = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap:16px;

	label{
		font-size: var(--font-size-4);
	}

	input {
		background: var(--gray300);
		color: var(--gray500);
		border: 1px solid var(--gray300);
		border-radius: 4px;
		padding: 10px 16px;
		outline: none;

		font-weight: var(--font-weight-3);
		font-size: var(--font-size-3);
		line-height: var(--line-heigh);

		:focus {
			border: 1px solid var(--gray500);

			::placeholder {
				color: var(--gray500);
			}
		}
	}
`;
