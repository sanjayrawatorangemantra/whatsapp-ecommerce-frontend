import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import storeImage from "../../../assets/img/store.jpg";
import { useDispatch, useSelector } from "react-redux";
import "./Slider.scss";
import { useLocation } from 'react-router-dom';


function Slider(props) {
    const location = useLocation();
    const [index, setIndex] = useState(0);
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };






    const myImageList = props.imageList;



    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>

                {
                    myImageList ? myImageList
                        .slice().length == 0 ? (<div className="no-images">No Image Available</div>)
                        : myImageList && myImageList
                            .slice().reverse().map((imageItem, index) => {
                                return (
                                    <Carousel.Item key={index}>
                                        <div className="prod_image">
                                            <img
                                                className="d-block w-100"
                                                src={imageItem}
                                            />

                                        </div>

                                    </Carousel.Item>
                                );
                            })
                        : null
                }

            </Carousel >
        </>
    );
}

export default Slider;