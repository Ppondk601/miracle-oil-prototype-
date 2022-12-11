<template>
    <div class="footer">
        <div class="logo">
            <h2>MIRACLE OIL</h2>
        </div>
        <div class="location">
            <div class="text">
                <p>22 ถนนชายทะเล</p>
                <p>ตำบลปากพนัง อำเภอปากพนัง</p>
                <p>จังหวัดนครศรีธรรมราช 80140</p>
            </div>
            <div class="map-location">
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/miracle-oil.appspot.com/o/map.png?alt=media&token=b11888f4-466c-4034-937b-4bdf47a8e8ac" />
            </div>
        </div>
        <div class="contact-list">
            <div class="contact-text">
                <p>Contact With Us</p>
            </div>
            <div class="icon">
                <i><font-awesome-icon :icon="['fab', 'facebook']" /></i>
                <i><font-awesome-icon :icon="['fab', 'line']" /></i>
                <i><font-awesome-icon :icon="['fab', 'shopify']" /></i>
                <i><font-awesome-icon :icon="['fas', 'phone']" /></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
    display: grid;
    width: 100vw;
    height: 35vh;
    background-color: rgb(46, 45, 45);
    grid-template-columns: 30% 40% 30%;

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;

        h2 {
            color: white;
            font-weight: 700;
        }
    }

    .location {
        display: flex;
        flex-direction: row;

        .text {
            justify-content: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 100%;

            p {
                font-size: 1.25rem;
                color: white;
            }
        }

        .map-location {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 90%;
                height: 80%;
                border-radius: 10px;
            }
        }
    }

    .contact-list {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .contact-text {
            p {
                color: white;
                font-size: 1.5rem;
            }
        }

        .icon {
            display: flex;
            color: white;

            i {
                padding: 15px;
                font-size: 1.75rem;

            }
        }
    }
}
</style>