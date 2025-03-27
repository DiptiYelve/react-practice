import { useEffect, useState } from "react"
import { SWGGIY_MENU_API_URL } from "../utils/config";

const useResMenu = (resID) => {
    const [resData, setResData] = useState(null);

    useEffect(() => {
        fetchResData();
    }, []);

    const fetchResData = async () => {
        const data = await fetch(SWGGIY_MENU_API_URL + resID);
        const jsonData = await data.json();
        setResData(jsonData.data);
    }

    return resData;
}

export default useResMenu;