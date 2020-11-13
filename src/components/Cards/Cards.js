import React, { useState, useEffect } from 'react';
import './Cards.css';

const Cards = (props) => {


    const handleClick = (event, array) => {
        const shuffle = (array) => {
            array.sort(() => Math.random() - 0.5)
            setTimeout(() => { setCardArray([...array]) }, 5)
        }

        const controlIncreaser = (event) => {
            controlObject[event.target.attributes.name.nodeValue] += +1
            props.callback(controlObject)
        }
        controlIncreaser(event)
        shuffle(array)
    }

    let controlObject = {
        taffarel: 0,
        capone: 0,
        bulent: 0,
        popescu: 0,
        ergun: 0,
        okan: 0,
        suat: 0,
        umit: 0,
        hagi: 0,
        hakan: 0,
        arif: 0,
        terim: 0,
    }

    const [cardArray, setCardArray] = useState([
        <div key="taffarel" name="taffarel" className="card" style={{ backgroundColor: "red" }} onClick={(event) => handleClick(event, cardArray,)}></div>,
        <div key="capone" name="capone" className="card" style={{ backgroundColor: "blue" }} onClick={(event) => handleClick(event, cardArray)}></div>,
        <div key="bulent" name="bulent" className="card" style={{ backgroundColor: "grey" }} onClick={(event) => handleClick(event, cardArray)}></div>,
        <div key="popescu" name="popescu" className="card" style={{ backgroundColor: "aqua" }} onClick={(event) => handleClick(event, cardArray)}></div>,
        <div key="ergun" name="ergun" className="card" style={{ backgroundColor: "purple" }} onClick={(event) => handleClick(event, cardArray)}></div>,
        <div key="okan" name="okan" className="card" style={{ backgroundColor: "salmon" }} onClick={(event) => handleClick(event, cardArray)}></div>,
        <div key="suat" name="suat" className="card" style={{ backgroundColor: "magenta" }} onClick={(event) => handleClick(event, cardArray)}></div>,
        <div key="umit" name="umit" className="card" style={{ backgroundColor: "cyan" }} onClick={(event) => handleClick(event, cardArray)}></div>,
        <div key="hagi" name="hagi" className="card" style={{ backgroundColor: "yellow" }} onClick={(event) => handleClick(event, cardArray)}></div>,
        <div key="hakan" name="hakan" className="card" style={{ backgroundColor: "green" }} onClick={(event) => handleClick(event, cardArray)}></div>,
        <div key="arif" name="arif" className="card" style={{ backgroundColor: "#342567" }} onClick={(event) => handleClick(event, cardArray)}></div>,
        <div key="terim" name="terim" className="card" style={{ backgroundColor: "#634623" }} onClick={(event) => handleClick(event, cardArray)}></div>,
    ])


    useEffect(() => {
    }, [cardArray])

    return (
        <div className="cards components">
            {cardArray}
        </div>
    )
}

export default Cards 