import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import FunctionComponent from "./components/FunctionComponent";
import ClassComponent from "./components/ClassComponents";
import MainPage from "./pages/mainPage/MainPage";
import NewsPage from "./pages/news/News";
import SignInPage from "./pages/auth/SignInPage";

function App() {
    return (
        <>
            {/* <NewsPage /> */}
            <SignInPage />
        </>
    );
}

export default App;
