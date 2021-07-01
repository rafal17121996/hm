import React from 'react'
import bemCssModules from "bem-css-modules";

import { default as PhotosStyles } from "./Photos.module.scss";

const style = bemCssModules(PhotosStyles);


const Photos = () => {
    return (
        <div className={style('')}>
            reszta strony
        </div>
    )
}

export default Photos
