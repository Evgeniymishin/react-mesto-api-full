import React from "react";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  cards,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const cardsElements = cards.map((card) => (
    <li key={card._id}>
      <Card
        card={card}
        onCardClick={onCardClick}
        onCardLike={onCardLike}
        onCardDelete={onCardDelete}
      />
    </li>
  ));

  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container" onClick={onEditAvatar}>
            <img
              className="profile__avatar"
              alt="Аватар автора"
              src={currentUser.avatar}
            />
          </div>
          <div className="profile-info">
            <h1 className="profile-info__title">{currentUser.name}</h1>
            <button
              className="profile-info__edit-button"
              type="button"
              onClick={onEditProfile}
            />
            <p className="profile-info__text">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        />
      </section>
      <section className="elements">{cardsElements}</section>
    </main>
  );
}

export default Main;
