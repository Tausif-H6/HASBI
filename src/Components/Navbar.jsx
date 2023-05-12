import React from "react";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Navbar() {

  return (
    <nav>
      <img
        src="https://scontent.fdac13-1.fna.fbcdn.net/v/t39.30808-6/166825325_122737970024262_5249475382039329641_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF-zzyMFjFu4RztQOQ4AIQZLIxKp2BuRkMsjEqnYG5GQ3muEdBb88awzzp1vjk2KzR4Cac8gae6rAM6ZKiGwsAI&_nc_ohc=5ozb6rylNUoAX8pT3wv&_nc_ht=scontent.fdac13-1.fna&oh=00_AfDOu1fsfMk6qtYqMR2DL409HTBb598UTnQK-2fXWR_YZw&oe=6460F51E"
        alt=""
      />

      <Link to="/">Home</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/cart">
      <ShoppingBasketIcon />
      </Link>
    </nav>
  );
}

export default Navbar;
