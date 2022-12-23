<template>
  <div class="container">
    <div class="swiper mySwiper" ref="swiper">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="item in content"
          :key="item"
          data-swiper-autoplay="3500"
        >
          <div class="image">
            <img :src="item.image" />
          </div>
          <div class="text">
            <h2>{{ item.title }}</h2>
            <p>{{ item.textLogo }}</p>
            <div class="moreButton">
              <button>
                <a>ดูเพิ่มเติม</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: [
        {
          id: 1,
          image:
            "https://firebasestorage.googleapis.com/v0/b/miracle-oil.appspot.com/o/Heropicture1.png?alt=media&token=793e1754-d638-4251-8522-75b319a0366f",
          title: "น้ำมันเหลือง สูตรคุณทวด",
          textLogo: "สินค้า OTOP เมืองปากพนัง",
          link: "#",
        },
        {
          id: 2,
          image:
            "https://firebasestorage.googleapis.com/v0/b/miracle-oil.appspot.com/o/Heropicture2.png?alt=media&token=bcf1ece4-3d88-445d-9d30-56bde2921964",
          title: "น้ำมันเหลือง",
          textLogo: "มีสองขนาดให้เลือก",
        },
      ],
    };
  },
  async mounted() {
    await this.$nextTick();
    new Swiper(this.$refs.swiper, {
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 3000,
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;

  .swiper {
    display: flex;
    width: 100vw;
    height: 100vh;
    border: none;

    .swiper-button-next {
      margin-right: 1%;
      color: blue;
    }

    .swiper-slide {
      display: flex;
      text-align: center;
      font-size: 18px;
      background: #fff;
      flex-direction: column;
      position: relative;

      :global(.swiper-pagination-bullet-active) {
        background-color: white;
        width: 1rem;
        height: 0.5rem;
        border-radius: 0.5rem;
      }

      .image {
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .text {
        display: flex;
        position: absolute;
        flex-direction: column;
        top: 40%;
        left: 0%;
        width: 50%;
        height: 50%;

        h2 {
          color: white;
          font-weight: 600;
          font-size: 3rem;
          letter-spacing: 0.2rem;
        }

        p {
          color: white;
          font-weight: 600;
          font-size: 2rem;
        }

        .moreButton {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 15%;
          width: 100%;
          margin-top: 10%;

          button {
            width: 8rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: orange;
            border: none;
            padding: 1rem;
            border-radius: 10px;

            a {
              font-size: 1.2rem;
              color: white;
              font-weight: 600;
              width: max-content;
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .container {
    .swiper {
      .swiper-slide {
        .image {
          img {
            filter: grayscale(10%) blur(1.5px);
          }
        }
        .text {
          left: 0%;
          width: 100%;
          align-items: center;
          h2 {
            font-size: 2rem;
            width: max-content;
          }
        }
      }
    }
  }
}
</style>
