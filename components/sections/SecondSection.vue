<template>
  <div class="section">
    <h2 class="sub-heading">{{ title }}</h2>
    <div class="card-container">
      <div
        v-for="(card, key) in cards"
        :key="key"
        class="card">
        <div class="card-header">
          <img
            :src="card.img"
            height="40px">
          <p class="sub-heading">{{ card.name }}</p>
        </div>
        <div class="card-body">
          <ul>
            <li
              v-for="(bullet, key) in card.bullets"
              :key="key">
              {{ bullet }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextContent from '~/assets/content.json'

export default {
  name: 'SecondSection',
  data() {
    return  {
      title: TextContent.secondSection.title,
      cards: TextContent.secondSection.cards
    }
  }
}
</script>

<style>
.section h2.sub-heading { margin-bottom: 20px; }
.card-container {
  display: flex;
  justify-content: space-around;
}
.card {
  background-color: rgb(255, 255, 255, 0.05);
  border: none;
  padding: 10px 0px;
  max-width: 300px;
  margin: 0px 10px 20px 10px;
  transition: all .2s ease-in-out;
}
.card:hover {
  background-color: rgb(255, 255, 255, 1);
  transform: scale(1.05);
  color: black;
}
.card img { margin-bottom: 5px; }
.card-body { padding: 0px 20px; }
.card-body ul { text-align: center; }
.card-body ul li { margin-bottom: 10px; }

/* Responsive */
@media (max-width: 800px) {
  .card-container { flex-direction: column; }
  .card {
    width: 100%;
    max-width: none;
    margin-left: auto;
    margin-right: auto;
  }
  .card-header { padding: 10px; }
  .card-header img { height: 70px; }
  h2.sub-heading {
    font-size: 18px;
    margin-bottom: 10px;
  }
}
@media (max-width: 450px) {
  h2.sub-heading { font-size: 14px; }
}
</style>
