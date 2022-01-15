import React, { useEffect } from "react";
import "./starRating.css";

const StarRating = (props) => {
    let { count, top, left, setRating, value, size } = props;

    useEffect(() => {
        if (!count) {
            count = 5;
        }
    }, []);

    const alignments = {
        top: `${top ? top : 0}rem`,
        left: `${left ? left : 0}rem`,
    };

    const getStars = (count, alignments) => {
        const handleStarRating = (value) => {
            setRating(value);
        };

        return (
            <div className="stars-container">
                <div
                    className="rating"
                    style={{ fontSize: `${size}px`, ...alignments }}
                >
                    {Array.from(Array(count).keys())
                        .reverse()
                        .map((ele) => {
                            if (ele + 1 <= value) {
                                return (
                                    <span
                                        className="rated rotate-star"
                                        key={ele}
                                        onClick={() =>
                                            handleStarRating(ele + 1)
                                        }
                                    >
                                        ☆
                                    </span>
                                );
                            }
                            return (
                                <span
                                    className="rotate-star"
                                    key={ele}
                                    onClick={() => handleStarRating(ele + 1)}
                                >
                                    ☆
                                </span>
                            );
                        })}
                </div>
            </div>
        );
    };
    return getStars(count, value, setRating, alignments);
};

export default React.memo(StarRating);
