<template>

<div class="container-fluid">
  <div class="row justify-content-center pt-4 pb-5 search-container">
    <div class="col-sm-12">
      <!-- <img class="home-logo" src="/images/ecn-tagline.png" alt=""> -->
      <h1 class="kb-title">Hi, how can we help you?</h1>
      <p class="kb-description">Enter a search term to find all related articles</p>
    </div>
    <div class="col-sm-12" id="search-home">
      <AlgoliaSearchBox
        v-if="isAlgoliaSearch"
        :options="algolia"
      />
      <SearchBox v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"/>
    </div>
  </div>
  <div class="row justify-content-center pt-2">
    <div class="col-sm-12">
      <h1 class="home-kb">Knowledge Base</h1>
    </div>
    <div class="col-sm-12 col-md-4 col-lg-2">
      <router-link to="/guides/internet-services/" class="guide-link">
        <div class="guide-item">
          <img src="/images/globe.png" alt="Internet" class="guide-icon">

          <h2 class="guide-title">Internet Services</h2>
          <p class="guide-text">Our Internet Services guides will step you through configuring your Internet connection on your modem.</p>
        </div>
      </router-link>
    </div>
    <div class="col-sm-12 col-md-4 col-lg-2">
      <router-link to="/guides/email-services/" class="guide-link">
        <div class="guide-item">
          <img src="/images/email.png" alt="Email" class="guide-icon">
          <h2 class="guide-title">Email Services</h2>
          <p class="guide-text">Our Email Services guides will step you through configuring your ECN email address on all devices.</p>
        </div>
      </router-link>
    </div>
    <div class="col-sm-12 col-md-4 col-lg-2">
      <a href="https://kb.mycloudpbx.com.au/" class="guide-link">
        <div class="guide-item">
          <img src="/images/mycloudpbx.png" alt="PBX" class="guide-icon">

          <h2 class="guide-title">myCloudPBX</h2>
          <p class="guide-text">Our myCloudPBX guides will assist you with configuring the myCloudPBX platform.</p>
        </div>
      </a>
    </div>
    <div class="col-sm-12 col-md-4 col-lg-2">
      <router-link to="/guides/inbound-1300/" class="guide-link">
        <div class="guide-item">
          <img src="/images/inbound-1300.png" alt="Inbound 1300" class="guide-icon">

          <h2 class="guide-title">Inbound 1300</h2>
          <p class="guide-text">Our Inbound 1300 guides will assist you with configuring your Inbound 1300 number.</p>
        </div>
      </router-link>
    </div>
    <div class="col-sm-12 col-md-4 col-lg-2">
      <router-link to="/guides/business-sip/" class="guide-link">
        <div class="guide-item">
          <img src="/images/business-sip.png" alt="Business SIP" class="guide-icon">
          <h2 class="guide-title">Business SIP</h2>
          <p class="guide-text">Our Business SIP guides will assist you with configuring your Business SIP service.</p>
        </div>
      </router-link>
    </div>
  </div>
</div>

</template>

<script>
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from '@SearchBox'

export default {
  components: { SearchBox, AlgoliaSearchBox },

  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },
    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  }
}
</script>

<style scoped>

.content__default {
  min-width: 100%!important;
  padding-top: 0!important;
  margin: 0 auto;
}

h1:hover, h2:hover, h3:hover, h4:hover, h5:hover, h6:hover{
  transform: none;
}

.home-logo{
  position: relative;
  margin: 60px auto;
  display: block;
  width: 300px;
}

.search-container{
  background-image: url('/images/main-bg.png');
  color: #fff;
  background-size: cover;
  background-position: left;
}

.kb-title,
.kb-description{
  text-align: center;
}

.kb-description{
  font-size: 22px;
}

.home-kb{
  text-align: center;
  color: #ccc;
  margin-bottom: 20px;
  font-weight: 300;
}

.guide-item{
  border: 1px solid #ccc;
  padding: 15px;
  transition: 0.3s;
}

.guide-link{
  text-decoration: none;
  color: #444;
  margin: 30px;
}

.guide-link:hover .guide-item{
  border: 1px solid #0395E5;
  transition: 0.3s;
}
.guide-link:hover .guide-icon{
  transition: 0.3s;
}

.guide-link:hover h2{
  border-bottom: 1px solid #0395E5;
  transition: 0.3s;
}

.guide-icon{
  width: 140px;
  position: relative;
  margin: 30px auto;
  display: block;
  transition: 0.3s;
}
.guide-title{
  margin: 15px 0;
  text-align: center;
}
.guide-text{
  text-align: center;
  font-weight: 400;
}

@media screen and (max-width: 767px) {
  .guide-item{
    height: auto;
    min-height: auto;
  }
}

@media screen and (min-width:768px) and (max-width: 990px) {
  .guide-item{
    min-height: 390px;
  }
}


@media screen and (min-width:991px) and (max-width: 1130px) {
  .guide-item{
    min-height: 470px;
  }
}

@media screen and (min-width:1131px) and (max-width:1359px) {
  .guide-item{
    min-height: 450px;
  }
}

@media screen and (min-width:1360px) and (max-width: 1585px) {
  .guide-item{
    min-height: 390px;
  }
}

@media screen and (min-width:1586px) {
  .guide-item{
    min-height: 360px;
  }
}

</style>
