<template>
  <div>
    <Banner class="banner-bg" title="PORTFOLIO"></Banner>
    <div class="title">
      <span class="text-light-primary fs-sm">ABOUT US</span>
      <h1 class="fs-xl">PORTFOLIO</h1>
    </div>

    <div class="container pb-6 portfolio d-flex flex-wrap jc-around">
      <nuxt-link v-for="item in portfolios" :key='item._id' :to="`/portfolio/${item._id}`" tag="div">
        <img :src="`http://144.202.115.192:9881/${item.cover}`" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Banner from "../../components/Banner";
export default {
  asyncData({ $axios }) {
    return $axios.get("/rest/portfolios").then(res => {
      return { portfolios: res.data };
    });
  },
  components: {
    Banner
  }
};
</script>

<style lang="scss" scoped>
.banner-bg {
  background-image: url(../../assets/images/banner3.jpg);
}

.portfolio {
  div {
    width: 300px;
    padding-bottom: 20px;
    opacity: 0.7;
    cursor: pointer;
  }
  img {
    width: 100%;
  }
  div:hover {
    opacity: 1;
  }
}
</style>
