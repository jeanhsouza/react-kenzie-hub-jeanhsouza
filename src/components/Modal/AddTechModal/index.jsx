import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";
import {Button} from "../../Button"
import {Form} from "../../Form"
import {Input} from "../../Input"
import { SelectModal } from "../SelectModal";

export function AddTechModal() {
	const { setIsOpen } = useContext(UserContext);

	function closeModal() {
		setIsOpen(false);
	}
	return (
		<>
			<div className="modalHeader">
				<h3>Cadastrar Tecnologia</h3>
				<Button click={closeModal}>X</Button>
			</div>
			<div className="modalContent">
				<Form>
					<Input
						label="Nome"
						name="name"
						type="text"
						placeholder="Digite o nome da tecnologia"
					></Input>
					<SelectModal />
					<Button>Cadastrar Tecnologia</Button>
				</Form>
			</div>
		</>
	);
}
