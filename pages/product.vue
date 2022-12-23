<template>
    <div class="container">
        <newNavbar />
        <div class="text">
            coming SOON...
        </div>
        <Footer />
    </div>

</template>

<script>
import newIngredient from '~/components/newIngredient.vue'
export default {
    components: { newIngredient },

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

    .text {
        p {
            font-weight: 700;
            font-size: 4rem;
        }
    }

    .footer {
        position: fixed;
        bottom: 0;
    }
}
</style>