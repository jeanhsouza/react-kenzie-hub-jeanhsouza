import { StyledButton } from "./style";

export function Button({ children, click, type }) {
	return (
		<StyledButton type={type = "submit"} onClick={click}>
			{children}
		</StyledButton>
	);
}
