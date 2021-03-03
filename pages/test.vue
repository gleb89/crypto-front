<template>
    <h2 class="mt-7" style="color:red" >hhh</h2>
</template>

 <script>
export default {
     mounted() {
    this.socket = this.$nuxtSocket({
      channel: '/test'
    })
    /* Listen for events: */
    this.socket
    .on('someEvent', (msg, cb) => {
      /* Handle event */
    })
  },
//   methods: {
//     method1() {
//       /* Emit events */
//       this.socket.emit('method1', {
//         hello: 'world'
//       }, (resp) => {
//         console.log(resp);

//       })
//     }
//   }
}
</script>