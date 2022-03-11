import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navmenu from "../Navmenu/Navmenu";
import { withTranslation, useTranslation } from "react-i18next";

const btnSTyle = {
  background: "#f64028",
  color: "#fff",
  border: "none",
  padding: "3%",
  "border-radius": "10px",
  "margin": "10px"
};


function LeftDrawer(props) {

  const { t } = useTranslation();
  let history = useHistory();

  let userName = localStorage.getItem('userData');
  userName = JSON.parse(userName);
  console.log("myLeftloogin", userName);

  function handleClick(e) {
    history.push("/")

  }

  console.log("Logout")


  return (
    <>
      <aside className={"main-sidebar  " + props.style}>
        <div className="main_logo">
          {/* <img src={MainLogo} /> */}
          <h2>LOGO</h2>
        </div>
        <section className="sidebar">
          <ul className="sidebar-menu" data-widget="tree">
            <Navmenu
              classmain={""}
              src={"/"}
              faIcon={"fa fa-home"}
              label={t("Dashboard")}
            />

            {
              userName.data && userName.data[0].role === "admin" ?
                <Navmenu
                  classmain={""}
                  src={"/ProductList"}
                  faIcon={"fa fa-product-hunt"}
                  label={t("Product All List")}
                /> :

                <Navmenu
                  classmain={""}
                  src={"/ProductList"}
                  faIcon={"fa fa-product-hunt"}
                  label={t("Product List")}
                />
            }

            <Navmenu
              classmain={""}
              src={"/StoreList"}
              faIcon={"fa fa-shopping-cart"}
              label={t("Our Store")}
            />

            {
              userName.data && userName.data[0].role === "admin" ?
                <>

                  <Navmenu
                    classmain={""}
                    src={"/AssignStore"}
                    faIcon={"fa fa-tasks"}
                    label={t("Assign Store")}
                  />

                  <Navmenu
                    classmain={""}
                    src={"/UserInfo"}
                    faIcon={"fa fa-info"}
                    label={t("User Information")}
                  />
                </>
                : ''
            }







          </ul>
        </section>
      </aside>
    </>
  );
}
export default withTranslation()(LeftDrawer);
