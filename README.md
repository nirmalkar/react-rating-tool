# React-Rating-Tool

![Rating Stars](http://g.recordit.co/JZKwYl3OEy.gif)

🎉 React-Rating-Tool allows helps you to add a rating component to your app with ease.

## Installation

```
$ npm install --save react-rating-tool
$ yarn add react-rating-tool
```

## Features

-   Easy to set up for real, you can make it work in less than 5sec!
-   Super easy to customize
-   Just pass the star count, value, and size. and it's ready to use.
-   Animation on hover.
-   Click on the star to rate.

## The gist

```jsx
import React from "react";

import { StarRating } from "react-rating-tool";

function App() {
    const [rating, setRating] = useState(0);

    return (
        <div>
            <StarRating
                count={3}
                value={rating}
                setRating={setRating}
                size={45}
            />
        </div>
    );
}
```

## Demo

[DEMO](https://clever-dubinsky-fcc527.netlify.app/)

## License

Licensed under MIT
