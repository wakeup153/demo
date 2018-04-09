<template>
  <hello-world></hello-world>
</template>

<script>
export default {
  name: 'Home',
  components: {
    HelloWorld: () => import('@/components/HelloWorld')
  }
}
</script>
