<template>
  <div>
    <Banner class="banner-bg" title="CONTACT US"></Banner>
    <div class="title">
      <span class="text-light-primary fs-sm">ALCOVE MANAGEMENT</span>
      <h1 class="fs-xl">OUR MISSION</h1>
    </div>
    <div class="pb-6 contact-title text-center text-text">
      <p>To be the preferred partner for world-class, global Chinese families by offering proprietary access to unique technology investment opportunities in the United States and Emerging Markets</p>
    </div>
    <div id="wMap"></div>
    <div class="py-6">
      <div class="container d-flex jc-around text-center contact">
        <div>
          <img src="../assets/images/lau.png" alt="Jasper Lau" />
          <div>
            <h3 class="fs-lg">Jasper Lau</h3>
          </div>
          <ul class="fs-sm">
            <li>+1 (614) 458-8722</li>
            <li>Jlau@alcovemanagement.com</li>
          </ul>
        </div>
        <div>
          <img src="../assets/images/hong.png" alt="Kyle Hong" />
          <div>
            <h3 class="fs-lg">Kyle Hong</h3>
          </div>
          <ul class="fs-sm">
            <li>+1 (202) 403-9050</li>
            <li>Khong@alcovemanagement.com</li>
          </ul>
        </div>
        <div>
          <img src="../assets/images/liu.png" alt="Yifan Liu" />
          <div>
            <h3 class="fs-lg">Yifan Liu</h3>
          </div>
          <ul class="fs-sm">
            <li>+1 (408) 963-8143</li>
            <li>Yliu@alcovemanagement.com</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
export default {
  components: {
    Banner
  },

  mounted() {
    this.loadmap();
  },
  methods: {
    loadmap() {
      const map = new window.AMap.Map("wMap", {
        mapStyle: "amap://styles/whitesmoke",
        center: [126.686189, 45.701324],
        zoom: 16
      });
      var marker = new AMap.Marker({
        position: [126.686189, 45.701324]
      });
      marker.setMap(map);
      map.add(marker);
      var info = new AMap.InfoWindow({
        content: "ALCOVE MANAGEMENT",
        offset: new AMap.Pixel(0, -29)
      });
      info.open(map, marker.getPosition());
    }
  }
};
</script>

<style lang="scss" scoped>
.banner-bg {
  background-image: url(../assets/images/banner1.jpg);
}
.contact-title {
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.6em;
}
.contact {
  font-family: "Roboto";
  h3 {
    margin: 10px 0;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      line-height: 2;
      font-weight: bold;
    }
  }
}
#wMap {
  width: 100%;
  height: 450px;
}
</style>
