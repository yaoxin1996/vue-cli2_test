<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>
<script>

export default {
}
</script>
<style scoped>
  #tab-bar {
    height: 49px;
    display: flex;
    background: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 2px rgba(0, 0, 0, .1);
  }
</style>
