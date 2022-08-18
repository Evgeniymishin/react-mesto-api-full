import React from "react";
import logo_ok from "../images/logo-ok.png";
import logo_err from "../images/logo-err.png";

export default function InfoTooltip({
  isOpen,
  onClose,
  register,
  toolTipText,
}) {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__info-container">
        <img
          className="popup__info-image"
          src={register ? logo_ok : logo_err}
          alt={register ? "Успех" : "Ошибка"}
        />
        <button
          className="popup__button-close"
          type="button"
          title="Закрыть"
          onClick={onClose}
        />
        <p className="popup__info-text">{toolTipText}</p>
      </div>
    </div>
  );
}
