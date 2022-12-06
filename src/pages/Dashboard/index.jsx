import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { ContainerMain } from "../../styles/container";
import { StyledToastify } from "../../styles/toastify";
import { StyledDashboard } from "./style";
import { toast } from "react-toastify";
import { useContext } from "react";
import { Motion } from "../../components/Motion";
import { UserContext } from "../../Context/UserContext";
import { Navigate } from "react-router-dom";

export function Dashboard() {
	const { navigate, isLogged } = useContext(UserContext);

	if (!localStorage.getItem("@kenzieHub:token")) {
		return <Navigate to="/login" />;
	}

	// const userID = JSON.parse(localStorage.getItem("@kenzieHub:userID"));

	function handleClick() {
		toast.success("Logoff realizado com sucesso!", {
			position: toast.POSITION.TOP_RIGHT,
		});
		setTimeout(() => {
			localStorage.removeItem("@kenzieHub:token");
			localStorage.removeItem("@kenzieHub:userID");
			navigate("/login");
		}, 3000);
	}

	return (
		<Motion>
			<StyledDashboard>
				<StyledToastify />
				<Header>
					<Button click={handleClick}>Sair</Button>
				</Header>
				<ContainerMain>
					<div className="UserBox">
						<h1>Olá, {isLogged.name}</h1>
						<span>{isLogged.course_module}</span>
					</div>
					<div className="userContent">
						<h1>Que pena! Estamos em desenvolvimento :(</h1>
						<span>
							Nossa aplicação está em desenvolvimento, em breve teremos
							novidades
						</span>
					</div>
				</ContainerMain>
			</StyledDashboard>
		</Motion>
	);
}
