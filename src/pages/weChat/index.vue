<template>
  <login></login>
</template>
<script>
export default {
  name: 'weChat',
  components: {
    login: () => import('./login')
  }
}
</script>
