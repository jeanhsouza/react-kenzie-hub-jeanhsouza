import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { ContainerMain } from "../../styles/container";
import { StyledToastify } from "../../styles/toastify";
import { StyledDashboard } from "./style";
import { toast } from "react-toastify";
import { useEffect } from "react";

export function Dashboard() {
	const navigate = useNavigate();

	useEffect(() => {
		if (!localStorage.getItem("@kenzieHub:token")) {
			navigate("/login");
		}
	}, [navigate]);

	const userID = JSON.parse(localStorage.getItem("@kenzieHub:userID"));

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
		<StyledDashboard>
			<StyledToastify />
			<Header>
				<Button click={handleClick}>Sair</Button>
			</Header>
			<ContainerMain>
				{userID && (
					<div className="UserBox">
						<h1>Olá, {userID.name}</h1>
						<span>{userID.course_module}</span>
					</div>
				)}
			</ContainerMain>
		</StyledDashboard>
	);
}
