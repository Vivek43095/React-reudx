import React from "react";
import {useDispatch} from 'react-redux';
import {updateDislikeCount, updateLikeCount} from '../actions';
import classes from './Homepage.module.css'

const Homepage = () =>{
    const dispatch = useDispatch();
    
        return(
            <div className={classes.MainContainer}>
                <section className={classes.First} onClick={() => dispatch(updateLikeCount(1))}>
                    Increment + 1
                </section>
                <section className={classes.Second} onClick={() => dispatch(updateLikeCount(20))}>
                    Increment + 20
                </section>
                <section className={classes.Third} onClick={() => dispatch(updateDislikeCount(-1))}>
                    Decrement - 1
                </section>
                <section className={classes.Fourth} onClick={() => dispatch(updateDislikeCount(-10))}>
                    Decrement - 10
                </section>
            </div>
        )
    
}

export default Homepage;