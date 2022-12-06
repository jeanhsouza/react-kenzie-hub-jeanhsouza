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
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledToastify } from "../../styles/toastify";
import { Motion } from "../../components/Motion";
import { loginSchema } from "./loginSchema";
import { useState } from "react";

export function Login() {
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(loginSchema),
	});

	async function submit(data) {
		try {
			setLoading(true);
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
		finally{
			setLoading(false)
		}
	}

	return (
		<Motion>
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
						disabled={loading}
					/>
					{errors.email?.message && <span>{errors.email.message}</span>}
					<Input
						label="Senha"
						name="password"
						type="password"
						placeholder="Digite sua senha aqui"
						register={register("password")}
						disabled={loading}	
					/>
					{errors.password?.message && <span>{errors.password.message}</span>}
					<Button disabled={loading}>{loading ? "Logando..." : "Entrar"}</Button>
					<div className="registerBox">
						<p>Ainda não possui uma conta?</p>
						<StyledLink to="/register">Cadastre-se</StyledLink>
					</div>
				</Form>
			</ContainerMain>
		</StyledLogin>
		</Motion>
		
	);
}
