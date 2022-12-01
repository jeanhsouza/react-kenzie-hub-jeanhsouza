import { StyledButton } from "./style";

export function Button({ children, click }) {
	return <StyledButton type="submit" onClick={click}>{children}</StyledButton>;
}
