<template>
  <div>
    <Button class="bg-blue-700 hover:bg-blue-500 border-0 text-white hover:text-white w-auto h-auto px-4 py-2 focus:ring-0" @click="modal1 = true">
      Display dialog box
    </Button>
    <Modal
        v-model="modal1"
        :closable="true"
        :cancel-text="'Закрыть'"
        :footer-hide="true"
        :styles="{/*background: '#fd5f44', padding: '30px'*/}"
        title="Common Modal dialog box title"
        class-name="vertical-center-modal">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        modal1: false
      }
    },
  }
</script>

<style>
  .vertical-center-modal{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ivu-modal{
    top: 0;
  }
  .ivu-btn-text {
    @apply focus:ring-0;
  }
  .ivu-btn-primary {
    @apply bg-blue-700 hover:bg-blue-500 border-0 text-white hover:text-white focus:ring-0;
  }
</style>