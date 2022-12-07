import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { StyledTechList } from "./style";
import { TechCard } from "./TechCard";

export function TechList (){
    const {isLogged, loading, setIsAdding, setIsOpen} = useContext(UserContext)

    function EditEvent(){

        setIsAdding(false)
        setIsOpen(true)
    }
    
    return (
        <StyledTechList>
            {isLogged?.techs.length === 0 ? <h4>Não existe nenhuma tecnologia cadastrada. Adicione uma tecnologia agora!</h4> : loading? <h4>Carregando...</h4> : isLogged?.techs.map(tech => <TechCard key={tech.id} elem={tech} click={EditEvent}/>)}
        </StyledTechList>
    )
}