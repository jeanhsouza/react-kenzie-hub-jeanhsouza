import { StyledSelectModal } from "./style";

export function SelectModal() {
	return (
		<StyledSelectModal>
			<label htmlFor="status">Selecionar Módulo</label>
			<select name="status">
				<option value="">Selecione o Módulo</option>
				<option value="Iniciante">Iniciante</option>
				<option value="Intermédiario">Intermédiario</option>
				<option value="Avançado">Avançado</option>
			</select>
		</StyledSelectModal>
	);
}
