import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../Button";
import { Form } from "../../Form";
import { Input } from "../../Input";
import { SelectModal } from "../SelectModal";

import { yupResolver } from "@hookform/resolvers/yup";
import { addTechModalSchema } from "./AddTechModalSchema";
import { TechContext } from "../../../Context/TechContext";

export function AddTechModal() {
	const { submitAddTechModal, closeModal } = useContext(TechContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "OnBlur", resolver: yupResolver(addTechModalSchema) });

	return (
		<>
			<div className="modalHeader">
				<h3>Cadastrar Tecnologia</h3>
				<Button click={closeModal}>X</Button>
			</div>
			<div className="modalContent">
				<Form submit={handleSubmit(submitAddTechModal)}>
					<Input
						label="Nome"
						name="title"
						type="text"
						placeholder="Digite o nome da tecnologia"
						register={register("title")}
					></Input>
					{errors.title?.message && <span>{errors.title.message}</span>}
					<SelectModal register={register("status")} />
					{errors.status?.message && <span>{errors.status.message}</span>}
					<Button>Cadastrar Tecnologia</Button>
				</Form>
			</div>
		</>
	);
}
