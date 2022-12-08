import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../Context/TechContext";
import { Button } from "../../Button";
import { Form } from "../../Form";
import { Input } from "../../Input";
import { SelectModal } from "../SelectModal";
import { editTechModalSchema } from "./EditTechModalSchema";

export function EditTechModal() {
	const { techCard, submitEditTechModal, submitDeleteTech, closeModal } =
		useContext(TechContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onBlur",
		defaultValues: { title: techCard.title, status: techCard.status },
		resolver: yupResolver(editTechModalSchema),
	});

	return (
		<>
			<div className="modalHeader">
				<h3>Tecnologia Detalhes</h3>
				<Button click={closeModal}>X</Button>
			</div>
			<div className="modalContent">
				<Form submit={handleSubmit(submitEditTechModal)}>
					<Input
						label="Nome do Projeto"
						name="title"
						type="text"
						placeholder="Digite o nome da tecnologia"
						register={register("title")}
						disabled={true}
					></Input>
					<SelectModal register={register("status")} />
					{errors.status?.message && <span>{errors.status.message}</span>}
					<div className="buttonsModal">
						<Button>Salvar alterações</Button>
						<Button type="button" click={submitDeleteTech}>
							Excluir
						</Button>
					</div>
				</Form>
			</div>
		</>
	);
}
