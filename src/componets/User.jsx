import { useEffect, useState } from "react";
import { DEV_DETAILS } from "../utils/config";

const User = () => {
  const [devData, setDevData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(DEV_DETAILS);
    const jsonData = await data.json();
    setDevData(jsonData);
  };

  const { name, location, html_url, avatar_url } = devData;

  return (
    <div>
      <img src={avatar_url} alt="Avtar" />
      <h2>{name}</h2>
      <p>Location: {location}</p>
      <p>Contact: {html_url}</p>
    </div>
  );
};

export default User;
