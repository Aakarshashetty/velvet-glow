import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ImageSlider = () => {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
  };
  const slideImages = [
    {
      url: "https://plumgoodness.com/cdn/shop/files/any_2_at_750_mithila_desktop_bee5f934-b265-4f79-b11f-672b25b6d035.webp?v=1689843808",
      caption: "Slide 1",
    },
    {
      url: "https://images.ctfassets.net/66mrrren2unf/4k3rC2wPiva95hkzgHDwZ5/b12e4d667bd7ecfef4c1eb7fc979bc4b/Artboard_1__10_.jpg?q=40",
      caption: "Slide 2",
    },
    {
      url: "https://res.cloudinary.com/dbiove79b/image/upload/v1689852914/velvet-glow/banner_shop_all_1_s0cgn6.jpg",
      caption: "Slide 3",
    },
    {
      url: "https://plumgoodness.com/cdn/shop/files/Skincare-banner.png?v=1687850993",
      caption: "Slide 4",
    },
  ];

  return (
    <div className="slide-container">
      <Slide indicators={true}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ImageSlider;
