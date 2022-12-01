import RestaurantSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">WELCOME TO RESTO CATALOGUE</h2>
        <div id="restos" class="restos"></div>
      </div>
    `;
  },

  async afterRender() {
    document.querySelector('#hero').style.display = '';
    const restoran = await RestaurantSource.restaurantList();
    const restaurantContainer = document.querySelector('#restos');
    restoran.forEach((resto) => {
      restaurantContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Detail;
