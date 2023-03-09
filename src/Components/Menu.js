import React from "react";
import { Link } from "react-router-dom";
import Data from "../Components/MenuData";
import { Box, Flex, Text } from "@chakra-ui/react";

const Menu = () => {
  return (
    <>
      <Flex
      // justifyContent="space-around"
      // m={5}
      // pt={56}
      // h={50}
      // flexDirection={{ base: "column", sm: "coulmn", md: "row", lg: "row" }}
      // fontSize={{ base: "23px" }}
      >
        <Box>
          {Data.map((items, index) => {
            const { title, icons, path } = items;
            return (
              <ul>
                <li key={index}>
                  <Link to={path}>
                    {icons}
                    <span>{title}</span>
                  </Link>
                </li>
              </ul>
            );
          })}
        </Box>
        <Box>
          <Text>flex</Text>
        </Box>
      </Flex>
    </>
  );
};

export default Menu;
