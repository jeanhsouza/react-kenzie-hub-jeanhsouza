import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const UserContext = createContext();

export function UserProvider({ children }) {
	const [loading, setLoading] = useState(false);
	const [isLogged, setIsLogged] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {		
		localStorage.getItem("@kenzieHub:token") && getProfileUser()
	}, []);

	async function submitLogin(data) {
		try {
			setLoading(true);
			const request = await api.post("sessions", data);
			const response = await request.data;

			if (request) {
				toast.success("Login realizado com sucesso!", {
					position: toast.POSITION.TOP_RIGHT,
				});
				setTimeout(() => {
					localStorage.setItem("@kenzieHub:token", response.token);
					localStorage.setItem(
						"@kenzieHub:userID",
						JSON.stringify(response.user.id)
					);
					setIsLogged(response.user);
					navigate("/dashboard");
				}, 3000);
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
				}, 2000);
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
        try {
            
            const request = await api.get("profile", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("@kenzieHub:token")}`,
                },
            });

            setIsLogged(request.data);
        } catch (error) {
            console.log(error);
        }

    }

	return (
		<UserContext.Provider
			value={{ loading, navigate, submitLogin, submitRegister, isLogged }}
		>
			{children}
		</UserContext.Provider>
	);
}
