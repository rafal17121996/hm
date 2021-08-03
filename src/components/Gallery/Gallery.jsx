import React from 'react'
import bemCssModules from "bem-css-modules";

import { default as GalleryStyles } from "./Gallery.module.scss";

const style = bemCssModules(GalleryStyles);


const Gallery = () => {
    return (
        <div id='gallery' className={style('')}>
            <img  src="https://img.icons8.com/carbon-copy/100/000000/camera--v1.png"/>
            <h2>Zajrzyjcie tu także po ślubie</h2>
            <p>Gdy tylko otrzymamy zdjęcia i film z uroczystości umieścimy je na stronie, dzięki czemu będziecie mieli możliwość obejrzeć je oraz pobrać.</p>
        </div>
    )
}

export default Gallery
