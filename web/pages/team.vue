<template>
  <div>
    <Banner class="banner-bg" title="TEAM"></Banner>

    <div class="container py-5">
      <div class="d-flex py-5">
        <img src="../assets/images/hong.png" alt="Kyle Hong" />
        <div class="team_body pl-4">
          <h3>Kyle Hong Co-Founder</h3>
          <p>Former Private Wealth Advisor at UBS ($250 million AUM team)</p>
          <p>Advisor to Zhèngdà Jítuán Family Offices based in Los Angeles</p>
          <p>Former SaaS Analyst at Guardian Analytics, a late-stage cyber analytics firm based in Silicon Valley</p>
          <p>Former Business Development lead at Samsung Electronics in Europe (KRX: 005930)</p>
        </div>
      </div>
      <div class="d-flex py-5">
        <img src="../assets/images/lau.png" alt="Jasper Lau" />
        <div class="team_body pl-4">
          <h3>Jasper Lau Co-Founder</h3>
          <p>Founding Team at Class 5 Global, a $125 million AUM venture fund in Silicon Valley</p>
          <p>Advisor to two leading Chinese and US Family Offices ($3 billion AUM)</p>
          <p>Former Investor at Lumia Capital ($100 million AUM)</p>
          <p>Former Researcher at UBS Chief Risk Office</p>
        </div>
      </div>
      <div class="d-flex py-5">
        <img src="../assets/images/she.jpg" alt="Kevin She" />
        <div class="team_body pl-4">
          <h3>Kevin She Investor Relations, China</h3>
          <p>Business Intelligence at Amazon (NASDAQ: AMZN)</p>
          <p>Active Trader of public equities &amp; crypto-currencies</p>
          <p>Former Product Specialist &amp; Business Analyst at SAP (NYSE: SAP)</p>
          <p>M.S of Information Systems at University of Washington</p>
          <p>Exchange program at UC Berkeley, B.A. Business from Ohio State University</p>
        </div>
      </div>
      <div class="d-flex py-5">
        <img src="../assets/images/liu.png" alt="Yifan Liu" />
        <div class="team_body pl-4">
          <h3>Yifan Liu Head of Investor Relations, China</h3>
          <p>Software Engineer at SAP (NYSE: SAP)</p>
          <p>Silicon Valley Next Talent Program at SAP</p>
          <p>Advisor to his family’s pharmaceutical chain with 20+ stores in Shandong, China</p>
          <p>B.Eng at University of Liverpool and M.Eng of Engineering at Cornell University</p>
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
  }
};
</script>

<style lang="scss" scoped>
.banner-bg {
  background-image: url(../assets/images/banner.jpg);
}
.team_body {
  p {
    padding-left: 15px;
  }
}
</style>
