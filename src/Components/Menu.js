import React from "react";
import { Link } from "react-router-dom";
import Data from "../Components/MenuData";
import { Box } from "@chakra-ui/react";

const Menu = () => {
  return (
    <>
      <Box className="menu-container">
        {Data.map((items, index) => {
          const { title, icons, path } = items;
          return (
            <ul>
              <li key={index}>
                <Link to={path}>
                  {/* {icons} */}
                  <span style={{ flexDirection: "column" }}>{title}</span>
                </Link>
              </li>
            </ul>
          );
        })}
      </Box>
    </>
  );
};

export default Menu;
