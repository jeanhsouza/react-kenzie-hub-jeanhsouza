import styled from "styled-components";

export const StyledModal = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);

	display: flex;
	justify-content: center;
	align-items: center;

	.modalBox {
		padding: 1.875rem;
		width: 25rem;

		.modalHeader {
			padding: 0.3125rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: var(--gray300);
			border-radius: 0.25rem 0.25rem 0rem 0rem;

			> h3 {
				font-weight: var(--font-weight-1);
				font-size: var(--font-size-3);
				color: var(--gray500);
				padding-left: 1.25rem;
			}

			> button {
				width: 2.1875rem;
				padding: 0.25rem;
				background-color: transparent;
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

		.modalContent {
			> form {
				border-radius: 0rem 0rem 0.25rem 0.25rem;
				margin-top: 0rem;

				.buttonsModal {
					display: flex;
					gap: 1rem;

					button:nth-child(1) {
						padding: 0.625rem;
					}

					button:nth-child(2) {
						padding: 0.625rem;
						width: 30%;
						background-color: var(--gray300);
						color: var(--white100);
						border-radius: 0.5rem;
						font-size: var(--font-size-3);
						font-weight: var(--font-weight-1);
						text-align: center;

						:hover {
							background-color: var(--gray400);
						}
					}

					@media (min-width: 900px) {
						button:nth-child(1) {
							width: 60%;
						}

						button:nth-child(2) {
							width: 40%;
							padding: 0.25rem;
						}
					}
				}
			}
		}
	}
`;
