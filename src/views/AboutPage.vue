<template>
  


  <div class="about">
    <img src="@/assets/images/homebg.jpeg" alt="" class="img">
    <h1 class="about__title">Всё про меня</h1>
    <div class="box">

    
    <div class="about__right">
      <h2 class="about__left-text"> <span>Telegramm:</span>@Farrux808</h2>
      <p class="about__left-text"> <span>Эл.почта</span> frasulov813@gmail.com</p>
      <p class="about__left-text"> <span>номер телефона:</span> +998(90)175-87-89</p>
     
    </div>
    <div class="about__left">
      <h2 class="about__left-text"> <span>меня зовут:</span> Расулов Фаррух</h2>
      <p class="about__left-text"> <span>Возраст:</span> 14 лет</p>
      <p class="about__left-text"> <span>Обучался в учёбном центре:</span> Proweb</p>
      <p class="about__left-text"> <span>Профессия:</span> веб-программист</p>
    </div>
  </div>
    <div class="about__skills">
        <h2 class="about__skills-title">На что я способен</h2>
         <div class="about__skills-box">
          <div class="about__skills-box-bar" v-for="pers in percentage" :key="pers.name">
            <h4 class="about__skills-box-bar-text">{{ pers.name }}</h4>
            <div :class=" pers.class ">

              <p class="about__skills-bar-num">{{ pers.percent }}</p>
            </div>
          </div>
         </div>

    </div>
  </div>
</template>

<script setup>
      import {ref} from 'vue'

      const percentage = ref([
      {name: 'html + css', percent: '80%', class: 'per sixth'},
      {name: 'Js', percent: '60%' , class: 'per first'},
      {name: 'Vue', percent: '80%', class: 'per second'},
      {name: 'Vuex', percent: '80%', class: 'per third'},
      {name: 'scss', percent: '80%', class: 'per fourth'},
      {name: 'pinia', percent: '60%', class: 'per fifth'},
      
      ])
</script>

<style lang="scss" scoped>

</style>