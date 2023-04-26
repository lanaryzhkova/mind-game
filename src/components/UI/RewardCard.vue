<template>
  <div class="wrapper-card">
    <img :src=img alt="">
    <p>{{ caption }}</p>
  </div>
</template>

<script>
export default {
  name: "RewardCard",
  props: {
    caption: '',
    img: '',
  }
}
</script>

<style  lang="scss" scoped>
  .wrapper-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    gap: 10px;
    width: 100px;

    img{
      width: 100px;
      height: 100px;
      border-radius: 100px;
    }

    p{
      text-align: center;
    }

  }
</style>