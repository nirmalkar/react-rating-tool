import { useState } from "react";
import StarRating from "./lib/components/StarRating";

function App() {
    const [rating, setRating] = useState(0);
    return (
        <div className="App">
            Hello World!!
            <StarRating count={7} value={rating} setRating={setRating} />
        </div>
    );
}

export default App;
