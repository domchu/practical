import React from "react";
import { Box } from "@chakra-ui/react";
import Counter from "../Counter/Counter";
import Calender from "../Components/Calender/Calender";

const Blog = () => {
  return (
    <>
      <Box style={{ fontSize: "3rem" }} className="page">
        <Counter />
      </Box>
      <Calender />
    </>
  );
};

export default Blog;
