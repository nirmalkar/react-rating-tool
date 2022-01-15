import React, { useEffect } from "react";
import "./starRating.css";

const StarRating = (props) => {
    let { count, top, left, setRating, value, size, styles } = props;
    const starCount = count ? count : 5;
    const starContainerPadding = (size ? size * 35 : 600) / 50;

    const alignments = {
        top: `${top ? top : 0}px`,
        left: `${left ? left : 0}px`,
    };

    const getStars = (starCount, value, setRating, alignments, styles) => {
        const handleStarRating = (value) => {
            if (setRating) {
                setRating(value);
            }
        };

        return (
            <div
                className="stars-container"
                style={{ padding: `${starContainerPadding}px` }}
            >
                <div
                    className="rating"
                    style={{ fontSize: `${size}px`, ...alignments, ...styles }}
                >
                    {Array.from(Array(starCount).keys())
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
    return getStars(starCount, value, setRating, alignments, styles);
};

export default React.memo(StarRating);
