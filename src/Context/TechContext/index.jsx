import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { UserContext } from "../UserContext";

export const TechContext = createContext();

export function TechProvider({ children }) {
	const { getProfileUser, setIsOpen, setIsAdding } = useContext(UserContext);
	const token = localStorage.getItem("@kenzieHub:token");
	const [techCard, setTechCard] = useState({});

	async function addTech(dataForm) {
		try {
			const request = await api.post("users/techs", dataForm, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (request) {
				toast.success("Tecnologia cadastrada com sucesso!", {
					position: toast.POSITION.TOP_RIGHT,
				});
			}
		} catch (error) {
			console.log(error);
			toast.error("Ops! Algo deu errado", {
				position: toast.POSITION.TOP_RIGHT,
			});
		}
	}

	async function editTech(dataForm, id) {
		try {
			const request = await api.put(`users/techs/${id}`, dataForm, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (request) {
				toast.success("Tecnologia editada com sucesso!", {
					position: toast.POSITION.TOP_RIGHT,
				});
			}
		} catch (error) {
			console.log(error);
			toast.error("Ops! Algo deu errado", {
				position: toast.POSITION.TOP_RIGHT,
			});
		}
	}

	async function deleteTech(id) {
		try {
			const request = await api.delete(`users/techs/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (request) {
				toast.success("Tecnologia removida com sucesso!", {
					position: toast.POSITION.TOP_RIGHT,
				});
			}
		} catch (error) {
			console.log(error);
			toast.error("Ops! Algo deu errado", {
				position: toast.POSITION.TOP_RIGHT,
			});
		}
	}

	function OpenModal() {
		setIsOpen(true);
		setIsAdding(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	function EditEvent(tech) {
		setTechCard(tech);
		setIsAdding(false);
		setIsOpen(true);
	}

	function submitAddTechModal(data) {
		addTech(data);
		setTimeout(() => {
			getProfileUser();
			closeModal();
		}, 500);
	}

	function submitEditTechModal(data) {
		delete data.title;
		editTech(data, techCard.id);
		setTimeout(() => {
			getProfileUser();
			closeModal();
		}, 500);
	}

	function submitDeleteTech() {
		deleteTech(techCard.id);
		setTimeout(() => {
			getProfileUser();
			closeModal();
		}, 500);
	}

	return (
		<TechContext.Provider
			value={{
				submitAddTechModal,
				submitEditTechModal,
				submitDeleteTech,
				EditEvent,
				techCard,
				setTechCard,
				OpenModal,
				closeModal,
			}}
		>
			{children}
		</TechContext.Provider>
	);
}
