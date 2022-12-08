import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { ContainerMain } from "../../styles/container";
import { StyledRegister } from "./style";
import { StyledLink } from "../../components/Link/style";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";

import "react-toastify/dist/ReactToastify.css";
import { StyledToastify } from "../../styles/toastify";

import { Motion } from "../../components/Motion";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";

export function Register() {
	const { loading, submitRegister } = useContext(UserContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onBlur",
		resolver: yupResolver(registerSchema),
	});

	return (
		<Motion>
			<StyledRegister>
				<StyledToastify autoClose={3000} />
				<Header>
					<StyledLink to="/login">Voltar</StyledLink>
				</Header>
				<ContainerMain>
					<Form submit={handleSubmit(submitRegister)}>
						<h2>Crie a sua conta</h2>
						<p>Rápido e grátis, vamos nessa!</p>
						<Input
							label="Nome"
							name="name"
							type="text"
							placeholder="Digite seu nome aqui"
							register={register("name")}
							disabled={loading}
						/>
						{errors.name?.message && <span>{errors.name.message}</span>}
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
						<Input
							label="Confirmar Senha"
							name="samePassword"
							type="password"
							placeholder="Confirme a sua senha"
							register={register("samePassword")}
							disabled={loading}
						/>
						{errors.samePassword?.message && (
							<span>{errors.samePassword.message}</span>
						)}
						<Input
							label="Bio"
							name="bio"
							type="text"
							placeholder="Fale sobre você"
							register={register("bio")}
							disabled={loading}
						/>
						{errors.bio?.message && <span>{errors.bio.message}</span>}
						<Input
							label="Contato"
							name="contact"
							type="text"
							placeholder="Opção de Contato"
							register={register("contact")}
							disabled={loading}
						/>
						{errors.contact?.message && <span>{errors.contact.message}</span>}
						<div className="SelectDiv">
							<label htmlFor="course_module">Selecionar Módulo</label>
							<select
								name="course_module"
								{...register("course_module")}
								disabled={loading}
							>
								<option value="">Selecione o Módulo</option>
								<option value="Primeiro Módulo">Primeiro Módulo</option>
								<option value="Segundo Módulo">Segundo Módulo</option>
								<option value="Terceiro Módulo">Terceiro Módulo</option>
								<option value="Quarto Módulo">Quarto Módulo</option>
								<option value="Quinto Módulo">Quinto Módulo</option>
								<option value="Sexto Módulo">Sexto Módulo</option>
							</select>
							{errors.course_module?.message && (
								<span>{errors.course_module.message}</span>
							)}
						</div>

						<Button disabled={loading}>
							{loading ? "Cadastrando..." : "Cadastrar"}
						</Button>
					</Form>
				</ContainerMain>
			</StyledRegister>
		</Motion>
	);
}
