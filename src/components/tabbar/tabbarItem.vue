<template>
  <div class="tabbar-item" @click="clickItem">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeText">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    path: String,
    activeclass: {
      type: String,
      default: 'blue'
    }
  },
  data () {
    return {
    }
  },
  methods: {
    clickItem () {
      this.$router.push(this.path)
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeText () {
      return this.isActive ? {color: this.activeclass} : {}
    }
  }
}
</script>
<style scoped>
  .tabbar-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .tabbar-item img {
    width: 24px;
    height: 24px;
    margin: 3px 0 0 2px;
  }
</style>
