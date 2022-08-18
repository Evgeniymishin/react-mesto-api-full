import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const nameRef = React.useRef();
  const linkRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value,
    });

    nameRef.current.value = "";
    linkRef.current.value = "";
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonText="Добавить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__control">
        <input
          className="popup__input popup__input_type_title"
          type="text"
          name="title"
          placeholder="Название"
          required=""
          minLength={2}
          maxLength={30}
          ref={nameRef}
        />
        <span className="popup__error" />
      </label>
      <label className="popup__control">
        <input
          className="popup__input popup__input_type_text"
          type="url"
          name="text"
          placeholder="Ссылка на картинку"
          required=""
          ref={linkRef}
        />
        <span className="popup__error" />
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
