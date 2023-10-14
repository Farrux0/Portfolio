<template>

  <div class="portfolio">
    <img src="@/assets/images/homebg.jpeg" alt="" class="img imgp" />
    <h2 class="portfolio-title">
      здесь вы можете увидеть так же посетить мои проекты сделаные во время
      учебы. Нажмите на заголовку что бы посетить сайт
    </h2>
    <div class="portfolio__box">
      <div
        class="portfolio__box-item"
        v-for="items in store.portfolio"
        :key="items.id"
      > 
      <img src="@/assets/images/images.jpg" alt="" class="portfolio__box-item-img">
        <a :href="items.html_url" class="portfolio__box-item-link">{{ items.name }}</a>
        <p class="portfolio__box-item-text">{{ items.created_at }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { portfolioStore } from "../stores/portfolio.js";

let store = portfolioStore();
let info = store.getInfo();
console.log(info);
</script>

