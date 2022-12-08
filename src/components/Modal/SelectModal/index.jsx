import { StyledSelectModal } from "./style";

export function SelectModal({ register, disabled }) {
	return (
		<StyledSelectModal>
			<label htmlFor="status">Selecionar Módulo</label>
			<select name="status" {...register} disabled={disabled}>
				<option value="">Selecione o Módulo</option>
				<option value="Iniciante">Iniciante</option>
				<option value="Intermédiario">Intermédiario</option>
				<option value="Avançado">Avançado</option>
			</select>
		</StyledSelectModal>
	);
}
