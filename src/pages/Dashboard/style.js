import styled from "styled-components";

export const StyledDashboard = styled.div`
	background-color: var(--gray100);
	min-height: 100vh;
	height: fit-content;
	header {
		> div {
			justify-content: space-between;
			align-items: center;
			padding-top: 1.875rem;
			padding-bottom: 1.875rem;

			> Button {
				width: 4.375rem;
				padding: 0.5rem;
				background-color: var(--gray300);
				color: var(--white100);
				border-radius: 0.5rem;
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
		max-width: 1200px;
		margin: 0 auto;

		.userBox {
			display: flex;
			flex-direction: column;
			padding-top: 1.875rem;
			padding-bottom: 1.875rem;
			gap: 1.875rem;
			border-top: 0.0625rem solid var(--gray300);
			border-bottom: 0.0625rem solid var(--gray300);

			> h1 {
				font-weight: var(--font-weight-1);
				font-size: var(--font-size-1);
			}

			> span {
				color: var(--gray400);
				font-weight: var(--font-weight-3);
				font-size: var(--font-size-3);
			}
		}

		.techHeader {
			display: flex;
			justify-content: space-between;
			flex-direction: row;
			align-items: center;
			padding-top: 1.5625rem;
			padding-bottom: 1.5625rem;

			> h1 {
				font-weight: var(--font-weight-1);
				font-size: var(--font-size-1);
			}

			> Button {
				width: 35px;
				padding: 0.25rem;
				background-color: var(--gray300);
				color: var(--white100);
				border-radius: 0.5rem;
				font-size: var(--font-size-1);
				font-weight: var(--font-weight-1);
				text-align: center;

				:hover {
					background-color: var(--gray400);
				}
			}
		}
	}

	@media (min-width: 900px) {
		main {
			.userBox {
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
			}
		}

		.userContent {
			flex-direction: column;
			justify-content: space-between;
			border-top: 0.0625rem solid transparent;
			border-bottom: 0.0625rem solid transparent;

			> span {
				color: var(--gray500);
			}
		}

		.techHeader {
			flex-direction: row;
			-webkit-flex-direction: row;
			justify-content: space-between;
		}
	}
`;
