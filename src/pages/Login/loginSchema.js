import * as yup from "yup";

export const loginSchema = yup.object().shape({
	email: yup
		.string()
		.required("O campo 'e-mail' é obrigatório")
		.email("Preencha um e-mail válido"),
	password: yup
		.string()
		.required("O campo 'senha' é obrigatório")
		.matches(/^.{6,}$/, "A senha precisa ter pelo menos 6 caracteres"),
});
