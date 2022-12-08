import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";
import { Button } from "../../Button";
import { Form } from "../../Form";
import { Input } from "../../Input";
import { SelectModal } from "../SelectModal";

export function EditTechModal() {
	const { setIsOpen } = useContext(UserContext);

	function closeModal() {
		setIsOpen(false);
	}
	return (
		<>
			<div className="modalHeader">
				<h3>Tecnologia Detalhes</h3>
				<Button click={closeModal}>X</Button>
			</div>
			<div className="modalContent">
				<Form>
					<Input
						label="Nome do Projeto"
						name="name"
						type="text"
						placeholder="Digite o nome da tecnologia"
					></Input>
					<SelectModal />
					<div className="buttonsModal">
						<Button>Salvar alterações</Button>
						<Button type="button">Excluir</Button>
					</div>
				</Form>
			</div>
		</>
	);
}
