import CardContainer from "./CardContainer";
import ShimerCards from "./ShimerCards";
import ShimerNav from "./ShimerNav";
import { useEffect, useState } from "react";

import { FcSearch } from "react-icons/fc";

import "./Body.css";

const Body = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [searchData, setSearchData] = useState("");

  const handalInp = (e) => {
    setSearchData(e.target.value);
  };

  const handalSearch = (e) => {
    e.preventDefault();

    //* 2nd way to optimize search *//

    // if (
    //   data.filter(
    //     (res) =>
    //       res.card.card.info.name.includes(searchData) ||
    //       res.card.card.info.cuisines.includes(searchData)
    //   ) == false
    // ) {
    //   fetchData();
    // } else {
    //   setData(
    //     data.filter(
    //       (res) =>
    //         res.card.card.info.name.includes(searchData) ||
    //         res.card.card.info.cuisines.includes(searchData)
    //     )
    //   );
    // }

    setFilteredData(
      data.filter(
        (res) =>
          res.card.card.info.name.includes(searchData) ||
          res.card.card.info.cuisines.includes(searchData)
      )
    );

    setSearchData("");
  };

  const handalclick = () => {
    setFilteredData(
      filteredData.filter((res) => res.card.card.info.avgRating > 4)
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=19.0473216&lng=73.0699046&str=kharghar&trackingId=undefined&submitAction=ENTER&queryUniqueId=f86394b2-db0c-01d8-da3e-f5487f99e159&selectedPLTab=RESTAURANT"
    );
    const newData = await res.json();
    const thisData =
      newData.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards;
    console.log(searchData);

    //* 2nd way to optimize search *//
    // if (searchData === "") {
    //   setData(thisData);
    // } else {
    //   setData(
    //     thisData.filter(
    //       (res) =>
    //         res.card.card.info.name.includes(searchData) ||
    //         res.card.card.info.cuisines.includes(searchData)
    //     )
    //   );
    // }

    setData(thisData);
    setFilteredData(thisData);
  };

  return data.length === 0 ? (
    <>
      <ShimerNav /> <ShimerCards />
    </>
  ) : (
    <div>
      <div className="search">
        <input
          className="searchInp"
          type="text"
          placeholder="Search..."
          value={searchData}
          onChange={handalInp}
        />
        <button className="searchBtn" onClick={handalSearch}>
          <FcSearch />
        </button>
        <button className="filter" onClick={handalclick}>
          Top restraurent near you
        </button>
      </div>
      <div className="cardContainer">
        {filteredData.map((res) => (
          <CardContainer key={res.card.card.info.id} data={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
