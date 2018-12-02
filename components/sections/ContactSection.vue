<template>
  <div class="section">
    <h2 class="sub-heading">{{ title }}</h2>
    <form
      v-if="!success"
      class="contact-container"
      @submit.prevent="checkForm">
      <div v-if="success">
        <p>Skickat!</p>
      </div>
      <div v-if="errors.length">
        <p>
          <b>Vänligen korrigera följande fel:</b>
          <ul>
            <li
              v-for="(error, key) in errors"
              :key="key">{{ error }}</li>
          </ul>
        </p>
      </div>
      <div class="field">
        <label>E-post</label>
        <input
          id="email"
          v-model="email"
          type="email"
          name="email"
          required>
      </div>
      <div class="field">
        <label>Meddelande</label>
        <textarea
          id="message"
          v-model="message"
          name="message"
          required/>
      </div>
      <button type="submit">Skicka</button>
    </form>
  </div>
</template>

<script>
import TextContent from '~/assets/content.json'

export default {
  name: 'ContactSection',
  data() {
    return  {
      title: TextContent.contactSection.title,
      errors: [],
      email: null,
      message: null,
      success: null
    }
  },
  methods: {
    checkForm: function () {
      this.success = true
      this.title = 'Tack för ditt mejl!'
      return true;
    }
  }
}
</script>

<style>
.contact-container {
  display: inline-flex;
  flex-direction: column;
}
.contact-container .field {
  display: inline-block;
  text-align: left;
  margin-bottom: 10px;
}
.contact-container input, .contact-container textarea, .contact-container button {
  font-family: Roboto;
  color: white;
  font-size: 16px;
  background-color: rgb(255, 255, 255, 0.05);
  border: none;
  padding: 5px;
  transition: all .2s ease-in-out;
}
.contact-container input, .contact-container textarea {
  min-width: 400px;
  max-width: 400px;
}
.contact-container label {
  display: block;
  margin-bottom: 5px;
}
.contact-container input:focus, .contact-container input:hover,
.contact-container textarea:focus, .contact-container textarea:hover,
.contact-container button:focus, .contact-container button:hover {
  background-color: rgb(255, 255, 255, 1);
  transform: scale(1.05);
  color: black;
}
.contact-container textarea {
  min-height: 100px;
}
.contact-container button {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 800px) {
  .contact-container { width: 100%; }
  .contact-container input, .contact-container textarea {
    width: -webkit-fill-available;
    min-width: unset;
    max-width: unset;
  }
}
@media (max-width: 450px) {

}
</style>
