<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-starter
      </h1>
      <h2 class="subtitle">
        Base project of nuxt application
      </h2>
      <h3 class="sass-sample">sass-sample</h3>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
        <nuxt-link to="/about" class="button--blue">
        About
        </nuxt-link>
        <nuxt-link to="/jquery-sample" class="button--blue">
        jquery-sample
        </nuxt-link>
        <nuxt-link to="/axios-sample" class="button--blue">
        axios-sample
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
@import '~/assets/scss/sample-pages.scss';

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}


.button--blue {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3273dc;
  color: #3273dc;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--blue:hover {
  color: #fff;
  background-color: #3273dc;
}


</style>
