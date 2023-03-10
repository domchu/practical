import React from "react";
import { Box } from "@chakra-ui/react";
import Counter from "../Counter/Counter";

const Blog = () => {
  return (
    <Box style={{ fontSize: "3rem" }} className="page">
      <Counter />
    </Box>
  );
};

export default Blog;
