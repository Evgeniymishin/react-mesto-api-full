import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onSubmit, onUpdateUser }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    currentUser?.name && setName(currentUser.name);
    currentUser?.about && setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__control">
        <input
          className="popup__input popup__input_type_title"
          type="text"
          name="title"
          placeholder="Ваше имя"
          required=""
          minLength={2}
          maxLength={40}
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__error" />
      </label>
      <label className="popup__control">
        <input
          className="popup__input popup__input_type_text"
          type="text"
          name="text"
          placeholder="Род деятельности"
          required=""
          minLength={2}
          maxLength={200}
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className="popup__error" />
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
