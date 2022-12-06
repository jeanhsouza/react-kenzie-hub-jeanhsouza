import { StyledInput } from "./style";

export function Input({ label, name, type, placeholder, register,disabled }) {
	return (
		<StyledInput>
			<label htmlFor={name}>{label}</label>
			<input name={name} type={type} placeholder={placeholder} {...register} disabled={disabled}/>
		</StyledInput>
	);
}
