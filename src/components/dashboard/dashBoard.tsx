import React, { useState, useEffect } from 'react';
import Card from "../card/card";
import '../card/cardStyling.scss';
import NavBar from '../navBar/navBar';
import './dashBoard.css';
import { getDashBoardImages } from '../../service/imageLoader';

/*
Component gets the image paths from the database and then dynamically displays the card interface
Images are in public folders
*/
const DashBoard = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getDashBoardImages().then(imagePath => {
            setImages(imagePath);
        });
    }, []);


    return (
        <>
            <NavBar />
            <div className="cards">
                {images !== undefined ?
                    (images.map((img: any) => {
                        return (
                            <Card crd="card" crd_image="card__image" crd_item="cards__item" image={img.path} />
                        )
                    })) : null
                }
            </div>
        </>
    );
}

export default DashBoard;