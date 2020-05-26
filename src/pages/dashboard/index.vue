<template>
  <demo-home :list="list" />
</template>

<script>
import list from '@/config'
import DemoHome from '@/components/demo-home'
export default {
  components: {
    DemoHome
  },
  data() {
    return {
      list: list
    }
  }
}
</script>

<style>

</style>
