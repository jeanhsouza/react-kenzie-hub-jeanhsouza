import { StyledHeader } from "./style";
import logo from "../../img/logo.svg";
import { Container } from "../../styles/container";

export function Header({ children }) {
	return (
		<StyledHeader>
			<Container>
				<img src={logo} alt="Logo KenzieHub" />
				{children}
			</Container>
		</StyledHeader>
	);
}
