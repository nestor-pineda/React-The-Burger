import MenuCard from "./MenuCard";
import "../scss/components/_menu-section.scss";
import { useEffect, useState } from "react";

const MenuSection = () => {
  const [burgers, setBurgers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/burgers")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBurgers(data);
        setLoading(false);
        console.log(data);
      });
  }, []);

  return (
    <div className="menu-section">
      <div className="menu-section__left"></div>
      <div className="menu-section__center">
        {burgers && <MenuCard burgers={burgers} />}
        {loading && <div>Loading...</div>}
      </div>
      <div className="menu-section__right"></div>
    </div>
  );
};

export default MenuSection;
