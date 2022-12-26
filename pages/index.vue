<template>
  <div class="wrapper">
    <div class="container" id="main-container">
      <header class="navBar" id="navbar">
        <newNavbar />
      </header>
      <div class="mobile-bar">
        <mobileNav />
      </div>
      <div class="heroSection">
        <heroSection />
      </div>
      <div class="propSection">
        <properties />
      </div>
      <div class="IngredientSection">
        <newIngredient />
      </div>
      <div class="footer">
        <Footer />
      </div>
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
    document.getElementById("navbar").style.top = "-5rem";
  }
  prevScrollpos = currentScrollPos;
};
import navBar from "~/components/navBar.vue";
export default {
  components: { navBar },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.container {
  align-items: center;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: "Athiti", sans-serif;
  overflow-x: hidden;

  .navBar {
    width: 100%;
    height: 5rem;
    z-index: 3;
    position: fixed;
    transition: top 0.3s;
    box-shadow: none;
  }
  .mobile-bar {
    visibility: hidden;
    z-index: 3;
  }

  .heroSection {
    display: flex;
    width: 100%;
    margin: 0px;
    padding: 0px;
    z-index: 1;
  }

  .propSection {
    width: 100%;
    height: 100vh;
    margin-bottom: 1.5rem;
  }

  .IngredientSection {
    display: flex;
    width: 90vw;
  }
}

@media only screen and (max-width: 1360px) {
  .container {
    .IngredientSection {
      width: 100vw;
      margin-top: 1.5rem;
    }
  }
}

@media only screen and (max-width: 992px) {
  .container {
    .propSection {
      width: 100vw;
      height: 90vh;
      margin-bottom: 3rem;
    }
  }
}

@media only screen and (max-width: 768px) {
  .container {
    .navBar {
      z-index: 10;
      visibility: hidden;
    }
    .mobile-bar {
      visibility: visible;
    }
    .propSection {
      height: max-content;
    }
  }
}
</style>
