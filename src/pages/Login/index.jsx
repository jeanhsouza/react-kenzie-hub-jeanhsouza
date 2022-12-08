import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { StyledLink } from "../../components/Link/style";
import { ContainerMain } from "../../styles/container";
import { StyledLogin } from "./style";

import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";
import { StyledToastify } from "../../styles/toastify";
import { Motion } from "../../components/Motion";
import { loginSchema } from "./loginSchema";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

export function Login() {
	const { loading, submitLogin } = useContext(UserContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(loginSchema),
	});

	return (
		<Motion>
			<StyledLogin>
				<StyledToastify autoClose={3000} />
				<Header />
				<ContainerMain>
					<Form submit={handleSubmit(submitLogin)}>
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
						<Button disabled={loading}>
							{loading ? "Logando..." : "Entrar"}
						</Button>
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
