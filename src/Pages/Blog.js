import React from "react";
import { Box } from "@chakra-ui/react";
import Counter from "../Counter/Counter";
import Calender from "../Components/Calender/Calender";
import Clock from "../Components/Clock";

const Blog = () => {
  return (
    <>
      <Box style={{ fontSize: "3rem" }} className="page">
        <Counter />
      </Box>
      <Calender />
      <Clock />
    </>
  );
};

export default Blog;
