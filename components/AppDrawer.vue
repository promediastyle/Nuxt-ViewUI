<template>
  <div>
    <Button class="bg-blue-700 hover:bg-blue-500 border-0 text-white hover:text-white w-auto h-auto px-4 py-2 focus:ring-0" @click="value1 = true">Open</Button>
    <Drawer title="Basic Drawer" :closable="false" v-model="value1">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  </div>
</template>
<script>
  export default {
    data () {
      return {
          value1: false
      }
    }
  }
</script>