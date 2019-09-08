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
      <!-- <div class="bg-light-black text-grey">
        <div class="container d-flex py-3">
          <div class="w-50 contact">
            <strong>Jasper Lau</strong>
            <p>+1 (614) 458-8722</p>
            <p>Jlau@alcovemanagement.com</p>
            <br />
            <strong>Jasper Lau</strong>
            <p>+1 (614) 458-8722</p>
            <p>Jlau@alcovemanagement.com</p>
            <br />
            <strong>Jasper Lau</strong>
            <p>+1 (614) 458-8722</p>
            <p>Jlau@alcovemanagement.com</p>
          </div>
          <div class="w-50">
            <strong>ALCOVE MANAGEMENT</strong>
            <p>Our mission is to be the preferred partner for world-class families by offering proprietary access to unique technology investment opportunities in the United States and Emerging Markets</p>
            <p>We are unique in our entrepreneurial heritage, independent thought, and global network of world-class entrepreneurs, top-tier venture funds, and powerful angel investors.</p>
            <p>We have a reputation of helping successful entrepreneurs with big visions which others were unwilling to back</p>
          </div>
        </div>
      </div>-->
      <div class="text-grey text-center fs-sm py-1">© 2019 aeccd.com 版权所有</div>
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
