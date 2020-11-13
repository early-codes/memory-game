import React, { useState, useEffect } from 'react';
import './Cards.css';
import taffarel from "../../img/taffarel.jpeg"
import capone from "../../img/capone.jpeg"
import popescu from "../../img/popescu.jpeg"
import bulent from "../../img/bulent.jpeg"
import ergun from "../../img/ergun.jpeg"
import okan from "../../img/okan.jpeg"
import suat from "../../img/suat.jpeg"
import umit from "../../img/umit.jpeg"
import hagi from "../../img/hagi.jpeg"
import arif from "../../img/arif.jpeg"
import hakan from "../../img/hakan.jpeg"
import terim from "../../img/terim.jpeg"

const Cards = (props) => {


    const handleClick = (event, array, who) => {
        const shuffle = (array) => {
            array.sort(() => Math.random() - 0.5)
            setTimeout(() => { setCardArray([...array]) }, 5)
        }

        const controlIncreaser = (event) => {
            controlObject[event.target.getAttribute.name] += +1
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
        <div key="taffarel" name="taffarel" className="card" style={{ backgroundColor: "red" }} onClick={(event) => handleClick(event, cardArray, "taffarel")}>
        <h3>Taffarel</h3>
        <img src={taffarel} />
        </div>,
        <div key="capone" name="capone" className="card" style={{ backgroundColor: "blue" }} onClick={(event) => handleClick(event, cardArray, "capone")}>
        <h3>Capone</h3>
        <img src={capone} />
        </div>,
        <div key="bulent" name="bulent" className="card" style={{ backgroundColor: "grey" }} onClick={(event) => handleClick(event, cardArray, "bulent")}>
                <h3>Bulent</h3>
        <img src={bulent} /></div>,
        <div key="popescu" name="popescu" className="card" style={{ backgroundColor: "aqua" }} onClick={(event) => handleClick(event, cardArray, "popescu")}>
        <h3>Popescu</h3>
        <img src={popescu} />
        </div>,
        <div key="ergun" name="ergun" className="card" style={{ backgroundColor: "purple" }} onClick={(event) => handleClick(event, cardArray, "ergun")}>
        <h3>Ergun</h3>
        <img src={ergun} />
        </div>,
        <div key="okan" name="okan" className="card" style={{ backgroundColor: "salmon" }} onClick={(event) => handleClick(event, cardArray, "okan")}>
        <h3>Okan</h3>
        <img src={okan} />
        </div>,
        <div key="suat" name="suat" className="card" style={{ backgroundColor: "magenta" }} onClick={(event) => handleClick(event, cardArray, "suat")}>
        <h3>Suat</h3>
        <img src={suat} />
        </div>,
        <div key="umit" name="umit" className="card" style={{ backgroundColor: "cyan" }} onClick={(event) => handleClick(event, cardArray, "umit")}>
        <h3>Umit</h3>
        <img src={umit} />
        </div>,
        <div key="hagi" name="hagi" className="card" style={{ backgroundColor: "yellow" }} onClick={(event) => handleClick(event, cardArray, "hagi")}>
        <h3>Hagi</h3>
        <img src={hagi} />
        </div>,
        <div key="hakan" name="hakan" className="card" style={{ backgroundColor: "green" }} onClick={(event) => handleClick(event, cardArray, "hakan")}>
        <h3>Hakan</h3>
        <img src={hakan} />
        </div>,
        <div key="arif" name="arif" className="card" style={{ backgroundColor: "#342567" }} onClick={(event) => handleClick(event, cardArray, "arif")}>
        <h3>Arif</h3>
        <img src={arif} />
        </div>,
        <div key="terim" name="terim" className="card" style={{ backgroundColor: "#634623" }} onClick={(event) => handleClick(event, cardArray, "terim")}>
        <h3>Terim</h3>
        <img src={terim} />
        </div>,
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