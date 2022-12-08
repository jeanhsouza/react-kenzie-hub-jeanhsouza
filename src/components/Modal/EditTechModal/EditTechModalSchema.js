import * as yup from "yup";

export const editTechModalSchema = yup.object().shape({
	status: yup.string().required("O campo 'Selecionar Módulo' é obrigatório"),
});
