import styled from "styled-components";

export const StyledHeader = styled.header`
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-bottom: 16px;
		padding-top: 50px;		

		img {
			width: 101px;
			height: 14px;
		}

		a{
			width: 20%;
			padding: 10px 5px;
		}
	}

	@media (min-width: 900px) {
		div {
			padding-left: 0px;
			padding-right: 0px;
			img {
				width: 144.06px;
				height: 19.97px;
			}
		}
	}
`;
