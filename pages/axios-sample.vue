<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        This is axios-sample page
      </h1>
      <h2 class="subtitle">
        Contents are rendered by json from sample server
      </h2>
      <h3 class="sass-sample">sass-sample</h3>
      <div class="links">
        <nuxt-link to="/" class="button--green">
        Top Page
        </nuxt-link>
      </div>
      <div class="lists">
        <h3>This below comes from json data</h3>
        <ListRenderer :data="lists"/>
        <a class="button--grey" @click="onClick">Get More Data</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ListRenderer from '~/components/ListRenderer.vue'
import axios from 'axios'

export default {
  components: {
    Logo,
    ListRenderer
  },
  data() {
    return {
      lists: []
    }
  },
  asyncData ({params}) {
    return axios.get('http://localhost:7170/get')
    .then((res) => {
      console.log('got data correctly')
      return {lists : res.data}
    })
    .catch((err) => {
      console.log('Perhaps you did not build the server. Please try to run "npm run axios-demo"')
      console.error(err)
    })
  },
  methods: {
    onClick(){
      axios.get('http://localhost:7170/get-more')
    .then((res) => {
      console.log('got data correctly')
      this.lists = res.data
    })
    .catch((err) => {
      console.log('Perhaps you did not build the server. Please try to run "npm run axios-demo"')
      console.error(err)
    })
    }
  }
}
</script>

<style lang="scss">
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

.lists{
  padding-top: 20px;
  & h3{
    margin-bottom: 10px;
  }
  & a{
    margin-top: 10px;
  }
}

</style>
