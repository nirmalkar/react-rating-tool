import { useState } from "react";
import StarRating from "./lib/components/StarRating";

function App() {
    const [rating, setRating] = useState(0);
    return (
        <div>
            <StarRating
                count={3}
                value={rating}
                setRating={setRating}
                size={75}
            />
            <StarRating value={rating} setRating={setRating} size={45} />
            <StarRating value={rating} setRating={setRating} size={25} />
            <StarRating value={rating} setRating={setRating} size={5} />
            <StarRating />
        </div>
    );
}

export default App;
