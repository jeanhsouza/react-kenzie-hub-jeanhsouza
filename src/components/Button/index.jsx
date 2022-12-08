import { StyledButton } from "./style";

export function Button({ children, click, type = "submit" }) {
	return (
		<StyledButton type={type} onClick={click}>
			{children}
		</StyledButton>
	);
}
