<template>
  <div class="wrapper">
  <my-button fontSize="20px" backgButton="#B7AEF2" @click="$router.go(-1)">Назад</my-button>
  <theory-card/>
  </div>
</template>

<script>
import TheoryCard from "../components/UI/TheoryCard.vue";
import MyButton from "../components/UI/Button.vue";

export default {
  name: "TheoryView",
  components: {TheoryCard, MyButton},
  mounted() {
    //запрос
  },
}
</script>

<style scoped>
  .wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 24px 0 0 0;
  }
</style>