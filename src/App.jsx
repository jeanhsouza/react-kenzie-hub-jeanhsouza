import { RoutesMain as Routes } from "./Routes";
import { GlobalStyled } from "./styles/globalStyle";

function App() {
	return (
		<div className="App">
			<GlobalStyled />
			<Routes />
		</div>
	);
}

export default App;
