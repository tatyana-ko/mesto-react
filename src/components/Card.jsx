import React from "react";

export default function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="element">
      <button className="element__delete" type="button"></button>
      <img src={card.link} alt={card.name} onClick={handleClick} className="element__image" />
      <div className="element__wrapper">
        <h2 className="element__description">{card.name}</h2>
        <div className="element__likes">
          <button className="element__button-like" type="button"></button>
          <span className="element__number-likes">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}
