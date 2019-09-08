<template>
  <div>
    <div class="banner">
      <div class="banner_overlay"></div>
      <div class="banner_overlay_box">
        <div class="index_banner_box text-center text-white">
          <h1>WELCOME TO ALCOVE MANAGEMENT</h1>
          <div>
            <span
              class="fs-lg"
            >We are Silicon Valley based Venture Capital that focus on Emerging Market tech firms and Silicon Valley high-tech firms.</span>
          </div>
          <!-- <nuxt-link to="/" class="fs-lg text-white">OUR PORTFOLIO</nuxt-link> -->
        </div>
      </div>
    </div>
    <!-- ALCOVE MANAGEMENT -->
    <div class="title">
      <span class="text-light-primary fs-sm">ABOUT US</span>
      <h1 class="fs-xl">ALCOVE MANAGEMENT</h1>
    </div>
    <div class="text-center pb-6 alcove">
      <p
        class="text-text"
      >We are unique in our entrepreneurial heritage, independent thought, and global network of world-class entrepreneurs, top-tier venture funds, and powerful angel investors.</p>
      <p
        class="text-text"
      >We have a reputation of helping successful entrepreneurs with big visions which others were unwilling to back.</p>
    </div>
    <!-- mission -->
    <div class="bg-light-grey py-5">
      <div class="container d-flex mission">
        <div>
          <img src="../assets/images/mission.jpg" width="500px" height="500px" />
        </div>
        <div class="px-5 mission_body d-flex ai-center">
          <div>
            <span class="text-light-primary fs-sm">ALCOVE MANAGEMENT</span>
            <h2 class="fs-xl">OUR MISSION</h2>
            <p
              class="text-text"
            >To be the preferred partner for world-class, global Chinese families by offering proprietary access to unique technology investment opportunities in the United States and Emerging Markets</p>
            <p
              class="text-text"
            >global Chinese families by offering proprietary access to unique technology investment opportunities</p>
            <nuxt-link to="/" class="fs-sm">VIEW MORE</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- why us -->
    <div class="title">
      <span class="text-light-primary fs-sm">ABOUT US</span>
      <h1 class="fs-xl">WHY US ？</h1>
    </div>
    <div class="container d-flex text-center pt-4 pb-6 whyus">
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
    <!-- overview -->
    <div class="bg-light-grey">
      <div class="pt-6 text-center pb-2">
        <h1 class="fs-xl">OUR STRATEGY: OVERVIEW</h1>
        <span
          class="text-light-primary fs-sm"
        >Invest in high-impact early and late stage global technology companies alongside top-tier venture & angel investors</span>
      </div>
      <div class="container tabs pt-5 pb-6">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="Markets" name="Markets">
            <div class="d-flex">
              <div class="w-50 px-3">
                <h4>Silicon Valley:</h4>
                <p
                  class="text-text"
                >World-class entrepreneurs with a proven history of building companies with successful exits</p>
              </div>
              <div class="w-50 px-3">
                <h4>Emerging Markets:</h4>
                <p
                  class="text-text"
                >Ex-Uber, Ex-McKinsey, and other top immigrant managers who return to their countries to build next-generation tech ventures</p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Industry Focus" name="Industry">
            <div class="d-flex">
              <div class="w-50 px-3">
                <h4>Silicon Valley:</h4>
                <p
                  class="text-text"
                >Cyber security; Artificial Intelligence; Enterprise Software; Entertainment & Media</p>
              </div>
              <div class="w-50 px-3">
                <h4>Emerging Markets:</h4>
                <p
                  class="text-text"
                >Financial Technology; Urban Transportation; E-commerce; Healthcare</p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Stage" name="Stage">
            <div class="d-flex">
              <div class="w-50 px-3">
                <h4>Silicon Valley: 60% of Fund</h4>
                <p
                  class="text-text"
                >Early Stage (75%) – Seed, Seed+, Series A Late Stage (25%) Pre-M&A and Pre-IPO</p>
              </div>
              <div class="w-50 px-3">
                <h4>Emerging Markets: 40% of Fund</h4>
                <p
                  class="text-text"
                >Early Stage (60%) – Seed, Seed+, Series A Late Stage (40%) Pre-M&A and Pre-IPO</p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="ndustry Focus" name="ndustry Focus">
            <div class="d-flex">
              <div class="w-50 px-3">
                <h4>Early Stage:</h4>
                <p class="text-text">
                  $250,000 - 500,000 with pre-money valuations of $10M or less
                  <br />
                  <br />
                </p>
              </div>
              <div class="w-50 px-3">
                <h4>Late Stage:</h4>
                <p class="text-text">$500,000 – 1M with pre-money valuations of $100M or more</p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Portfolio Construction" name="Portfolio Construction">
            <div class="d-flex">
              <div class="w-50 px-3">
                <h4>Silicon Valley:</h4>
                <p class="text-text">
                  5-7 deals / yr; doubling down on highest conviction deals
                  <br />
                  <br />
                </p>
              </div>
              <div class="w-50 px-3">
                <h4>Emerging Markets:</h4>
                <p class="text-text">3-5 deals / yr; doubling down on highest conviction deals</p>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <!-- <div class="bg-primary">
      <div class="container text-white py-5">
        <h3>Invest in high-impact early and late stage global technology companies alongside top-tier venture & angel investors</h3>
        <div class="d-flex overview my-4 p-2">
          <div class="box"></div>
          <div class="box-title d-flex ai-center">
            <h5>Markets</h5>
          </div>
          <div class="box-over"></div>
          <div class="w-50 px-2">
            <h3>Silicon Valley:</h3>
            <p>World-class entrepreneurs with a proven history of building companies with successful exits</p>
          </div>
          <div class="w-50 px-2">
            <h3>Emerging Markets:</h3>
            <p>Ex-Uber, Ex-McKinsey, and other top immigrant managers who return to their countries to build next-generation tech ventures</p>
          </div>
        </div>
        <div class="d-flex overview my-4 p-2">
          <div class="box"></div>
          <div class="box-title d-flex ai-center">
            <h5>
              Industry
              <br />Focus
            </h5>
          </div>
          <div class="box-over"></div>
          <div class="w-50 px-2">
            <h3>Silicon Valley:</h3>
            <p>Cyber security; Artificial Intelligence; Enterprise Software; Entertainment & Media</p>
          </div>
          <div class="w-50 px-2">
            <h3>Emerging Markets:</h3>
            <p>Financial Technology; Urban Transportation; E-commerce; Healthcare</p>
          </div>
        </div>
        <div class="d-flex overview my-4 p-2">
          <div class="box"></div>
          <div class="box-title d-flex ai-center">
            <h5>Stage</h5>
          </div>
          <div class="box-over"></div>
          <div class="w-50 px-2">
            <h3>Silicon Valley: 60% of Fund</h3>
            <p>Early Stage (75%) – Seed, Seed+, Series A Late Stage (25%) Pre-M&A and Pre-IPO</p>
          </div>
          <div class="w-50 px-2">
            <h3>Emerging Markets: 40% of Fund</h3>
            <p>Early Stage (60%) – Seed, Seed+, Series A Late Stage (40%) Pre-M&A and Pre-IPO</p>
          </div>
        </div>
        <div class="d-flex overview my-4 p-2">
          <div class="box"></div>
          <div class="box-title d-flex ai-center">
            <h5>
              Industry
              <br />Focus
            </h5>
          </div>
          <div class="box-over"></div>
          <div class="w-50 px-2">
            <h3>Early Stage:</h3>
            <p>
              $250,000 - 500,000 with pre-money valuations of $10M or less
              <br />
              <br />
            </p>
          </div>
          <div class="w-50 px-2">
            <h3>Late Stage:</h3>
            <p>$500,000 – 1M with pre-money valuations of $100M or more</p>
          </div>
        </div>
        <div class="d-flex overview my-4 p-2">
          <div class="box"></div>
          <div class="box-title d-flex ai-center">
            <h5>
              Portfolio
              <br />Construction
            </h5>
          </div>
          <div class="box-over"></div>
          <div class="w-50 px-2">
            <h3>Silicon Valley:</h3>
            <p>
              5-7 deals / yr; doubling down on highest conviction deals
              <br />
              <br />
            </p>
          </div>
          <div class="w-50 px-2">
            <h3>Emerging Markets:</h3>
            <p>3-5 deals / yr; doubling down on highest conviction deals</p>
          </div>
        </div>
      </div>
    </div>-->
    <!-- team -->
    <div class="title">
      <span class="text-light-primary fs-sm">ABOUT US</span>
      <h1 class="fs-xl">OUR TEAM</h1>
    </div>
    <div class="container pt-4 pb-6 d-flex jc-around text-center team">
      <div>
        <img src="../assets/images/lau.png" alt="Jasper Lau" height="250px" />
        <div>
          <h4 class="fs-lg text-light-primary">Jasper Lau</h4>
          <span class="fs-sm">Co-Founder</span>
          <div class="team-icon py-4">
            <nuxt-link to="/">
              <img src="./../assets/images/facebook.png" />
            </nuxt-link>
            <nuxt-link to="/">
              <img src="./../assets/images/twitter.png" />
            </nuxt-link>
            <nuxt-link to="/">
              <img src="./../assets/images/tel.png" />
            </nuxt-link>
          </div>
        </div>
      </div>
      <div>
        <img src="../assets/images/hong.png" alt="Kyle Hong" height="250px"/>
        <div>
          <h4 class="fs-lg text-light-primary">Kyle Hong</h4>
          <span class="fs-sm">Co-Founder</span>
          <div class="team-icon py-4">
            <nuxt-link to="/">
              <img src="./../assets/images/facebook.png" />
            </nuxt-link>
            <nuxt-link to="/">
              <img src="./../assets/images/twitter.png" />
            </nuxt-link>
            <nuxt-link to="/">
              <img src="./../assets/images/tel.png" />
            </nuxt-link>
          </div>
        </div>
      </div>
      <div>
        <img src="../assets/images/liu.png" alt="Yifan Liu" height="250px"/>
        <div>
          <h4 class="fs-lg text-light-primary">Yifan Liu</h4>
          <span class="fs-sm">Head of Investor Relations</span>
          <div class="team-icon py-4">
            <nuxt-link to="/">
              <img src="./../assets/images/facebook.png" />
            </nuxt-link>
            <nuxt-link to="/">
              <img src="./../assets/images/twitter.png" />
            </nuxt-link>
            <nuxt-link to="/">
              <img src="./../assets/images/tel.png" />
            </nuxt-link>
          </div>
        </div>
      </div>
      <div>
        <img src="../assets/images/she.jpg" alt="Kevin She" height="250px"/>
        <div>
          <h4 class="fs-lg text-light-primary">Kevin She</h4>
          <span class="fs-sm">Investor Relations</span>
          <div class="team-icon py-4">
            <nuxt-link to="/">
              <img src="./../assets/images/facebook.png" />
            </nuxt-link>
            <nuxt-link to="/">
              <img src="./../assets/images/twitter.png" />
            </nuxt-link>
            <nuxt-link to="/">
              <img src="./../assets/images/tel.png" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "Markets"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="scss" >
