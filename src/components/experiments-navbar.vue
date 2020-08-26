<template>
    <div>
        <header>
            <img class="logo" height="32" src="../assets/logo-black.png" width="26"/>
            <nav>
                <ul class="nav_links">
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/about">About</router-link>
                    </li>
                    <li><a href="#">Three</a></li>
                </ul>
            </nav>
            <a class="cta" href="#">
                <button>Button</button>
            </a>
        </header>

    </div>

</template>

<script>
    export default {
        name: "experiments-navbar"
    }
</script>

<style lang="scss">
    @import '../styles/variables';

    li, a, button {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 16px;
        color: map_get($blue-colors, non-photo-blue);
        text-decoration: none;
    }

    header {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 10px 5%;
        background-color: map_get($blue-colors, teal-blue);
        opacity: 0.8;

        .logo {
            cursor: pointer;
            margin-right: auto;
        }

        .nav_links {
            list-style: none;

            li {
                display: inline-block;
                padding: 0px 20px;
            }

            a {
                transition: all 0.3s ease 0s;

                &:hover {
                    color: map_get($blue-colors, blue-sapphire);
                }
            }
        }

        button {
            margin-left: 20px;
            padding: 9px 25px;
            background-color: rgba(0, 136, 169, 1);
            border: none;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease 0s;

            &:hover {
                color: map_get($blue-colors, blue-sapphire);
            }
        }
    }


</style>