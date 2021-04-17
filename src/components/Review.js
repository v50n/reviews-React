/* eslint-disable jsx-a11y/alt-text */
import reviewData from '../data';
import React,{useEffect, useState} from 'react';
import {GrNext, GrPrevious} from 'react-icons/gr'

const Review = () =>{
    const dataArr = reviewData;

    const [data,setData] = useState(dataArr[0])

    const handleBtnPrev = () =>{
        if(data.id === 1){
            setData(dataArr[dataArr.length - 1]);
        }else{
            setData(dataArr[data.id - 2]); // because the id begin with 1
        }
    }

    const handleBtnNext = () =>{
        if(data.id === 4){
            setData(dataArr[0]);
        }else{
            setData(dataArr[data.id]); // because the id begin with 1
        }
    }

    const randomReview = () =>{
        var randomNumber = Math.floor(Math.random() * (dataArr.length));
        setData(dataArr[randomNumber]);
    }

    useEffect(() =>{
        document.title = "review of "+data.name;
    }, [data])

    return(
        <div className="review-carousel">
            <div className="img-reviewer">
                <img src={data.img} />
                <div className="reviewer-info">
                    <div className="reviewer-name">{data.name}</div>
                    <div className="reviewer-job">{data.job}</div>
                </div>
                <div className="review-content" id="review-content">
                {data.text}
                </div>
                <div className="prev-next-btn">
                        <GrPrevious onClick={handleBtnPrev}/>
                  
                        <GrNext onClick={handleBtnNext}/>
                  
                </div>
                <div className="suprise-btn">
                    <button id="btn-random" className="btn-random" onClick={randomReview}>
                        Suprise me
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Review;