import React from "react";
import { NavLink } from "react-router-dom";
// import Data from "../Components/MenuData";
import { Box } from "@chakra-ui/react";


const Menu = () => {
 
  return (
    <>
      <Box className="menu-container">
        {/* {Data.map((items, index) => { */}
          {/* // const { title, icons, path } = items; */}
          {/* return ( */}
            <ul>
              <li >
                {/* <Link to={path}> */}
                  {/* {icons} */}
                  {/* <span style={{ flexDirection: "column" }}>{title}</span> */}
                {/* </Link> */}
                <NavLink to="/" exact activeClassName="active" >Home</NavLink>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                <NavLink to="/Faq" activeClassName="active">Faq</NavLink>
                <NavLink to="/about/search" activeClassName="active">About</NavLink>
              </li>
            </ul>
          );
        {/* })} */}
      </Box>
    </>
  );
};

export default Menu;

// Get the current route 
// const router = useRouter();
// const currentRoute = router.pathname;

// Render Link 
 //<Link href="/some-path" 
   //  className={currentRoute === "/some-path" 
    //  gg? "active-class-name" 
//       : "non-active-class-name"}>
 //        Some Link
//</Link> 

// 2
// import { useRouter } from 'next/router';
// const NavBar = () => {
//   const router = useRouter();
//   const currentRoute = router.pathname;

//   return (
//     <nav className={styles.topNav}>
//       <Link href='/' className={currentRoute === '/' ? styles.active : styles.nonActive}>
//         Home
//       </Link>
//     </nav>
//   );
// };
// export default NavBar
  
  
// css
/* Specific styles for non-active links */
// .nonActive {
//   color: white;
// }

/* Specific styles for active links */
// .active {
//   color: black;
//   background: orange;
// }

// 3)
// <NavLink
//          key={tab.id}
//        className={(navData) =>
 //           navData.isActive ? styles.activeTab : styles.inactiveTab
 //         }
 //         to={tab.path}
 //       >
 //         {tab.name}
        
//</NavLink> 