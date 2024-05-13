<template>
<div class="wrapper">
  <div class="topic" @click="openContent">
    <p>{{topic}}</p>
  </div>
  <div class="content" v-if="isClick" v-html="content">
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
      height: 50px;
      background: #FFF6A6;
      border-radius: 50px;
      min-width: 800px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 4px 32px;
      cursor: pointer;

        p{
          font-weight: 700;
          font-size: 30px;
        }
    }
    .content{
      border: 5px solid #FED1C3;
      border-radius: 0 0 30px 30px;
      display: flex;
      flex-direction: column;
      min-width: 800px;
      max-width: 100%;
      height: fit-content;
      padding: 32px 32px;
      justify-content: left;
      align-items: center;
      font-weight: 430;
      font-size: 25px;
      text-align: left;
      gap: 10px;
      margin: 0 0 16px 0;
    }
  }
</style>