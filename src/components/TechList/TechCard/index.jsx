import { StyledTechCard } from "./style";

export function TechCard({ elem, click }) {
	return (
		<StyledTechCard onClick={click}>
			<h3>{elem.title}</h3>
			<p>{elem.status}</p>
		</StyledTechCard>
	);
}
