<template>
  <div>
    <Banner class="banner-bg" title="NEWS"></Banner>
    <div class="container py-6">
      <div class="news py-3 d-flex" v-for="(item,index) in articles" :key="item._id">
        <div v-if="item.cover">
          <img :src="`http://144.202.115.192:9881/${item.cover}`" width="400" height="400" />
        </div>
        <div class="px-5 d-flex ai-center">
          <div>
            <h2 class="fs-xl">
              <nuxt-link :to="`/news/${item._id}`">{{item.title}}</nuxt-link>
            </h2>
            <div class="fs-sm pb-2">
              by
              <span>admin</span> /
              <span>{{item.date}}</span>
            </div>
            <p class="text-text">{{item.describe}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../../components/Banner";
export default {
  asyncData({ $axios }) {
    return $axios.get("/rest/articles").then(res => {
      return { articles: res.data };
    });
  },
  components: {
    Banner
  }
};
</script>

<style lang="scss" scoped>
.banner-bg {
  background-image: url(../../assets/images/banner4.jpg);
}
.news {
  border-bottom: 1px solid #ccc;
  h2 {
    font-family: "Raleway";
    color: black;
    margin: 0;
    font-weight: bold;
    padding: 15px 0;
    line-height: 1.5em;
    a:hover {
      text-decoration: underline;
    }
  }
}
</style>
