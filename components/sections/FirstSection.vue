<template>
  <div class="section">
    <h1 class="big-heading">{{ title }}</h1>
    <p class="sub-heading">{{ subTitle }}</p>
    <p class="text in-grid">{{ startText }}</p>
    <p class="text in-grid">{{ endText }}</p>
    <p class="sub-heading-small">{{ buttonsText }}</p>
    <div class="button-container">
      <template v-for="(button, key) in buttons">
        <a
          :href="button.link"
          :key="key"
          target="_blank">
          <font-awesome-icon :icon="button.icon"/>
        </a>
      </template>
    </div>
  </div>
</template>

<script>
import TextContent from '~/assets/content.json'
export default {
  name: 'FirstSection',
  data() {
    return  {
      title: TextContent.firstSection.title,
      subTitle: TextContent.firstSection.subTitle,
      startText: TextContent.firstSection.startText,
      endText: TextContent.firstSection.endText,
      buttonsText: TextContent.firstSection.buttonsText,
      buttons: TextContent.firstSection.buttons
    }
  }
}
</script>

<style>
.section {
  margin-bottom: 50px;
}
.big-heading {
  font-family: 'Montserrat', sans-serif;
  font-size: 48px;
  margin-bottom: 5px;
}
.sub-heading {
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
}
.sub-heading-small {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
}
.text {
  font-size: 16px;
  line-height: 20px;
}
.text.in-grid {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.button-container a {
  color: white;
  margin: 10px;
  transition: all .2s ease-in-out;
}
.button-container a:hover svg {
  transform: scale(1.2);
}
.button-container a svg { font-size: 2.5em; }

/* Responsive */
@media (max-width: 800px) {
  .section {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
}
@media (max-width: 450px) {
  .section {
    width: 90%;
  }
  h1.big-heading {
    font-size: 34px;
  }
  p.sub-heading {
    font-size: 18px;
  }
}
</style>