@import "../assets/css/variables";
.banner {
  background-color: map-get($colors, "black");
  background-image: url(../assets/images/index_banner.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  min-height: 600px;
  .banner_overlay {
    background-color: rgba(31, 32, 37, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.5;
    mix-blend-mode: multiply;
    hyphens: manual;
  }
  .banner_overlay_box {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    .index_banner_box {
      width: 600px;
      margin: 0 auto;
      padding: 100px 0;
      h1 {
        font-size: 70px;
        line-height: 1.2em;
        margin: 0 0 30px 0;
      }
      span {
        line-height: 1.5em;
      }
      a {
        display: inline-block;
        border: 1px solid #ccc;
        padding: 13px 130px;
        margin-top: 23px;
      }
      a:hover {
        background-color: #ccc;
        color: black;
      }
    }
  }
}

.alcove {
  width: 560px;
  margin: 0 auto;
  p {
    color: #555;
    font-family: "Roboto";
  }
}

.mission {
  font-family: "Roboto";
  span {
    font-weight: bold;
  }
  h2 {
    margin: 25px 0;
  }
  a {
    display: inline-block;
    padding: 13px 40px;
    background-color: map-get($colors, "light-primary");
    color: white;
    font-weight: bold;
    border: 2px solid map-get($colors, "light-primary");
    transition: all 0.2s ease-in-out;
  }
  a:hover {
    background-color: map-get($colors, "light-grey");
    color: map-get($colors, "light-primary");
    border: 2px solid map-get($colors, "light-primary");
  }
}

.overview {
  border: 2px solid map-get($colors, "light-primary");
  position: relative;
  .box {
    position: absolute;
    left: -45px;
    width: 0px;
    height: 0px;

    border-top: 65px solid rgba(0, 0, 0, 0);
    border-right: 0px solid rgba(0, 0, 0, 0);
    border-bottom: 65px solid rgba(0, 0, 0, 0);
    border-left: 125px solid map-get($colors, "light-primary");
  }
  .box-title {
    position: absolute;
    left: -37px;
    font-weight: bold;
    height: 130px;
    h5 {
      margin: 0;
      font-size: 17px;
    }
  }
  .box-over {
    width: 100px;
  }
}

.whyus {
  img {
    transition: all 0.2s ease-in-out;
  }
  img:hover {
    transform: rotate(30deg);
  }
}

.tabs {
  .el-tabs__item {
    font-size: 17px;
    font-weight: bold;
  }
  .el-tabs__item:hover {
    color: map-get($colors, "light-primary");
  }
  .is-active {
    color: map-get($colors, "light-primary");
  }
  .el-tabs__active-bar {
    background-color: map-get($colors, "primary");
  }
  h4 {
    color: #444;
  }
}

.team {
  font-family: "Roboto";
  h4 {
    margin: 20px 0;
  }
  span {
    font-weight: bold;
  }
  .team-icon img {
    width: 30px;
  }
}
</style>
