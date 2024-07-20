import Navbar from "../components/Navbar";
import FunctionComponent from "../components/FunctionComponent";
import ClassComponent from "../components/ClassComponents";
import { Box } from "@mui/material";

function MainPage() {
    return (
        <>
            <Navbar />
            <Box sx={{textAlign: "center", mt: 3}}>
                <img width="800px" src="https://kinsta.com/wp-content/uploads/2023/04/react-must-be-in-scope-when-using-jsx.jpg"/>
            </Box>
            <FunctionComponent title="My first props" color="green" />
            <ClassComponent id="2" name="Mike" />
        </>
    );
};

export default MainPage;