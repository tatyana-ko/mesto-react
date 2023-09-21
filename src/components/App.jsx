import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="body">
      <div className="page">
        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />

        <Footer />

        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="profile-name"
            type="text"
            name="name"
            className="popup__input popup__input_type_name"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="profile-name-error popup__span popup__form-error"></span>
          <input
            id="profile-about"
            type="text"
            name="about"
            className="popup__input popup__input_type_about"
            placeholder="Вид деятельности"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="profile-about-error popup__span popup__form-error"></span>
        </PopupWithForm>

        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name="add-card"
          title="Новое место"
          buttonText="Создать"
        >
          {" "}
          <input
            id="card-name"
            type="text"
            name="name"
            className="popup__input popup__input_type_add-card-name"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30"
          />
          <span className="card-name-error popup__span popup__form-error"></span>
          <input
            id="card-link"
            type="url"
            name="link"
            className="popup__input popup__input_type_add-card-link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="card-link-error popup__span popup__form-error"></span>
        </PopupWithForm>

        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          name="update-avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
        >
          <input
            id="avatar-link"
            type="url"
            name="avatar"
            className="popup__input popup__input_type_avatar-link"
            placeholder="Ссылка на аватар"
            required
          />
          <span className="avatar-link-error popup__span popup__form-error"></span>
        </PopupWithForm>

        <PopupWithForm
          onClose={closeAllPopups}
          name="delete-card"
          title="Вы уверены?"
          buttonText="Да"
        ></PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
