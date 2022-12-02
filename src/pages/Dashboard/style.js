import styled from "styled-components";

export const StyledDashboard = styled.div`
	background-color: var(--gray100);
	height: 100vh;
	header {
		div {
			justify-content: space-between;
			align-items: center;
			padding-top: 30px;
			padding-bottom: 30px;

			Button {
				width: 70px;
				padding: 8px;
				background-color: var(--gray300);
				color: var(--white100);
				border-radius: 8px;
				font-size: var(--font-size-3);
				font-weight: var(--font-weight-2);
				text-align: center;

				:hover {
					background-color: var(--gray400);
				}
			}
		}
	}

	main {
		color: var(--gray500);
		width: 75rem;
		margin: 0 auto;

		div {
			display: flex;
			flex-direction: column;
			padding-top: 30px;
			padding-bottom: 30px;
			gap: 10px;
			border-top: 1px solid var(--gray300);
			border-bottom: 1px solid var(--gray300);

			h1 {
				font-weight: var(--font-weight-1);
				font-size: var(--font-size-1);
				margin-left: 1rem;
				margin-right: 1rem;
			}

			span {
				color: var(--gray400);
				font-weight: var(--font-weight-3);
				font-size: var(--font-size-3);
				margin-left: 1rem;
				margin-right: 1rem;
			}
		}
	}

	@media (min-width: 900px) {
		main {
			div {
				flex-direction: row;
				justify-content: space-between;
			}
		}
	}
`;
