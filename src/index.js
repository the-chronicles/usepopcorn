import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';

// import StartRating from "./StarRating";
import TextExpander from "./TextExpander";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StartRating
//         color="blue"
//         maxRating={10}
//         onSetMovieRating={setMovieRating}
//       />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StartRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StartRating size={24} color="red" className="test" defaultRating={3} />

    <Test /> */}

    <TextExpander />
  </React.StrictMode>
);
