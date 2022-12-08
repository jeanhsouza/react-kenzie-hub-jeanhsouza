import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const UserContext = createContext();

export function UserProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [isAdding, setIsAdding] = useState(false);
	const [isLogged, setIsLogged] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		getProfileUser();
	}, []);

	async function submitLogin(data) {
		try {
			setLoading(true);
			const request = await api.post("sessions", data);
			const response = await request.data;

			const { token, user } = response;

			if (request) {
				toast.success("Login realizado com sucesso!", {
					position: toast.POSITION.TOP_RIGHT,
				});
				localStorage.setItem("@kenzieHub:token", token);
				localStorage.setItem("@kenzieHub:userID", user.id);
				setIsLogged(user);
				navigate("/dashboard");
			}
		} catch (error) {
			toast.error("Ops! Algo deu errado", {
				position: toast.POSITION.TOP_RIGHT,
			});
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	async function submitRegister(data) {
		delete data.samePassword;
		try {
			setLoading(true);
			const request = await api.post("users", data);

			if (request) {
				toast.success("Conta criada com sucesso!", {
					position: toast.POSITION.TOP_RIGHT,
				});
				setTimeout(() => {
					navigate("/login");
				}, 1000);
			}
		} catch (error) {
			toast.error("Ops! Algo deu errado", {
				position: toast.POSITION.TOP_RIGHT,
			});
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	async function getProfileUser() {
		const token = localStorage.getItem("@kenzieHub:token");

		if (token) {
			try {
				setLoading(true);
				const request = await api.get("profile", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				setIsLogged(request.data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}
	}

	function submitLogoff() {
		toast.success("Logoff realizado com sucesso!", {
			position: toast.POSITION.TOP_RIGHT,
		});
		setTimeout(() => {
			localStorage.removeItem("@kenzieHub:token");
			localStorage.removeItem("@kenzieHub:userID");
			setIsLogged([]);
			navigate("/login");
		}, 1000);
	}

	return (
		<UserContext.Provider
			value={{
				loading,
				getProfileUser,
				navigate,
				submitLogin,
				submitRegister,
				submitLogoff,
				isLogged,
				setIsLogged,
				isOpen,
				setIsOpen,
				isAdding,
				setIsAdding,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
