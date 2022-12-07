import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { AddTechModal } from "./AddTechModal";
import { EditTechModal } from "./EditTechModal";
import { StyledModal } from "./style";

export function Modal() {
	const { isAdding } = useContext(UserContext);

	return (
		<StyledModal>
			<div className="modalBox">
				{isAdding ? <AddTechModal /> : <EditTechModal />}
			</div>
		</StyledModal>
	);
}
