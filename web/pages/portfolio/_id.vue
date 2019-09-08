<template>
  <div>
    <!-- <div>{{$route.params.id}}</div> -->
    <Banner class="banner-bg" :title="portfolio.title"></Banner>
    <div class="container d-flex pt-6 pb-4">
      <div>
        <img :src="`http://144.202.115.192:9881/${portfolio.cover}`" />
      </div>
      <div class="pl-3" v-html="portfolio.body"></div>
    </div>
    <div class="container text-center btn mb-6">
      <nuxt-link to="/">VISIT WEBSITE</nuxt-link>
    </div>
  </div>
</template>

<script>
import Banner from "../../components/Banner";
export default {
  asyncData({ params, $axios }) {
    return $axios.get(`/rest/portfolios/${params.id}`).then(res => {
      return { portfolio: res.data };
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
.btn {
  a {
    margin-left: 300px;
    display: inline-block;
    border: 1px solid #ccc;
    padding: 3px 13px;
  }
  a:hover {
    border: 1px solid #666;
  }
}
</style>
