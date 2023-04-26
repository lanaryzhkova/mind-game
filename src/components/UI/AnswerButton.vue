<template>
  <button :disabled="this.isDisabled">
    <img src="/src/assets/images/arrow-right.svg" alt="">
  </button>
</template>

<script>
export default {
  name: "AnswerButton",
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
  width: 100px;
  height: 100px;
  border-radius: 100px;
  align-items: center;
  cursor: pointer;
  border: none;
  background: #2BD999;
}
</style>