import { SWGGIY_MENU_API_URL } from "../utils/config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimerCards from "./ShimerCards";
import "./MenuItemComponent.css";

import { MENU_IMG_URL } from "../utils/config";

const MenuItemComponent = () => {
  const [resData, setResData] = useState([]);
  const { resID } = useParams();

  // console.log("Menu: ");
  // console.log(menuData);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const menuData = await fetch(SWGGIY_MENU_API_URL + resID);
    const menuDataJSON = await menuData.json();
    setResData(menuDataJSON.data);
  };

  if (resData.length === 0) return <ShimerCards />;

  const { name, avgRating, locality, city, cuisines } =
    resData?.cards[2]?.card?.card?.info;

  const suggestedMenu =
    resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card
      ?.itemCards;

  return (
    <div>
      <div className="resDetails">
        <h2>{name}</h2>
        <p>
          <b>Cuisines: </b>
          {cuisines.join(", ")}
        </p>
        <p>
          <b>Locality: </b>
          {locality + ", " + city}
        </p>
        {avgRating == undefined ? (
          <p className="noRating">No Rating Found</p>
        ) : (
          <p
            className={
              avgRating >= 4
                ? "goodRating"
                : avgRating >= 2
                ? "neutralRating"
                : "badRating"
            }
          >
            {avgRating + " ★"}{" "}
          </p>
        )}
      </div>
      <div>
        {console.log(resData)}
        <>
          {suggestedMenu === undefined ? (
            <p>No Recomended Menu Found</p>
          ) : (
            <div className="menuContainer">
              <h3 className="menuTitle">Menu</h3>

              {suggestedMenu.map((res) => (
                <div className="menuItem" key={res?.card?.info?.id}>
                  <div className="itemDetails">
                    <p className="itemName"> <b> {res?.card?.info?.name} </b> </p>
                    <p>Rs. {res?.card?.info?.price / 100}</p>
                    {res?.card?.info?.ratings?.aggregatedRating?.rating ==
                    undefined ? (
                      <p className="noRating">No Rating Found</p>
                    ) : (
                      <p
                        className={
                          res?.card?.info?.ratings?.aggregatedRating?.rating >=
                          4
                            ? "goodRating"
                            : res?.card?.info?.ratings?.aggregatedRating
                                ?.rating >= 2
                            ? "neutralRating"
                            : "badRating"
                        }
                      >
                        {res?.card?.info?.ratings?.aggregatedRating?.rating +
                          " ★"}{" "}
                      </p>
                    )}
                    {res?.card?.info?.isBestseller == true ? (
                      <p>Best Seller</p>
                    ) : (
                      ""
                    )}
                  </div>

                  <span className="imgContainer">
                    <img
                      className="img"
                      src={MENU_IMG_URL + res?.card?.info?.imageId}
                      alt={res?.card?.info?.name}
                    />
                  </span>
                </div>
              ))}
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default MenuItemComponent;
