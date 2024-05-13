<template>
  <section @click="$router.push('/account')">
    <img src="/src/assets/images/brain_logo.svg" alt="">
    <p>Mind Game / Игра разума</p>
  </section>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped lang="scss">
@import 'src/assets/main.scss';
  section{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px 25px;
    margin: 20px 0 0 0;
    gap: 10px;
    background-color: $primary-color;
    border-radius: 45px;
    font-weight: 700;
    font-size: 40px;
    cursor: pointer;
    width: 100%;
    p {
      margin: 0;
    }
  }
</style>