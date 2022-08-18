function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_preview ${card.link && "popup_opened"}`}>
      <div className="popup__preview-container">
        <figure className="popup__preview-figure">
          <img src={card.link} alt={card.name} className="popup__preview-img" />
          <figcaption className="popup__preview-caption">
            {card.name}
          </figcaption>
        </figure>
        <button
          className="popup__button-close"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
