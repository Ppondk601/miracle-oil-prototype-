<template>
  <div class="navigation-bar">
    <div class="logo">
      <h2>MIRACLE OIL</h2>
    </div>
    <div class="item-in-nuxt-link">
      <div class="item">
        <nuxt-link to="/">
          <p>หน้าหลัก</p>
        </nuxt-link>
      </div>
      <div class="item">
        <nuxt-link to="/about">
          <p>เกี่ยวกับเรา</p>
        </nuxt-link>
      </div>
      <div class="item">
        <nuxt-link to="/product">
          <p>สินค้าของเรา</p>
        </nuxt-link>
      </div>
      <div class="item">
        <nuxt-link to="/contact">
          <p>ติดต่อเรา</p>
        </nuxt-link>
      </div>
      <div class="dropdown" :class="{ active: active }">
        <button @click="toggleDropdown">
          <p>สั่งซื้อ</p>
          <i><font-awesome-icon :icon="['fas', 'caret-up']" /></i>
        </button>
        <div class="item-in-dropdown" id="hide">
          <div class="item" id="facebook">
            <a href="https://www.youtube.com/watch?v=-nJJEiGQghY">Facebook</a>
          </div>
          <div class="item" id="shopee">
            <a href="google.com">Shopee</a>
          </div>
          <div class="item" id="lazada">
            <a href="google.com">Lazada</a>
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
      active: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.active = !this.active;
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes dropdownY {
  0% {
    transform: scaleY(0);
  }

  70% {
    transform: scaleY(1.2);
  }

  85% {
    transform: scaleY(1.05);
  }

  100% {
    transform: scaleY(1);
  }
}

.navigation-bar {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 3.5rem;
  justify-content: center;
  align-items: center;
  background-color: rgb(243, 243, 243);
  box-shadow: 0px 1px 5px rgb(65, 65, 65);
  position: fixed;

  .logo {
    display: flex;
    height: 100%;
    width: min-content;
    justify-content: center;
    align-items: center;
    margin-right: 5%;

    h2 {
      font-weight: 700;
      width: max-content;
      color: black;
      padding: 0;
      margin: 0;
    }
  }

  .item-in-nuxt-link {
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin-left: 2%;

    .item {
      padding: 0;
      margin: 0;
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      margin: 0% 1.5% 0% 1.5%;

      p {
        width: max-content;
        margin: 0;
        padding: 0;
        font-size: 1.2rem;
        font-weight: 600;
        background-image: linear-gradient(
          to right,
          #ff9900,
          #f2970f 50%,
          #000 50%
        );
        background-size: 200% 100%;
        background-position: 100%;
        display: inline-block;
        position: relative;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 0.1s ease-in-out;
      }

      p:before {
        content: "";
        background: #ff9900;
        display: block;
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: 3px;
        transition: all 0.1s ease-in-out;
      }

      p:hover {
        background-position: 0;
        text-decoration: none;
        border-bottom: 2.5px solid #ff9900;
      }

      .nuxt-link-exact-active {
        p {
          border-bottom: 2.5px solid #ff9900;
          padding-bottom: 5px;
          text-decoration: none;
        }
      }
    }
  }

  .dropdown {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin-left: 3%;

    button {
      width: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0%;
      background-color: #233145;
      border: none;
      margin: 0;
      border-radius: 10px;
      padding: 0.5rem 0.7rem;

      p {
        margin: 0px 15px 0px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.1rem;
        font-weight: 600;
        color: white;
        width: max-content;
      }

      i {
        transform: rotate(0deg);
        transition-duration: 0.3s;
        color: white;
        display: flex;
        font-size: 1.1rem;
      }
    }

    &.active {
      i {
        transition-duration: 0.3s;
        transform: rotate(180deg);
      }

      .item-in-dropdown {
        opacity: 1;
        animation: dropdownY 400ms ease-in-out forwards;
        transform-origin: top center;
        visibility: visible;
      }
    }

    .item-in-dropdown {
      background-color: #141d28;
      padding-top: 1rem;
      padding-bottom: 1rem;
      width: 130%;
      height: max-content;
      display: flex;
      position: absolute;
      flex-direction: column;
      border-radius: 10px;
      top: 90%;
      z-index: -1;
      opacity: 0;
      visibility: hidden;
      justify-content: center;
      align-items: center;
      transition: all 0.2s ease-out;
      gap: 0.5rem;

      .item {
        width: 80%;
        display: flex;
        margin-top: 4px;
        padding: 0.5rem;
        border-radius: 10px;

        a {
          color: rgb(232, 232, 232);
          font-weight: 550;
          font-size: 1.1rem;
          padding: 0;
          margin: 0;
        }
      }

      #facebook:hover {
        background-color: #4267b2;
        cursor: pointer;

        a {
          color: white;
          text-shadow: 1px 1px 8px white;
        }
      }

      #shopee:hover {
        background-color: #ee4d2d;
        cursor: pointer;

        a {
          color: white;
          text-shadow: 1px 1px 8px white;
        }
      }

      #lazada:hover {
        background-color: #000083;
        cursor: pointer;

        a {
          color: white;
          text-shadow: 1px 1px 8px white;
        }
      }
    }
  }
}

@media only screen and (max-width: 992px) {
  .navigation-bar {
    justify-content: space-between;

    .logo {
      margin-left: 2rem;
    }

    .item-in-nuxt-link {
      margin-right: 2rem;
      width: 60%;
      justify-content: center;

      .item {
        margin: 0% 1rem 0% 1rem;
      }
    }
  }
}
</style>
