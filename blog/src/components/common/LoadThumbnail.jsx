import React, { useEffect, useState } from "react";

const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
];

const LoadThumbnail = () => {
  const [chosenImage, setChosenImage] = useState("");

  const pickRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    setChosenImage(randomImage);
  };

  useEffect(() => {
    pickRandomImage();
  }, []);

  return (
    <>
      <div>
        {chosenImage && (
          <img
            src={require(`../../assets/img/${chosenImage}`)}
            alt=""
            className="thumbnail"
          />
        )}
      </div>
    </>
  );
};

export default LoadThumbnail;
