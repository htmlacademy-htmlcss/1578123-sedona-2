/**
 * Функция скрытия лейбла внутри input при фокусе на поле ввода текста
 */
const toggleLabel = () => {
  const input = document.getElementById("subscribe-email"),
        label = document.querySelector("label[for='subscribe-email']");

  const hideLabel = () => label.classList.add("visually-hidden");
  const showLabel = () => label.classList.remove("visually-hidden");

  input.addEventListener("focusin", hideLabel);
  input.addEventListener("focusout", () => {
    if (input.value.length) return;

    showLabel();
  });
};

/**
 * Функция переключения модального окна
 */
const toggleModal = () => {
  const searchButton = document.querySelector(".search-button"),
        modal = document.querySelector(".modal-container");

  const modalCloseButton = modal.querySelector(".modal-close-button");

  if (!searchButton || !modal || !modalCloseButton) return;

  const openModal = ()  => {
    modal.classList.remove("modal-container-closed");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.add("modal-container-closed");
    document.body.style.overflow = "";
  };

  searchButton.addEventListener("click", openModal);
  modalCloseButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (evt) => {
    if (!evt.target.closest(".modal")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", ({ key }) => (key === "Escape") && closeModal());
};

/**
 * Функция инициализации логики приложения
 */
const init = () => {
  document.addEventListener("DOMContentLoaded", () => {
    toggleLabel();
    toggleModal();
  });
};

init();
