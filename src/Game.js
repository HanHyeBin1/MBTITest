import React from 'react';
import { useSelector } from 'react-redux';
import Question from './Question';
import Result from './Result';

const Game = () => {
    const questionCount = useSelector(state => state.questionCount);

    return (
        <div style={{ textAlign: "center" }}>
            {questionCount === 70 ? (
                <Result />
            ) : (
                <>
                    <p>Tiến triển: {((questionCount / 70) * 100).toFixed(2)}%</p>
                    <Question />
                </>
            )}
        </div>
    );
};

export default Game;
