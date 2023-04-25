import { Outlet} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import React from "react";

function RootLayout() {


  return (
    <React.Fragment>
      <MainNavigation />
      <main> 
        <Outlet />
      </main>
    </React.Fragment>
  );
}

export default RootLayout;
