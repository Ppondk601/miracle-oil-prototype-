<template>
    <div class="container">
        <header class="header">
            <newNavbar />
        </header>
        <div class="history">
            <div class="image">

                <img id="image1"
                    src="https://firebasestorage.googleapis.com/v0/b/miracle-oil.appspot.com/o/history-pic1.png?alt=media&token=9ff7c4f5-4940-4d0d-8344-c297561c9bb4" />
                <img id="image2"
                    src="https://firebasestorage.googleapis.com/v0/b/miracle-oil.appspot.com/o/history-pic2.png?alt=media&token=602e0d2b-4048-4b04-ba1b-a23cdc32d71d" />
            </div>
            <div class="paragraph">
                <div class="main">
                    <h1>"ความเป็นมาของน้ำมันเหลือง"</h1>
                </div>
                <div class="descript">
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempora id fugit aliquid sequi
                        nostrum molestias in commodi, quisquam enim quod velit quia provident eum perferendis est rem
                        laudantium minima atque voluptas possimus nisi culpa. Ducimus, error molestias veritatis optio
                        iste quas id impedit non fugiat laborum magni dicta illum ipsum, eligendi aut aliquid deleniti
                        quam omnis voluptatem architecto. Aut illum quaerat, nisi est tempore eligendi amet molestiae
                        eum deserunt alias obcaecati ipsam ullam accusantium sunt numquam voluptatibus vitae quisquam,
                        illo dolor rem delectus corporis voluptatem eos! Voluptatum itaque, sapiente ullam, libero
                        fugiat cupiditate dolores veniam sit sequi similique dolorem error, eum officia deleniti
                        delectus repellat quam soluta iste obcaecati mollitia! Sunt corporis, aperiam nesciunt quasi,
                        natus libero quia praesentium officiis ad quidem vitae qui, magni magnam! Corporis doloribus
                        quia minima pariatur! Suscipit provident assumenda at tempore, rem sit, voluptas alias corrupti
                        quos vel ea itaque voluptatem voluptatibus modi consequuntur!</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
    max-width: 100%;
    height: 130vh;
    display: flex;
    flex-direction: column;
    margin: auto 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
    font-family: 'Athiti', sans-serif;

    header {
        z-index: 5;
    }

    .history {
        display: grid;
        grid-template-columns: 60vw 35vw;
        width: 100%;
        height: 100%;

        .image {
            display: flex;
            width: 100%;
            height: 100%;
            justify-self: center;
            align-items: center;
            position: relative;

            #image1 {
                height: 44vh;
                display: flex;
                position: absolute;
                top: 13%;
                left: 10%;
                box-shadow: 2px 2px 6px black;
            }

            #image2 {
                border: 0.5px solid white;
                height: 44vh;
                position: absolute;
                right: 10%;
                bottom: 6%;
                box-shadow: 2px 2px 6px black;
            }

            img {
                width: 50%;
                height: 50%;
                object-fit: cover;
                border-radius: 15px;

            }
        }
    }

    .paragraph {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 10%;

        .main {
            margin-bottom: 3%;

            h1 {
                font-weight: 550;
            }
        }

        .descript {
            width: 80%;
        }
    }
}
</style>