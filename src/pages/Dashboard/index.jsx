import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { ContainerMain } from "../../styles/container";
import { StyledDashboard } from "./style";

export function Dashboard() {
	const navigate = useNavigate();

	const userID = JSON.parse(localStorage.getItem("@kenzieHub:userID"));

	function handleClick() {
		localStorage.removeItem("@kenzieHub:token");
		localStorage.removeItem("@kenzieHub:userID");
		navigate("/login");
	}

	return (
		<StyledDashboard>
			<Header>
				<Button click={handleClick}>Sair</Button>
			</Header>
			<ContainerMain>
				<div className="UserBox">
					<h1>Olá, {userID.name}</h1>
					<span>{userID.course_module}</span>
				</div>
			</ContainerMain>
		</StyledDashboard>
	);
}
