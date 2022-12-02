import { StyledForm } from "./style";

export function Form({ children, submit }) {
	return (
		<StyledForm onSubmit={submit} noValidate>
			{children}
		</StyledForm>
	);
}
