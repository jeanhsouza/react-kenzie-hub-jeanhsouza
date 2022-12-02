import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ContainerMain } from "../../styles/container";
import { StyledRegister } from "./style";
import { StyledLink } from "../../components/Link/style";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledToastify } from "../../styles/toastify";

export function Register() {
	const navigate = useNavigate();
	const registerSchema = yup.object().shape({
		name: yup
			.string()
			.required("O campo 'nome' é obrigatório.")
			.min(3, "Nome precisa ter pelo menos 3 caracteres.")
			.max(150, "Nome não pode ter mais 150 caracteres."),
		email: yup
			.string()
			.required("O campo 'e-mail' é obrigatório.")
			.email("Preencha um e-mail válido."),
		password: yup
			.string()
			.required("O campo 'senha' é obrigatório.")
			.min(6, "A senha precisa ter pelo menos 6 caracteres."),
		samePassword: yup
			.string()
			.required("O campo 'confirmar senha' é obrigatório.")
			.min(6, "A senha precisa ter pelo menos 6 caracteres.").oneOf([yup.ref('password')], 'As senhas devem ser iguais.'),
		bio:yup.string(),
		contact: yup.string(),
		course_module: yup.string().required("O campo 'Módulo' é obrigatório.")
	
		});
	const {
		register,
		handleSubmit,
		formState: { errors },reset
	} = useForm({
		resolver: yupResolver(registerSchema),
	});

	async function submit(data) {
		delete data.samePassword;
		try {
			const request = await api.post("users", data);

			if(request){
				toast.success("Conta criada com sucesso!", {
					position: toast.POSITION.TOP_RIGHT,
				});
				reset()
				setTimeout(() => {
					navigate("/login");				
				}, 2000);
			}
		} catch (error) {
			toast.error("Ops! Algo deu errado", {
				position: toast.POSITION.TOP_RIGHT,
			});
			console.log(error);
		}
	}

	return (
		<StyledRegister>
			<StyledToastify/>
			<Header>
				<StyledLink to="/login">Voltar</StyledLink>
			</Header>
			<ContainerMain>
				<Form submit={handleSubmit(submit)}>
					<h2>Crie a sua conta</h2>
					<p>Rápido e grátis, vamos nessa!</p>
					<Input
						label="Nome"
						name="name"
						type="text"
						placeholder="Digite seu nome aqui"
						register={register("name")}
					/>
					{errors.name?.message && <span>{errors.name.message}</span>}
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
					<Input
						label="Confirmar Senha"
						name="samePassword"
						type="password"
						placeholder="Confirme a sua senha"
						register={register("samePassword")}
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
					/>
					{errors.bio?.message && <span>{errors.bio.message}</span>}
					<Input
						label="Contato"
						name="contact"
						type="text"
						placeholder="Opção de Contato"
						register={register("contact")}
					/>
					{errors.contact?.message && <span>{errors.contact.message}</span>}
					<div className="SelectDiv">
						<label htmlFor="course_module">Selecionar Módulo</label>
						<select name="course_module" {...register("course_module")}>
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

					<Button>Cadastrar</Button>
				</Form>
			</ContainerMain>
		</StyledRegister>
	);
}
