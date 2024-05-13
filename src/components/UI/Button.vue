<template>
<button>
  <p>
    <slot>
    </slot>
  </p>
</button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    fontSize: '',
    backgButton: '',
  }
}
</script>

<style scoped lang="scss">
  button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px 40px;
    gap: 10px;
    background: v-bind(backgButton);
    border-radius: 20px;
    border: none;
    cursor: pointer;
    width: fit-content;
    margin: 0;

      p{
        font-weight: 700;
        font-size: v-bind(fontSize);
        margin: 0;
      }
  }
</style>