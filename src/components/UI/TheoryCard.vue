<template>
<div class="wrapper">
  <div class="topic" @click="openContent">
    {{topic}}
  </div>
  <div class="content" v-if="isClick">
    {{content}}
  </div>
</div>
</template>

<script>
export default {
  name: "TheoryCard",
  props: {
    topic: '',
    content: '',
  },
  data(){
    return{
      isClick: false
    }

  },
  methods:{
    openContent(){
      this.isClick ? this.isClick=false : this.isClick=true;
    }
  }
}
</script>

<style scoped lang="scss">
  .wrapper{
    padding: 0 30px 0 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .topic{
      height: 80px;
      background: #FFF6A6;
      border-radius: 50px;
      width: 100px;
    }
    .content{
      height: 80px;
      border: 5px solid #FED1C3;
      border-radius: 0 0 50px 50px;
      width: 100px;
    }
  }
</style>