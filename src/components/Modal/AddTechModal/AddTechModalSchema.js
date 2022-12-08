import * as yup from "yup";

export const addTechModalSchema = yup.object().shape({
	title: yup.string().required("O campo 'Nome' é obrigatório"),
	status: yup.string().required("O campo 'Selecionar Módulo' é obrigatório"),
});
