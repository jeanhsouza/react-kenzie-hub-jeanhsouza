import { StyledInput } from "./style";

export function Input ({label,name,type,placeholder,register}){
    return (
        <StyledInput>
            <label htmlFor={name}>{label}</label> 
            <input name={name} type={type} placeholder={placeholder} {...register}/> 
        </StyledInput>
    )
}