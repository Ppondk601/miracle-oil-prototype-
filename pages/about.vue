<template>
  <div class="container">
    <header class="navBar" id="navbar">
      <newNavbar />
    </header>
    <div class="mobile-bar">
      <mobileNav />
    </div>
    <div class="section-header">
      <p>เกี่ยวกับเรา</p>
    </div>
    <div class="history section-1">
      <div class="image">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/miracle-oil.appspot.com/o/history-pic1.png?alt=media&token=9ff7c4f5-4940-4d0d-8344-c297561c9bb4"
        />
      </div>
      <div class="paragraph section-1">
        <div class="main">
          <h1>"ความเป็นมาของน้ำมันเหลือง"</h1>
        </div>
        <div class="descript">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            architecto! Minus exercitationem reprehenderit atque asperiores
            provident, rerum accusantium expedita esse aperiam laborum
            repellendus dolores! Deleniti nesciunt id assumenda quae asperiores,
            ab soluta, fugit consectetur doloribus ex, animi dolor dolorem quo
            obcaecati eos. Voluptatum asperiores, ex minus aut cupiditate
            perspiciatis temporibus provident obcaecati repudiandae nemo
            suscipit sit recusandae magnam quidem ea at culpa aliquid! Magni qui
            nulla aspernatur, ullam eaque eveniet quam molestias explicabo
            voluptates vero distinctio dicta illo sequi et architecto delectus
            error soluta. Nihil sequi enim quam magni nam doloribus, voluptatem
            amet distinctio consequatur quaerat explicabo! Suscipit, dignissimos
            corporis.
          </p>
        </div>
      </div>
    </div>
    <div class="history section-2">
      <div class="image">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/miracle-oil.appspot.com/o/history-pic2.png?alt=media&token=602e0d2b-4048-4b04-ba1b-a23cdc32d71d"
        />
      </div>
      <div class="paragraph section-2">
        <div class="main">
          <h1>"สิ่งที่เราอยากให้"</h1>
        </div>
        <div class="descript">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            tempore numquam itaque a recusandae! Officia corrupti aliquam rem,
            et quidem neque voluptate modi odio quas veritatis excepturi,
            voluptatibus, ullam maiores! Soluta, ducimus nisi. Eveniet excepturi
            suscipit asperiores, modi dicta, incidunt, dolores nobis atque
            obcaecati quis tempora delectus quasi enim et similique molestias
            perferendis? Laboriosam, aspernatur dicta accusamus commodi quam
            culpa, laudantium explicabo quae magnam facilis tenetur consequatur
            alias magni delectus.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  height: max-content;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100vw;
  font-family: "Athiti", sans-serif;
  //   .section-header {
  //     display: flex;
  //     height: 10vh;
  //     width: 100vw;
  //     margin: 6rem 0 4rem 0;
  //     justify-content: center;
  //     align-items: center;
  //     p {
  //       font-weight: 600;
  //       font-size: 2.5rem;
  //     }
  //   }
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
    width: 100%;
  }

  .history {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;

    .image {
      display: flex;
      width: 50vw;
      height: 100%;
      justify-self: center;
      align-items: center;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .paragraph {
      display: flex;
      width: 50vw;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      .main {
        width: 50%;
        justify-content: center;
        align-items: center;
        display: flex;
        h1 {
          font-weight: 600;
          font-size: 2rem;
          width: max-content;
        }
      }
      .descript {
        display: flex;
        width: 50%;
        p {
          font-size: 1.1rem;
          height: max-content;
          width: max-content;
        }
      }
    }
    &.section-2 {
      display: flex;
      flex-direction: row-reverse;
    }
  }
}
@media only screen and (max-width: 992px) {
  .container {
    .history {
      .paragraph {
        .main {
          width: 70%;
          h1 {
            font-size: 1.5rem;
          }
        }
        .descript {
          width: 70%;
          p {
            font-size: 1rem;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .container {
    overflow-x: hidden;
    .navBar {
      z-index: 10;
      visibility: hidden;
    }
    .mobile-bar {
      visibility: visible;
    }
  }
}
</style>
