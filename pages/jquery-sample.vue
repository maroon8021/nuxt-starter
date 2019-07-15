<template>
  <section class="container">
    <div class="inner">
      <logo />
      <h1 class="title">
        Please scroll to bottom↓↓↓
      </h1>
      <div class="scroll-top">
        <a href="#" class="button--blue">Go to top</a>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint no-undef: 0 */
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  },
  head() {
    return {
      script: [
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
        }
      ]
    }
  },
  mounted: () => {
    $('a[href^="#"]').click(function() {
      const speed = 400
      const href = $(this).attr('href')
      const target = $(href === '#' || href === '' ? 'html' : href)
      const position = target.offset().top
      $('body,html').animate({ scrollTop: position }, speed, 'swing')
      return false
    })
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
.inner {
  padding-top: 150px;
}
.scroll-top {
  padding-top: 800px;
  padding-bottom: 150px;
}
</style>