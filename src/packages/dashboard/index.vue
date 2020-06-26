<template>
  <demo-home :list="list" />
</template>

<script>
import list from '@/config'
export default {
  data() {
    return {
      list: list
    }
  }
}
</script>

<style>

</style>
