import styled from "styled-components";

export const StyledHeader = styled.header`
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-bottom: 1rem;
		padding-top: 3.125rem;

		img {
			width: 6.3125rem;
			height: 0.875rem;
		}

		a {
			width: 20%;
			padding: 0.625rem 0.3125rem;
		}
	}

	@media (min-width: 900px) {
		div {
			padding-left: 0rem;
			padding-right: 0rem;
			img {
				width: 9.0038rem;
				height: 1.2481rem;
			}
		}
	}
`;
