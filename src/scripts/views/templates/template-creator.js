import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (resto) => `
  <h2 class="resto__title">${resto.name}</h2>
  <img class="resto__poster" src="${
  CONFIG.BASE_IMAGE_URL + resto.pictureId
}" alt="${resto.name}" />
  <div class="resto__info">
    <h4>Nama Restoran: <span class="isi">${resto.name}</span></h4>
    <h4>Kota: <span class="isi">${resto.city}</span></h4>
    <h4>Alamat: <span class="isi">${resto.address}</span></h4>
    <h4>Rating: <span class="isi">${resto.rating} ⭐️</span></h4>
    <h4>Menu Makanan :</h4>
    <p>${resto.menus.foods.map((food) => food.name)}</p>
    <h4>Menu Minuman :</h4>
    <p>${resto.menus.drinks.map((drink) => drink.name)}</p>
  </div>
  <div class="resto__overview">
    <h3>Overview</h3>
    <p>${resto.description}</p>
  </div>
  <br>
  <hr>
  <div class="resto__review">
  <h2>COMMENT</h2>
  <p>${resto.customerReviews
    .map(
      (comment) => `
    <p class="name">${comment.name}</p>
    <p class="date">${comment.date}</p>
    <p class="comment">"${comment.review}"</p>
    <hr>
    `,
    )
    .join('<br>')}
  </p>
  </div>
`;

const createRestoItemTemplate = (restos) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__poster" alt="${restos.name}"
      src="${CONFIG.BASE_IMAGE_URL + restos.pictureId}">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${restos.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3 class="resto-item-content__name"><a href="/#/detail/${restos.id}" id="judulKonten">${
  restos.name
}</a></h3>
      <h4 class="resto-item-content__city">Kota: ${restos.city}</h4>
      <p class="resto-item-content__description">${restos.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this  , urant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
