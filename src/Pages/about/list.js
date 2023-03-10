import { Box } from "@chakra-ui/react";
import React from "react";

const list = () => {
  return (
    <>
      <Box style={{ fontSize: "20px", textAlign: "center", marginTop: "4rem" }}>
        <li type="disc">Tiger</li>
        <li type="bullet">Elephant</li>
        <li type="bullet">Lion</li>
      </Box>
    </>
  );
};

export default list;
