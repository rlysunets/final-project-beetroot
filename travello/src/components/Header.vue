<template>
    <header id="header">
        <div class="container">
            <div class="header">
                <div class="header_logo">
                    <router-link to="/">
                        <img src="../assets/images/header_logo.svg" alt="Travello logo">
                    </router-link>
                </div>
                <nav class="header_menu">
                    <ul class="menu_list">
                        <li class="menu_item">
                            <router-link class="menu_link" to="/">Home</router-link>
                        </li>
                        <li class="menu_item">
                            <router-link class="menu_link" to="/about">About</router-link>
                        </li>
                        <li class="menu_item">
                            <router-link class="menu_link" to="/why-us">Why us</router-link>
                        </li>
                        <li class="menu_item">
                            <router-link class="menu_link" to="/trips">Trips</router-link>
                        </li>
                        <li class="menu_item">
                            <router-link class="menu_link" to="/tours">Tours</router-link>
                        </li>
                    </ul>
                </nav>
                <div class="header_button">
                    <my-button title="Contact us" :is-icon="false" @click="$router.push('/contacts')" />
                </div>

                <!-- burger menu -->
                <div class="burger">
                    <button class="hamburger hamburger--slider" type="button">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>

                <!--  overlay (while mobile menu active)-->
                <div id="overlay"></div>

                <!-- mobile menu -->
                <nav class="menu-mobile">
                    <div class="menu-mobile_heading">
                        <div class="menu-mobile_logo">
                            <a href="#">
                                <img src="../assets/images/header_logo.svg" alt="Travello logo">
                            </a>
                        </div>
                        <div class="burger">
                            <button class="hamburger hamburger--slider" type="button">
                                <span class="hamburger-box">
                                    <span class="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>

                    <ul class="menu-mobile_list">
                        <li class="menu-mobile_item">
                            <a href="#" class="menu-mobile_link">Home</a>
                        </li>
                        <li class="menu-mobile_item">
                            <a href="#" class="menu-mobile_link">About</a>
                        </li>
                        <li class="menu-mobile_item">
                            <a href="#" class="menu-mobile_link">Why us</a>
                        </li>
                        <li class="menu-mobile_item">
                            <a href="#" class="menu-mobile_link">Trips</a>
                        </li>
                        <li class="menu-mobile_item">
                            <a href="#" class="menu-mobile_link">Tours</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
// import router from "vue-router"
import MyButton from "./MyButton.vue"
export default {
    name: "Header",
    components: {
        MyButton
    },
}
</script>

<style lang="scss" scoped>
header {
    // background-color: transparent;
    background-color: #000;
}
.header {
    font-family: 'Work Sans';
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    color: #FFFFFF;
    display: flex;
    gap: 82px;
    align-items: center;
    height: 80px;
    &_logo {
        flex: 1 1 auto;
    }
    &_menu {
        .menu_list {
            display: flex;
            gap: 48px;
            .menu_item {
                .menu_link {
                    &:hover {
                        border-bottom: 1px solid #FFFFFF;
                        padding-bottom: 3px;
                        transition: all .3s ease;
                    }
                }
            }
        }
    }
}

/* burger & mobile menu styles ============================================= */
.burger,
.menu-mobile {
    display: none;
}

.menu-mobile {
    padding-left: 30px;
    position: fixed;
    width: 350px;
    background-color: rgba(32, 148, 230, .9);
    box-shadow: 0 0 10px #FFF;
    backdrop-filter: blur(10px);
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 1001;
    display: block;
    transition: all .3s ease;
    transform: translateX(-110%);
    &_heading {
        padding: 15px 0 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &.active {
        transform: translateX(0);
    }
    &_item {
        margin-bottom: 20px;
    }
    &_link {
        font-family: 'Work Sans';
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.625rem;
    }
}

.hidden {
    overflow: hidden;
}

#overlay {
    display: none;
    position: fixed;
    z-index: 1001;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #2e2e2e;
    opacity: .5;

    &.open {
        display: block;
        overflow: hidden;
    }
}

.none {
    display: none;
}
</style>