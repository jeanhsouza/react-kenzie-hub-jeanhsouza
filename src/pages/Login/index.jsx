import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { StyledLink } from "../../components/Link/style";
import { ContainerMain } from "../../styles/container";
import { StyledLogin } from "./style";
import { api } from "../../services/api";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledToastify } from "../../styles/toastify";

export function Login() {
	const navigate = useNavigate();
	const loginSchema = yup.object().shape({
		email: yup
			.string()
			.required("O campo 'e-mail' é obrigatório")
			.email("Preencha um e-mail válido"),
		password: yup
			.string()
			.required("O campo 'senha' é obrigatório")
			.min(6, "A senha precisa ter pelo menos 6 caracteres"),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(loginSchema),
	});

	async function submit(data) {
		try {
			const request = await api.post("sessions", data);
			const response = await request.data;

			if (request) {
				toast.success("Login realizado com sucesso!", {
					position: toast.POSITION.TOP_RIGHT,
				});
				reset();
				setTimeout(() => {
					localStorage.setItem("@kenzieHub:token", response.token);
					localStorage.setItem(
						"@kenzieHub:userID",
						JSON.stringify(response.user)
					);
					navigate("/dashboard");
				}, 3000);
			}
		} catch (error) {
			toast.error("Ops! Algo deu errado", {
				position: toast.POSITION.TOP_RIGHT,
			});
			console.log(error);
		}
	}

	return (
		<StyledLogin>
			<StyledToastify />
			<Header />
			<ContainerMain>
				<Form submit={handleSubmit(submit)}>
					<h2>Login</h2>
					<Input
						label="Email"
						name="email"
						type="email"
						placeholder="Digite seu e-mail aqui"
						register={register("email")}
					/>
					{errors.email?.message && <span>{errors.email.message}</span>}
					<Input
						label="Senha"
						name="password"
						type="password"
						placeholder="Digite sua senha aqui"
						register={register("password")}
					/>
					{errors.password?.message && <span>{errors.password.message}</span>}
					<Button>Entrar</Button>
					<div className="registerBox">
						<p>Ainda não possui uma conta?</p>
						<StyledLink to="/register">Cadastre-se</StyledLink>
					</div>
				</Form>
			</ContainerMain>
		</StyledLogin>
	);
}
