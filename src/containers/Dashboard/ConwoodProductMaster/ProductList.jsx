import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import "../Dashboard.scss";
import Category from "../../../containers/Dashboard/ConwoodProductMaster/Category";

function ProductList(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    return (
        <>
            <div className="content-wrapper">
                {
                    userName.data && userName.data[0].role === "admin" ?
                        <Header title="Product All List" /> :
                        <Header title="Product List" />
                }
                <Category />
            </div>
        </>
    );
}

export default withTranslation()(ProductList);
