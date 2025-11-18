import React, { useState } from "react";

function Gallery() {
  let [x, setX] = useState(0);
  let [img, setImg] = useState([
    "https://media.gettyimages.com/id/2203526196/photo/indias-captain-rohit-sharma-reacts-after-the-toss-before-the-start-of-the-icc-champions.jpg?s=612x612&w=0&k=20&c=YvKdllJ_gumpemtEgW60-NLo0QWXEKQZju_wf-pBZEk=",
    "https://media.gettyimages.com/id/2159844611/photo/bridgetown-barbados-virat-kohli-and-rohit-sharma-of-india-celebrates-with-the-icc-mens-t20.jpg?s=612x612&w=0&k=20&c=xQMQSHeQk7aVvJWj-Wsi9ScKNJ3NXIqaMHgeVVC5Mu8=",
    "https://media.gettyimages.com/id/1794537510/photo/mumbai-india-rohit-sharma-of-india-hits-out-during-the-icc-mens-cricket-world-cup-india-2023.jpg?s=612x612&w=0&k=20&c=jMmkmk6LczKZ6ysKWXOIfl92coBMytBUxFN4M0iErdg=",
    "https://media.gettyimages.com/id/2159047087/photo/gros-islet-saint-lucia-india-captain-rohit-sharma-hits-six-runs-during-the-icc-mens-t20.jpg?s=612x612&w=0&k=20&c=yAyJLybiKr-x7cFGWC0RLBtklgvERfIYleQRYCI87N4=",
  ]);
  function inc() {
    setX(x + 1);
  }
  function dec() {
    setX(x - 1);
  }
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Gallery</h1>
        <img src={img[x]} style={{ height: "200px", width: "350px" }} />
      </div>
      <div>
        <button
          onClick={() => {
            inc();
          }}
        >
          Inc
        </button>
        <button
          onClick={() => {
            dec();
          }}
        >
          Decc
        </button>
      </div>
    </>
  );
}

export default Gallery;
