import React, { useEffect, useState } from "react"
import carouselWithThumbnailsStyles from "../css/carousel-with-thumbnails.css"

export default function CarouselWithThumbnails({ imgs }) {
    const [wordData,setWordData]=useState(imgs[0])
    const [val,setVal] = useState(0)

    const handleClick=(index)=>{
        setVal(index)
        const wordSlider=imgs[index];
        setWordData(wordSlider)
    }

    const handleNext = ()=>{
        let index = val < imgs.length -1 ? val +1 : val;
        setVal(index)
        const wordSlider = imgs[index];
        setWordData(wordSlider)
    }

    const handlePrevious = ()=>{
        let index = val <= imgs.length -1 && val > 0 ? val - 1 : val;
        setVal(index)
        const wordSlider = imgs[index];
        setWordData(wordSlider)
    }

    return (
        <div>
            <div className={carouselWithThumbnailsStyles.main}>
                <button className={carouselWithThumbnailsStyles.btns} onClick={handlePrevious}>&lt;</button>
                <img src={wordData.value} height="200" width="320" /> 
                <button className={carouselWithThumbnailsStyles.btns} onClick={handleNext}>&gt;</button>
            </div>
            <div className={carouselWithThumbnailsStyles.flex_row}>
                {imgs.map((data,i)=>
                <div className={carouselWithThumbnailsStyles.thumbnail} key={i} >
                <img className={wordData.id == i ? `${carouselWithThumbnailsStyles.clicked}`: ""} src={data.value} onClick={()=>handleClick(i)} height="70" width="100" />
                </div>
                )}
            </div>
        </div>
    );
}