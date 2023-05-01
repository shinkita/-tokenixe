import React, { useState } from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import config from "@config/config";

const CustomLeftArrow = ({ onClick }) => (
  <button className="image-gallery-icon image-gallery-left-nav" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
      <path fill="currentColor" d="M10 12l6-6v12z" />
    </svg>
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button className="image-gallery-icon image-gallery-right-nav" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
      <path fill="currentColor" d="M14 12l-6-6v12z" />
    </svg>
  </button>
);

const ProductGallery = ({ images }) => {
  const galleryImages = config.images.map((image) => ({
    original: image.src,
    thumbnail: image.src,
   }));

  return (
    <ReactImageGallery
      items={galleryImages}
      renderLeftNav={(onClick, disabled) =>
        <CustomLeftArrow onClick={onClick} disabled={disabled} />
      }
      renderRightNav={(onClick, disabled) =>
        <CustomRightArrow onClick={onClick} disabled={disabled} />
      }
    />
  );
};

export default ProductGallery;
