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
      <div v-if="error">
        <p class="error-message">
          {{ error }}
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
      <vue-recaptcha
        :sitekey="sitekey"
        theme="dark"
        class="recaptcha-container"
        @verify="onVerify"
        @expired="onExpired"/>
      <button type="submit">Skicka</button>
    </form>
  </div>
</template>

<script>
import TextContent from '~/assets/content.json'
import VueRecaptcha from 'vue-recaptcha'

export default {
  name: 'ContactSection',
  components: {
    VueRecaptcha
  },
  data() {
    return  {
      sitekey: '6LdqR34UAAAAAEWjckvJuJxEc6MpJiA24EHUNDhP',
      title: TextContent.contactSection.title,
      error: null,
      recaptcha: false,
      email: null,
      message: null,
      success: null
    }
  },
  methods: {
    checkForm: function () {
      if (this.recaptcha) {
        this.success = true
        this.title = 'Tack för ditt mejl!'
        return true;
      } else {
        this.error = 'Vänligen bekräfta att du inte är en bot'
      }
    },
    onVerify: function (response) {
      this.recaptcha = true
    },
    onExpired: function () {
      this.recaptcha = false
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

.error-message {
  color: #cc0000;
}

.recaptcha-container > div {
  width: auto !important;
  margin-bottom: 10px;
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
