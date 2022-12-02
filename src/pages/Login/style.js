import styled from "styled-components";

export const StyledLogin = styled.div`
	background-color: var(--gray100);
	height: 100vh;
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;

		form {
			.registerBox {
				width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 1rem;
			}
		}
	}
`;
