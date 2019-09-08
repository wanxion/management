<template>
  <div class="banner">
    <div class="banner_overlay"></div>
    <div class="banner_overlay_box">
      <div class="banner_box text-center text-white">
        <h1>{{title}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: ""
  }
};
</script>

<style lang="scss" scoped>
.banner {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  min-height: 400px;
  .banner_overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.5;
    background-color: rgba(31, 32, 37, .5);
  }
  .banner_overlay_box {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    .banner_box {
      width: 560px;
      margin: 0 auto;
      h1 {
        font-size: 70px;
        line-height: 400px;
        margin: 0;
      }
    }
  }
}
</style>
