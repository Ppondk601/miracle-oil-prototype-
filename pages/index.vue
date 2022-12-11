<template>
  <div class="container">
    <header class="navBar" id="navbar">
      <navBar />
    </header>
    <div class="heroSection">
      <heroSection />
    </div>
    <div class="propSection">
      <properties />
    </div>
    <div class="IngredientSection">
      <ingredient />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-9vh";
  }
  prevScrollpos = currentScrollPos;
}
import navBar from '~/components/navBar.vue'
export default {
  components: { navBar },
  data() {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
  font-family: 'Athiti', sans-serif;

  .navBar {
    width: 100%;
    height: 100%;
    z-index: 3;
    position: fixed;
    transition: top 0.3s;
    box-shadow: none;
  }


  .heroSection {
    display: flex;
    width: 100%;
    margin: 0px;
    padding: 0px;
    z-index: 1;
  }

  .propSection {
    max-height: 100%;
    display: flex;
    width: 100%;
    height: 100vh;
    margin-bottom: 2%
  }

  .IngredientSection {
    display: flex;
    width: 100vw;
  }
}
</style>