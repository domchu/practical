import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const About = () => {
  return (
    <Box style={{ fontSize: "1rem" }}>
      <Box textAlign="center" className="about-bt1n ">
        <Link to="/about/search" className="btn btn-primary">
          Search
        </Link>
        <NavLink
          to="/about/list"
          activeClassName="active"
          className="btn btn-secondary my-5"
        >
          List
        </NavLink>
        <NavLink
          to="/about/add"
          activeClassName="active"
          className="btn btn-success my-5"
        >
          Add
        </NavLink>
      </Box>
      <Outlet />
    </Box>
  );
};

export default About;
