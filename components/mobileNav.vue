<template>
  <div class="container">
    <div class="header-navigation">
      <div class="logo">
        <h2>MIRACLE OIL</h2>
      </div>
      <div class="burger-bar" @click="onClick" :class="{ active: active }">
        <div class="item burger-1"></div>
        <div class="item burger-2"></div>
        <div class="item burger-3"></div>
      </div>
    </div>

    <div class="hidden-navbar" :class="{ active: active }">
      <div class="item-hidden home">
        <nuxt-link to="/">
          <p>หน้าหลัก</p>
        </nuxt-link>
      </div>
      <div class="item-hidden about">
        <nuxt-link to="/">
          <p>เกี่ยวกับเรา</p>
        </nuxt-link>
      </div>
      <div class="item-hidden product">
        <nuxt-link to="/">
          <p>สินค้าของเรา</p>
        </nuxt-link>
      </div>
      <div class="item-hidden shop">
        <div class="active-hidden" @click="hideLink()">
          <p>สั่งซื้อ</p>
          <i><font-awesome-icon :icon="['fas', 'angle-down']" /></i>
        </div>

        <div class="hidden-in-shop" :class="{ show: show }">
          <div class="item-link">Facebook</div>
          <div class="item-link">Shopee</div>
          <div class="item-link">Lazada</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      show: false,
    };
  },
  methods: {
    onClick() {
      this.active = !this.active;
      document.getElementsByTagName("body")[0].style.overflowY = this.active
        ? "hidden"
        : "scroll";
    },
    hideLink() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes open-dropdown {
  0% {
    transform: scaleY(0);
  }
  80% {
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(1);
  }
}
.container {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: max-content;
  align-items: center;
  overflow: hidden;

  .header-navigation {
    height: 3.5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 1px 5px rgb(65, 65, 65);
    background-color: rgb(243, 243, 243);
    position: fixed;
    top: 0;
    .logo {
      width: 100%;
      h2 {
        width: 100%;
        text-align: center;
        margin-left: 1rem;
        font-weight: 700;
      }
    }
    .burger-bar {
      display: flex;
      flex-direction: column;
      width: 2.5rem;
      position: relative;
      justify-content: flex-end;
      margin-right: 10px;
      &.active {
        .burger-1 {
          transform: translateY(10px) rotate(225deg);
          transition-duration: 0.3s;
        }
        .burger-2 {
          opacity: 0;
        }
        .burger-3 {
          transform: translateY(-10px) rotate(135deg);
          transition-duration: 0.3s;
        }
      }
      .item {
        transition-duration: 0.3s;
        background-color: rgba(43, 43, 43);
        border-radius: 5px;
        padding: 2px;
        margin: 3px;
      }
    }
  }
  .hidden-navbar {
    height: 0;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 3.5rem 0 0 0;
    visibility: hidden;
    opacity: 0;
    background-color: #24292e;
    transition-duration: 0.3s;
    width: 100%;
    pointer-events: all;
    transform: translateY(-100%);
    position: fixed;
    &.active {
      visibility: visible;
      height: 100%;
      opacity: 1;
      transition-duration: 0.3s;
      transform: translateY(0%);
    }
    .item-hidden {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      align-items: center;
      justify-content: center;
      width: 100%;
      p {
        padding: 0;
        margin: 0;
        font-weight: 550;
        font-size: 1.2rem;
        color: white;
        width: 100%;
        text-align: center;
      }
      i {
        color: white;
      }
      .active-hidden {
        padding: 1rem;
        border: 1px solid white;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        border-radius: 10px 10px 0 0;
        p {
          width: 30%;
        }
      }
      .hidden-in-shop {
        background-color: #3c444d;
        width: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        border-radius: 0 0 10px 10px;
        padding: 1rem 0 1rem 0;
        .item-link {
          padding: 0.8rem;
          color: white;
        }
        &.show {
          opacity: 0;
          visibility: hidden;
        }
      }
    }
  }
}
</style>
