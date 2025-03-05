import { useRouteError } from "react-router-dom"
import ErrorImg from "../utils/ErrorImg.png";
import "./Error.css";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return(
        <div className="error">
        <h2>
            {error.status}: {error.statusText}
        </h2>
        <img className="errorImg" src={ErrorImg} alt="error" />
        </div>
    )
}

export default Error;