import React, {useState} from 'react';
import './Score.css'

const Score = (props) => {

    const scoreFiller = (data) => {
        if (Math.max.apply(null, Object.values({ ...data })) < 2) {
            return Object.values(props.data).reduce((acc, curr) => acc + curr, 0)
        } else {
            return 0;
        }
    }

    const [bestScore, setBestScore] = useState(0)

    const bestScoreFiller = (score) => {
        if (score > bestScore) {
            setBestScore(score);
        }   
        return bestScore;     
    }

    console.log(props.data)


    return (
        <div className="score components">
            <h3>SCORE: {scoreFiller(props.data)} BEST SCORE: {bestScoreFiller(scoreFiller(props.data))}</h3>
        </div>
    )
}

export default Score