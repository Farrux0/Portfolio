<template>
   <nav class="nav">
<div class="container">
   <div class="nav__box">
      <router-link to="/" >
         <img src="@/assets/images/logo.png" alt="" class="logo">
      </router-link>
      <ul class="nav__box-list">
         <li v-for="page in pages" :key="page.name">
            <router-link :to="page.url" class="nav__box-list-link">
              {{ page.name }}
            </router-link>
         </li>
      </ul>
   </div>
</div>
   </nav>
</template>

<script setup>
import './Navbar.scss'
import { ref } from 'vue'


const pages = ref([
{name: 'Главная', url: '/'},
{name: 'Обо мне', url: '/about'},
{name: 'Проекты', url: '/portfolio'},

])
</script>
