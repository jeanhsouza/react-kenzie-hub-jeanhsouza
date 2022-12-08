import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { ContainerMain } from "../../styles/container";
import { StyledToastify } from "../../styles/toastify";
import { StyledDashboard } from "./style";
import { useContext } from "react";
import { Motion } from "../../components/Motion";
import { UserContext } from "../../Context/UserContext";
import { Navigate } from "react-router-dom";
import { TechList } from "../../components/TechList";
import { Modal } from "../../components/Modal";
import { TechContext } from "../../Context/TechContext";

export function Dashboard() {
	const { submitLogoff, isLogged, isOpen } = useContext(UserContext);
	const { OpenModal } = useContext(TechContext);

	if (!localStorage.getItem("@kenzieHub:token")) {
		return <Navigate to="/login" />;
	}

	return (
		<Motion>
			{isOpen && <Modal />}
			<StyledDashboard>
				<StyledToastify autoClose={1000} />
				<Header>
					<Button click={submitLogoff}>Sair</Button>
				</Header>
				<ContainerMain>
					<div className="userBox">
						<h1>Olá, {isLogged?.name}</h1>
						<span>{isLogged?.course_module}</span>
					</div>
					<div className="userContent">
						<div className="techHeader">
							<h1>Tecnologias</h1>
							<Button click={OpenModal}>+</Button>
						</div>
						<TechList />
					</div>
				</ContainerMain>
			</StyledDashboard>
		</Motion>
	);
}
