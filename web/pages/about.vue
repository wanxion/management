<template>
  <div>
    <Banner class="banner-bg" title="ABOUT US"></Banner>

    <div class="container py-6 about">
      <div class="text-center">
        <span class="fs-sm text-light-primary">About this company</span>
        <h1 class="fs-xl">ALCOVE MANAGEMENT</h1>
      </div>
      <div class="text-center pt-4">
        <p
          class="text-text"
        >We are Silicon Valley based Venture Capital that focus on Emerging Market tech firms and Silicon Valley high-tech firms.</p>
        <p
          class="text-text"
        >As venture capitalists, we back some of the most talented entrepreneurs. We not only provide capital to scale their business operations, but also advise them on legal matters and new resources they wouldn’t have been able to access by themselves.</p>
      </div>
    </div>

    <div class="bg-light-grey py-5">
      <div class="container d-flex">
        <div>
          <img src="../assets/images/about_info.jpg" width="500px" height="500px" />
        </div>
        <div class="px-5 d-flex ai-center">
          <div>
            <span class="text-light-primary fs-sm text-bold">ALCOVE MANAGEMENT</span>
            <h2 class="fs-xl">ALCOVE MANAGEMENT</h2>
            <p class="text-text">
              Our mission is to
              <strong>be the preferred partner for world-class families by offering proprietary access to unique technology investment opportunities in the United States and Emerging Markets</strong>
            </p>
            <p class="text-text">
              <strong>We are unique in our entrepreneurial heritage, independent thought, and global network of world-class entrepreneurs, top-tier venture funds, and powerful angel investors.</strong>
            </p>
            <p class="text-text">
              <strong>We have a reputation of helping successful entrepreneurs with big visions which others were unwilling to back</strong>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="title">
      <span class="text-light-primary fs-sm">ABOUT US</span>
      <h1 class="fs-xl">WHY US ？</h1>
    </div>
    <div class="container d-flex text-center pt-4 pb-6">
      <div class="px-3 w-25">
        <img src="../assets/images/index/1.png" alt />
        <p
          class="text-text py-2"
        >We favor a differentiated and high-conviction approach, investing in world-class entrepreneurs building companies with significantly unnoticed talent</p>
      </div>
      <div class="px-3 w-25">
        <img src="../assets/images/index/2.png" alt />
        <p
          class="text-text py-2"
        >Our team of partners and advisors have built and worked with leading global venture funds and technology companies around the world (Class 5 Global, UBS, Samsung)</p>
      </div>
      <div class="px-3 w-25">
        <img src="../assets/images/index/3.png" alt />
        <p
          class="text-text py-2"
        >We have a proven track record of investments in the US and emerging markets that demonstrate enhanced growth and influence to source more future global deals</p>
      </div>
      <div class="px-3 w-25">
        <img src="../assets/images/index/4.png" alt />
        <p
          class="text-text py-2"
        >Our extensive network and close relationships with top tier venture funds and investors globally produces extraordinary deal flow</p>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
export default {
  components: {
    Banner
  }
};
</script>

<style lang="scss" scoped>
.banner-bg {
  background-image: url(../assets/images/banner2.jpg);
}
.about {
  max-width: 560px;
  margin: 0 auto;
  span {
    font-weight: bold;
    font-family: "Roboto";
  }
  h1 {
    font-family: "Roboto";
  }
}

</style>
