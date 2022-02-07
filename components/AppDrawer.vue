<template>
  <div class="flex items-center space-x-2">
    <Button @click="value1 = true" type="primary">Right</Button>
    <Drawer title="Basic Drawer" placement="right" :closable="false" v-model="value1">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Drawer>
    <Button @click="value2 = true" type="primary">Left</Button>
    <Drawer title="Basic Drawer" placement="left" :closable="false" v-model="value2">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Drawer>
    <Button @click="value7 = true" type="primary">Top</Button>
    <Drawer title="Basic Drawer" placement="top" :closable="false" v-model="value7">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Drawer>
    <Button @click="value8 = true" type="primary">Bottom</Button>
    <Drawer title="Basic Drawer" placement="bottom" :closable="false" v-model="value8">
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
        value1: false,
        value2: false,
        value7: false,
        value8: false
      }
    }
  }
</script>