<template>
    <div class="nav">
        <div class="left-nav">
            <div class="logo">
                <h2>MIRACLE OIL</h2>
            </div>
        </div>
        <nav class="box-item">
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
        </nav>
        <div class="right-nav">
            <div class="menu">
                <div class="buttonForToggle" :class="{ active: active }">
                    <button @click="toggleDropDown">
                        <p>สั่งซื้อ</p>
                        <div class="icon">
                            <font-awesome-icon :icon="['fas', 'caret-up']" />
                        </div>
                    </button>
                    <div class="hiddenDrop">
                        <div class="itemInDropdown" v-for="item in dropdownItem" :key="item.id">
                            <div class="toggleItem" v-if="active">
                                <div class="item" id="item.id">
                                    <a :href="item.link">{{ item.name }}</a>
                                </div>
                            </div>
                        </div>
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
            dropdownItem: [
                {
                    id: 1,
                    name: "Facebook",
                    link: ""
                },
                {
                    id: 2,
                    name: "Shopee",
                    link: ""
                },
                {
                    id: 1,
                    name: "Lazada",
                    link: ""
                }
            ],
            active: false
        }
    },
    methods: {
        toggleDropDown() {
            this.active = !this.active;
        }
    }
}
</script>

<style lang="scss" scoped>
.nav {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 9vh;
    justify-content: center;
    align-items: center;
    background-color: rgb(243, 243, 243);
    font-family: 'Athiti', sans-serif;
    padding: 0;
    margin: 0;
    box-shadow: 0px 1px 5px rgb(65, 65, 65);
    position: relative;
    position: fixed;

    .left-nav {
        width: 20%;
        justify-content: center;
        margin-right: 0%;
        padding-right: 5%;

        .logo {
            display: flex;
            justify-content: center;
            align-items: center;

            h2 {
                font-weight: 700;
            }
        }
    }

    .box-item {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 40%;
        margin-right: 2%;

        .item {
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            text-align: center;

            // p {
            //     display: flex;
            //     font-size: 1.2rem;
            //     font-weight: 600;
            //     text-decoration: none;
            //     color: black;
            //     height: 100%;
            //     width: 100%;
            //     margin: 0;
            // }
            p {
                font-size: 1.2rem;
                font-weight: 600;
                background-image: linear-gradient(to right,
                        #ff9900,
                        #f2970f 50%,
                        #000 50%);
                background-size: 200% 100%;
                background-position: 100%;
                display: inline-block;
                padding: 5px 0;
                position: relative;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                transition: all 0.1s ease-in-out;
                height: 100%;
                width: 100%;
                margin: 0;
            }

            p:before {
                content: '';
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
                ;

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

    .right-nav {
        width: 10%;
        padding: 0;
        margin: 0;
        height: 100%;

        .menu {
            display: flex;
            align-items: center;
            position: relative;
            height: 100%;

            .buttonForToggle {
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;

                &.active {
                    .hiddenDrop {
                        transition: all .3s ease-in-out;
                    }

                    button {


                        .icon {
                            transition-duration: 0.3s;
                            transform: rotate(180deg);
                        }
                    }
                }

                button {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 70%;
                    background-color: orange;
                    border: none;
                    margin: 0;
                    padding: 0;
                    border-radius: 5px;

                    p {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 1.2rem;
                        font-weight: 600;
                        color: white;
                        height: 100%;
                        width: 100%;
                        padding-left: 25%;
                        margin: 0;
                        text-align: center;

                    }

                    .icon {
                        transition-duration: 0.3s;
                        transform: rotate(0deg);
                        display: flex;
                        font-size: 1.5rem;
                        color: white;
                        align-items: center;
                        width: 40%;
                        justify-content: center;
                        padding: 0;
                        margin: 0;
                        margin-right: 10%;
                    }
                }

                button:hover {
                    transition: all 0.2s ease-in-out;
                    background-color: rgb(219, 148, 15);

                    p {
                        color: rgb(255, 255, 255);
                        transition: all 0.2s ease-in-out;
                    }
                }
            }

            .hiddenDrop {
                display: flex;
                position: absolute;
                flex-direction: column;
                top: 88%;
                left: 0%;
                width: 100%;
                height: 100%;

                .itemInDropdown {
                    .toggleItem {

                        .item {
                            display: flex;
                            width: 100%;
                            height: 100%;
                            background-color: rgb(241, 175, 51);
                            align-items: center;
                            justify-content: center;
                            padding: 10px 0px 10px 0px;

                            a {
                                color: white;
                                font-size: 1.2rem;
                                font-weight: 600;
                                text-decoration: none;
                            }
                        }

                        .item:hover {
                            transition: all 0.3s ease-in-out;
                            background-color: #fff;

                            a {
                                color: black;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>