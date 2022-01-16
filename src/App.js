import { useState } from "react";
import StarRating from "./lib/components/StarRating";

function App() {
    const [rating, setRating] = useState(0);
    const [ratingTwo, setRatingTwo] = useState(0);
    const [ratingThree, setRatingThree] = useState(0);
    const [ratingFour, setRatingFour] = useState(0);
    return (
        <div>
            <StarRating
                count={3}
                value={rating}
                setRating={setRating}
                size={45}
            />
            <StarRating value={ratingTwo} setRating={setRatingTwo} size={45} />
            <StarRating
                value={ratingThree}
                count={7}
                setRating={setRatingThree}
                size={25}
            />
            <StarRating
                value={ratingFour}
                setRating={setRatingFour}
                size={10}
            />
            <div>
                <StarRating />
            </div>
        </div>
    );
}

export default App;
