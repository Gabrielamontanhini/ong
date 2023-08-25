import Header from "./components/header";
import FifthPage from "./pages/Fifth";
import FirstPage from "./pages/First";
import ForthPage from "./pages/Forth";
import SecondPage from "./pages/Second";
import ThirdPage from "./pages/Third";
import { Main } from "./styles/styled";


function App() {
  return (
    <Main>
    <Header/>
    <FirstPage />
    <SecondPage />
    <ThirdPage />
    <ForthPage />
    <FifthPage />
    </Main>
  );
}

export default App;
