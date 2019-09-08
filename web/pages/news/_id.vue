<template>
  <div class="py-6 news">
    <h1>{{article.title}}</h1>
    <div class="fs-sm pb-2">
      by
      <span>admin</span> /
      <span>{{article.date}}</span>
    </div>
    <div v-html="article.body"></div>
  </div>
</template>

<script>
import Banner from "../../components/Banner";
export default {
  asyncData({ params, $axios }) {
    return $axios.get(`/rest/articles/${params.id}`).then(res => {
      return { article: res.data };
    });
  },
  components: {
    Banner
  }
};
</script>

<style lang="scss" scoped>
.news {
  max-width: 700px;
  margin: 0 auto;
  h1 {
    font-size: 70px;
    line-height: 1.5em;
  }
}
</style>
