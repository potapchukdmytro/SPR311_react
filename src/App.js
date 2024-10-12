import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import FunctionComponent from "./components/FunctionComponent";
import ClassComponent from "./components/ClassComponents";
import MainPage from "./pages/mainPage/MainPage";
import NewsPage from "./pages/news/News";
import SignInPage from "./pages/auth/SignInPage";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layouts/DefaultLayout";
import NotFoundPage from "./pages/NotFoundPage";
import SignUpPage from "./pages/auth/SignUpPage";
import WeatherPage from "./pages/weatherPage/WeatherPage";
import { useAction } from "./hooks/useAction";
import { ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./theming/themes";
import { useSelector } from "react-redux";
import "./localization/config";
import axios from "axios";
import UsersPage from "./pages/users/UsersPage";


function App() {
    const { googleLogin } = useAction();
    const { isDark } = useSelector(store => store.themeReducer);

    if(localStorage.getItem("oauth") != null) {
        googleLogin(localStorage.getItem("oauth"));
    }

    let currentTheme = lightTheme;
    if(isDark) {
        currentTheme = darkTheme;
    }

    // user location
    navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationError);

    function getLocationSuccess(data) {
        const lon = data.coords.longitude;
        const lat = data.coords.latitude;

        const apiLocationUrl = `https://api.openweathermap.org/geo/1.0/reverse?appid=5a31fbfd92c0522d248db2c164ac47c5&lat=${lat}&lon=${lon}`;
        axios.get(apiLocationUrl).then(response => {            
            const {data} = response;
            const city = data[0].local_names.uk;
            console.log(city);
        });
    }

    
    function getLocationError(error) {
        getLocationByUserIP();
    }

    function getLocationByUserIP() {
        // axios.get("https://api.ipify.org/?format=json")
        // .then(response => {
        //     console.log(response.data.ip);
        // });

        axios.get("https://api.geoapify.com/v1/ipinfo?&apiKey=5a99905f68e54e7fb672817b26689a02")
        .then(response => {
            console.log(response.data.city.name);
        });
    }

    return (
        <div>
            <ThemeProvider theme={currentTheme}>
                <Routes>
                    <Route path="/" element={<DefaultLayout />}>
                        <Route index element={<MainPage />} />
                        <Route path="/news" element={<NewsPage />} />
                        <Route path="/login" element={<SignInPage />} />
                        <Route path="/register" element={<SignUpPage />} />
                        <Route path="/weather" element={<WeatherPage />} />
                        <Route path="/users" element={<UsersPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;
