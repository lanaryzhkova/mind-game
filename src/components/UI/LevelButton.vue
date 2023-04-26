<template>
    <button @click="$router.push(`/level/${this.level}`)" :disabled="this.isDisabled">
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: "LevelButton",
  props:{
    backgLButton: '',
    borderStyle: '',
    level: 0,
    isDisabled: true
  }
}
</script>

<style scoped lang="scss">
  button{
    width: 120px;
    height: 120px;
    border-radius: 100px;
    align-items: center;
    background-color: v-bind(backgLButton);
    border: v-bind(borderStyle);
    font-weight: 700;
    font-size: 50px;
    cursor: pointer;
  }
</style>