import React from 'react';
import './Score.css'

const Score = (props) => {

    const score = (data) => {
        if (Math.max.apply(null, Object.values({ ...data })) < 2) {
            return Object.values(props.data).reduce((acc, curr) => acc + curr, 0)
        } else {
            return 0;
        }
    }

    console.log(props.data)


    return (
        <div className="score components">
            <h3>SCORE: {score(props.data)} BEST SCORE:20</h3>
        </div>
    )
}

export default Score