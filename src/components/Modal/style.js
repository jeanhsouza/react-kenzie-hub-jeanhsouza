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
		padding: 30px;
		width: 400px;

		.modalHeader {
			padding: 5px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: var(--gray300);
			border-radius: 4px 4px 0px 0px;

			> h3 {
				font-weight: var(--font-weight-1);
				font-size: var(--font-size-3);
				color: var(--gray500);
				padding-left: 20px;
			}

			> button {
				width: 35px;
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
				border-radius: 0px 0px 4px 4px;
				margin-top: 0px;

				.buttonsModal {
					display: flex;
					gap: 16px;

					button:nth-child(1) {
						padding: 10px;
					}

					button:nth-child(2) {
                        padding: 10px;
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
