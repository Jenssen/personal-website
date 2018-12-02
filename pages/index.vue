<template>
  <div class="content">
    <FirstSection/>
    <SecondSection/>
  </div>
</template>

<script>
import FirstSection from '~/components/sections/FirstSection.vue'
import SecondSection from '~/components/sections/SecondSection.vue'

export default {
  components: {
    FirstSection,
    SecondSection
  }
}
</script>

<style>
div p {
  margin-bottom: 20px;
}
.content {
  font-family: 'Roboto', sans-serif;
  color: white;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 30vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 1024px;
}
.section {
  margin-bottom: 100px;
}
.big-heading {
  font-family: 'Montserrat', sans-serif;
  font-size: 48px;
  margin-bottom: 5px;
}
.sub-heading {
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  margin-bottom: 20px;
}
.button-container a {
  color: white;
  margin: 10px;
  transition: all .2s ease-in-out;
}
.button-container a:hover svg {
  transform: scale(1.2);
}

/* Responsive */
@media (max-width: 800px) {
  .content {
    margin-top: 5vh;
  }
  .section {
    margin-bottom: 50px;
  }
}
@media (max-width: 450px) {

}
</style>
