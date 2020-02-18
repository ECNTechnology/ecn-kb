<template>
  <footer id="custom-footer">
    <div class="container-fluid">
      <div class="row social-media-row">
        <div class="col">
          <div class="container">
            <div class="row">
              <div class="col">
                <a href="https://www.facebook.com/ecnptyltd" class="social-media-link" target="_blank">
                  <span><img class="social-media-icon" src="/images/facebook.png" alt="Facebook"></span>
                </a>
                <a href="https://www.linkedin.com/company/ecn-pty-ltd" class="social-media-link" target="_blank">
                  <span><img class="social-media-icon" src="/images/linkedin.png" alt="LinkedIn"></span>
                </a>
                <a href="https://twitter.com/ecn_technology" class="social-media-link" target="_blank">
                  <span><img class="social-media-icon" src="/images/twitter.png" alt="Twitter"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row footer-row">
        <div class="col">
          <div class="container">
            <div class="row">
              <div class="col">
                <h3 class="footer-title">Legal</h3>
                <a href="https://www.ecn.net.au/legal/" target="_blank" class="footer-link"><p class="footer-text">Legal</p></a>
                <a href="https://www.ecn.net.au/legal/critical-information/" target="_blank" class="footer-link"><p class="footer-text">Critical Information Summaries</p></a>
                <a href="https://www.ecn.net.au/legal/policies/" target="_blank" class="footer-link"><p class="footer-text">Policies</p></a>
                <a href="https://www.ecn.net.au/legal/services-contract/" target="_blank" class="footer-link"><p class="footer-text">Supply of Services Contract</p></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row copy-row">
        <div class="col">
          <div class="container">
            <div class="row">
              <div class="col">
                <p class="copy-text">© 1995 - {{ new Date().getFullYear() }} ECN Pty Ltd. | Version: 1.2.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>

<style scoped>

#custom-footer{
  margin-top: 60px;
}
h1:hover, h2:hover, h3:hover, h4:hover, h5:hover, h6:hover{
  transform: none;
}
.social-media-row{
  text-align: center;
  background-color: #424242;
  color: #fff;
  border-bottom: 1px solid hsla(0,0%,100%,.12);
}
.footer-row{
  background-color: #424242;
  color: #fff;
  padding-bottom: 20px;
  text-align: center;
}
.social-media-icon{
  width: 39px;
  height: 39px;
  padding: 5px;
  margin: 10px 15px;
  border-radius: 50%;
  transition: 0.4s;
}
.social-media-icon:hover{
  background-color: #595959;
  border-radius: 50%;
  transition: 0.4s;
}
.footer-title{
  line-height: 24px;
  font-size: 16px;
  color: #fff;
  margin: 25px 0 8px 0;
}
.footer-link{
  line-height: 21px;
  font-size: 14px;
  color: #00aedc;
  text-decoration: none;
  font-weight: 400;
}
.footer-text{
  margin: 0 15px;
  position: relative;
  display: inline;
}
.copy-row{
  text-align: center;
  background-color: #424242;
  color: #fff;
  border-top: 1px solid hsla(0,0%,100%,.12);
}
.copy-text{
  line-height: 21px;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  margin: 10px 0;
}
@media screen and (max-width:960px){
  .mobile-col-footer{
    width: 100%;
    flex: auto;
    text-align: center;
  }
}
</style>
