<template>
  <div v-if="show" class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Loader',
        props: { show: Boolean }
    }
</script>