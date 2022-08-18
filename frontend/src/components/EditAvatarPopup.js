import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__control">
        <input
          className="popup__input popup__input_type_title"
          type="url"
          name="avatar"
          placeholder="Ссылка на картинку"
          required=""
          ref={avatarRef}
        />
        <span className="popup__error" />
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
