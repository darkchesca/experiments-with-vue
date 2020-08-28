<template>
    <footer>
        <div class="copyright">
            @ all rights reserved
        </div>
        <div class="social-links">
            <img class="logo" height="32" src="../assets/logo-black.png" width="26"/>
        </div>

    </footer>
</template>

<script>
    export default {
        name: "experiments-footer"
    }
</script>

<style lang="scss" scoped>
    @import '../styles/variables';

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 5%;
        background-color: map_get($blue-colors, teal-blue);
        opacity: 0.8;

        .copyright {
            color: map_get($blue-colors, non-photo-blue);
        }

        .logo {
            cursor: pointer;
            height: 30px;
            width: 30px;
        }
    }

</style>