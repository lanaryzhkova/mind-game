<template>
<div class="wrapper">
  <div class="cup">
    <img src="/src/assets/images/cup.svg" alt="">
  </div>
  <div  class="rewards">
    <reward-card caption="Caption" img="https://gas-kvas.com/uploads/posts/2023-02/1675495562_gas-kvas-com-p-luchshie-kartinki-dlya-fonovogo-risunka-ra-18.jpg"/>
  </div>

</div>
</template>

<script>

import RewardCard from "./UI/RewardCard.vue";

export default {
  name: "RewardList",
  components: {
    RewardCard
  }
}
</script>

<style scoped lang="scss">
  .wrapper{
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 50px;
    border: 5px solid #2BD999;
    border-radius: 30px;

      .cup{
        width: 103px;
        height: 103px;
      }

      .rewards{
        padding: 10px;
      }
  }
</style>