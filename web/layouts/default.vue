<template>
  <div>
    <header>
      <div class="container d-flex py-2 nav">
        <div class="w-50">ALCOVE MANAGEMENT</div>
        <div class="flex-1 d-flex jc-between menu">
          <div v-for="(item,index) in categories" :key="index">
            <nuxt-link :to="item.path" :class="{active:routePath===item.path}">
              <strong>{{item.name}}</strong>
            </nuxt-link>
          </div>
        </div>
      </div>
    </header>
    <nuxt />
    <footer class="bg-black">
      <div class="text-grey text-center fs-sm py-1">Copyright © alcovemanagementllc.com</div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { path: "/", name: "HOME" },
        { path: "/ABOUT", name: "ABOUT" },
        { path: "/TEAM", name: "TEAM" },
        { path: "/PORTFOLIO", name: "PORTFOLIO" },
        { path: "/NEWS", name: "NEWS" },
        { path: "/CONTACT", name: "CONTACT" }
      ],
      routePath: ""
    };
  },
  watch: {
    $route() {
      this.routePath = this.$route.path;
    }
  },
  mounted() {
    this.routePath = this.$route.path;
  },
  methods: {}
};
</script>

<style lang="scss">
@import "../assets/css/variables";
header {
  border-bottom: 1px solid map-get($colors, "grey");
  .nav {
    div {
      height: 60px;
      line-height: 60px;
    }
    .menu {
      div {
        position: relative;
      }
      div::after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: 1px;
        background: map-get($colors, "light-primary");
        transition: all 0.3s ease-in-out;
        transform: scale(0, 1);
      }
      div:hover::after {
        transform: scale(1, 1);
      }
      a {
        width: 100%;
        text-align: center;
      }
      div:hover a {
        color: map-get($colors, "light-primary");
      }
      .active {
        color: map-get($colors, "light-primary");
      }
    }
  }
}
footer {
  .contact {
    p {
      margin: 5px 0;
    }
  }
}
</style>
