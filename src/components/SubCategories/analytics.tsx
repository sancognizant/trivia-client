import React, {useState, useEffect} from 'react';
import Card from '../card/card';
import '../card/cardStyling.scss';
import '../button/buttonStyle.scss';
import Button from '../button/button';
import {getAnalyticsImages} from '../../service/imageLoader';




const Analytics = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getAnalyticsImages().then(imagePath => {
            setImages(imagePath);
        });
    }, []);

    return (  
        <React.Fragment>
            <div className="cards">
                {images !== undefined ?
                    (images.map((img: any) => {
                        return (
                            <React.Fragment>
                            <Card crd="card" crd_image="card__image" crd_item="cards__item" image={img.path} />
                            <Button styles = "back" text = "Back" onClick = "" />
                            </React.Fragment>
                            
                        )
                    })) : null
                }
            </div>
        </React.Fragment>
    );
}
 
export default Analytics;