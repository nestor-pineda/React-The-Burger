import "../scss/components/_image-gallery.scss";

const ImageGallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__left"></div>
      <div className="gallery__center">
        <div className="gallery__col">
          <img className="galleri-img galleri-img--first" src="images/gallery/gallery-1.jpg" alt="gallery" />
          <img className="galleri-img" src="images/gallery/gallery-2.jpg" alt="gallery" />
        </div>
        <div className="gallery__col">
          <img className="galleri-img galleri-img--first" src="images/gallery/gallery-3.jpg" alt="gallery" />
          <img className="galleri-img" src="images/gallery/gallery-4.jpg" alt="gallery" />
        </div>
        <div className="gallery__col">
          <img className="galleri-img galleri-img--first" src="images/gallery/gallery-5.jpg" alt="gallery" />
          <img className="galleri-img" src="images/gallery/gallery-6.jpg" alt="gallery" />
        </div>
      </div>
      <div className="gallery__right"></div>
    </div>
  );
};

export default ImageGallery;
