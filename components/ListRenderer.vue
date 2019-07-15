<template>
  <div>
    <div v-for="item in data" :key="item.id">{{item.content}}</div>
  </div>
  
</template>

<script>
export default {
  props: ['data']
}
</script>
