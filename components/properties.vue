<template>
  <div class="container">
    <div class="headerOfSection">
      <h2>น้ำมันเหลือง</h2>
      <h2>ช่วยอะไรคุณได้บ้าง?</h2>
    </div>
    <div class="content">
      <div class="boxOfItem" v-for="item in textLists" :key="item">
        <div class="image">
          <img :src="item.image" />
        </div>
        <div class="effect" :style="{ color: item.color }">
          <p>{{ item.effect }}</p>
        </div>
        <div class="descript">
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textLists: [
        {
          id: 1,
          effect: "บรรเทาอาการปวด",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ratione.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/miracle-oil.appspot.com/o/properties-picfix1.png?alt=media&token=62045924-7a42-4e60-a8e1-e74c88a00a94",
          color: "#5B9B50",
        },
        {
          id: 2,
          effect: "นวดบรรเทาอาการเมื่อย",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ratione.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/miracle-oil.appspot.com/o/properties-picfix2.png?alt=media&token=eecc218c-c069-4ebb-8f1d-7cea04d919a7",
          color: "#D7B43C",
        },
        {
          id: 3,
          effect: "บรรเทาอาการปวดศรีษะ",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ratione.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/miracle-oil.appspot.com/o/properties-picfix3.png?alt=media&token=45ecfab0-420f-4e18-afc3-58a046f520ab",
          color: "#FF9051",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 0;
  // overflow-y: hidden;

  .headerOfSection {
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
    justify-content: center;
    align-items: center;

    h2 {
      display: flex;
      font-weight: 700;
      font-size: 2.2rem;
      color: #2c2c2c;
    }
  }

  .content {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    align-items: center;
    justify-content: center;
    height: 100%;

    .boxOfItem {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .image {
        width: 90%;
        height: 80%;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .effect {
        display: flex;
        padding-top: 2%;
        font-size: 1.5rem;
        justify-content: center;
        margin-top: -2%;
        padding-bottom: 0%;
        letter-spacing: 1px;

        p {
          margin: 0;
          padding: 0;
          font-weight: 600;
          width: max-content;
        }
      }

      .descript {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;

        p {
          display: flex;
          text-align: center;
          margin: 0% 15% 0% 15%;
          font-size: 16px;
        }
      }
    }
  }
}

@media only screen and (max-width: 992px) {
  .container {
    .headerOfSection {
      display: flex;
      flex-direction: column;
      margin-top: 2.5rem;
      justify-content: center;
      align-items: center;
    }

    .content {
      width: 100%;
      display: grid;
      grid-template-columns: 33% 33% 33%;
      align-items: center;
      justify-content: center;

      .boxOfItem {
        width: 100%;
        height: 90%;

        .image {
          width: 100%;
          height: 90%;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .descript {
          p {
            width: max-content;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .container {
    height: 100%;

    .headerOfSection {
      h2 {
        font-size: 1.7rem;
      }
    }

    .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .boxOfItem {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 55vh;
        width: 100%;

        .image {
          width: 60%;
          height: 70%;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .descript {
          p {
            width: max-content;
          }
        }
      }
    }
  }
}
</style>
