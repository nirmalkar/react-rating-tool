import { useState } from "react";
import StarRating from "./lib/components/StarRating";

function App() {
    const [rating, setRating] = useState(0);
    return (
        <div className="App">
            <StarRating
                count={3}
                value={rating}
                setRating={setRating}
                size={35}
            />
            <StarRating
                value={rating}
                setRating={setRating}
                size={35}
                top={60}
            />
        </div>
    );
}

export default App;
