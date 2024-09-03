<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Header from '@/components/landingpage/layout/Header.vue';
import MainBanner from '@/components/landingpage/section/mainBanner.vue';
import OurProducts from '@/components/landingpage/section/ourProducts.vue';
import FrameWorks from '@/components/landingpage/section/frameWorks.vue';
import UserReview from '@/components/landingpage/section/userReview.vue';
import Features from '@/components/landingpage/section/otherFeatures.vue';
import AskQuestion from '@/components/landingpage/section/askQuestion.vue';
import BuyNow from '@/components/landingpage/section/buyNow.vue';
import Footer from '@/components/landingpage/layout/Footer.vue';
import 'aos/dist/aos.css';
import AOS from 'aos';

onMounted(() => {
    AOS.init();
});
</script>

<template>
    <div class="lp-wraper">
        <!-- <Header />

        <MainBanner />
        <OurProducts />
        <FrameWorks />
        <UserReview />
        <Features />
        <AskQuestion />
        <BuyNow />

        <Footer /> -->

        <div>
            <button class="scrollToTop d-none d-md-flex d-center" aria-label="scroll Bar Button">
                <i class="ti ti-chevron-up fs-four p6-color"></i>
            </button>


            <div class="hidden lg:block bg2-color py-4">
                <div class="container">
                    <div class="flex justify-between items-center">
                        <div class="lg:w-5/12 xl:w-5/12">
                            <div class="flex items-center gap-2 xl:gap-6">
                                <div class="flex items-center gap-1 xl:gap-3 navbar_top__location">
                                    <i class="ti ti-map-pin-filled fs-four p7-color"></i>
                                    <span class="roboto p7-color">102/B New Market, Sandigo-USA</span>
                                </div>
                                <span class="v-line mb-9"></span>
                                <a href="" class="flex items-center gap-3 roboto text-black">
                                    <i class="ti ti-mail-opened-filled fs-four"></i>
                                    <div class="__cf_email__">[email&#160;protected]</div>
                                </a>
                            </div>
                        </div>
                        <div class="lg:w-7/12 xl:w-6/12">
                            <div class="flex items-center justify-end gap-2 xl:gap-6">
                                <div class="flex items-center gap-3">
                                    <span class="bg6-color py-2 px-3 rounded-item">
                                        <i class="ti ti-phone-call fs-four p7-color"></i>
                                    </span>
                                    <div>
                                        <span class="p7-color font-bold block">Contact Us:</span>
                                        <a href="tel:+9802344567" class="block p7-color">+980 234 4567</a>
                                    </div>
                                </div>
                                <span class="v-line mb-9"></span>
                                <div class="flex items-center gap-2 xl:gap-3">
                                    <span class="p7-color font-bold">Follow Us:</span>
                                    <div class="flex items-center gap-1 xl:gap-2">
                                        <a href="javascript:void(0)"
                                            class="br3 py-2 px-3 rounded-item flex items-center justify-center">
                                            <i class="ti ti-brand-facebook fs-four p7-color"></i>
                                        </a>
                                        <a href="javascript:void(0)"
                                            class="br3 py-2 px-3 rounded-item flex items-center justify-center">
                                            <i class="ti ti-brand-instagram fs-four p7-color"></i>
                                        </a>
                                        <a href="javascript:void(0)"
                                            class="br3 py-2 px-3 rounded-item flex items-center justify-center">
                                            <i class="ti ti-brand-twitter fs-four p7-color"></i>
                                        </a>
                                        <a href="javascript:void(0)"
                                            class="br3 py-2 px-3 rounded-item flex items-center justify-center">
                                            <i class="ti ti-brand-linkedin fs-four p7-color"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <header class="header-section header-menu w-100 pt-1 pt-lg-0 pb-3 pb-lg-0">
                <div class="navbar_mainhead header-fixed w-100">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-12">
                                <nav class="navbar navbar-expand-lg position-relative py-md-3 py-lg-6 workready">
                                    <a href="index.html" class="navbar-brand d-flex align-items-center gap-2">
                                        <img src="@/assets/media/logo.png" class="logo" alt="logo" />
                                    </a>
                                    <div class="collapse navbar-collapse justify-content-between" id="navbar-content">
                                        <ul
                                            class="navbar-nav d-flex align-items-lg-center gap-5 gap-lg-1 gap-xl-4 gap-xxl-7 py-2 py-lg-0 ms-2 ms-xl-10 ms-xxl-20 ps-0 ps-xxl-10 align-self-center"
                                        >
                                            <li class="dropdown">
                                                <a href="index.html" class="fs-ten">Home</a>
                                            </li>
                                            <li class="dropdown show-dropdown">
                                                <button
                                                    type="button"
                                                    aria-label="Navbar Dropdown Button"
                                                    class="dropdown-toggle dropdown-nav d-flex align-items-center fs-ten"
                                                >
                                                    Staking <i class="ti ti-chevron-down"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a class="dropdown-item fs-ten" href="staking.html">Staking Pool</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item fs-ten" href="staking-details.html">Pool details</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="dropdown show-dropdown">
                                                <button
                                                    type="button"
                                                    aria-label="Navbar Dropdown Button"
                                                    class="dropdown-toggle dropdown-nav d-flex align-items-center fs-ten"
                                                >
                                                    IDO <i class="ti ti-chevron-down"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a class="dropdown-item fs-ten" href="ido.html">IDO</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item fs-ten" href="idodetails.html">IDO Details</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="dropdown show-dropdown">
                                                <button
                                                    type="button"
                                                    aria-label="Navbar Dropdown Button"
                                                    class="dropdown-toggle dropdown-nav d-flex align-items-center fs-ten"
                                                >
                                                    Swap <i class="ti ti-chevron-down"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a class="dropdown-item fs-ten" href="swap.html">Swap</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item fs-ten" href="swap-checkout.html">Swap to share</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="dropdown show-dropdown">
                                                <a href="apex.html" class="fs-ten">ApeX</a>
                                            </li>
                                            <li class="dropdown show-dropdown">
                                                <button
                                                    type="button"
                                                    aria-label="Navbar Dropdown Button"
                                                    class="dropdown-toggle dropdown-nav d-flex align-items-center fs-ten"
                                                >
                                                    Buy Crypto<i class="ti ti-chevron-down"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a class="dropdown-item fs-ten" href="buycrypto.html">Buy Crypto</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item fs-ten" href="pricing-plan.html">Pricing plan</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="dropdown show-dropdown">
                                                <button
                                                    type="button"
                                                    aria-label="Navbar Dropdown Button"
                                                    class="dropdown-toggle dropdown-nav d-flex align-items-center fs-ten"
                                                >
                                                    Pages<i class="ti ti-chevron-down"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a class="dropdown-item fs-ten" href="rewards.html">Rewards</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item fs-ten" href="blgoresource.html">Blog</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item fs-ten" href="blogdetails.html">Blog details</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item fs-ten" href="contact-us.html">Contact us</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item fs-ten" href="terms-conditaions.html">Terms & condition</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item fs-ten" href="404.html">Error</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="right-area custom-pos position-relative d-flex gap-0 gap-lg-2 align-items-center">
                                        <div class="single-item cart-area search-area">
                                            <div class="cmn-head">
                                                <button
                                                    type="button"
                                                    aria-label="Shopping Button"
                                                    class="common_toggles2 icon-area p-0 me-3 me-lg-0 box-second d-center position-relative"
                                                >
                                                    <i class="ti ti-search slide-toggle2 fs-four p6-color"></i>
                                                </button>
                                                <div class="msg_area common_area2 p2-bg p-5 rounded-lg">
                                                    <form class="d-flex align-items-center">
                                                        <input type="text" />
                                                        <button type="submit" class="p-2">
                                                            <i class="ti ti-search slide-toggle2 fs-four p2-color"></i>
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="header-section__modalstyle">
                                  
                                            <router-link
                                                :to="{ name: 'auth-login' }"
                                                class="cmn-btn px-3 px-sm-5 px-md-6 py-2 py-sm-3 d-flex align-items-center gap-1"
                                            >
                                                <a class="p7-color fw-semibold d-none d-sm-block">Account</a>
                                            </router-link>
                                        </div>
                                    </div>

                                    <button
                                        class="navbar-toggler"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        aria-label="Navbar Toggler"
                                        data-bs-target="#navbar-content"
                                        aria-expanded="true"
                                        id="nav-icon3"
                                    >
                                        <span></span><span></span><span></span><span></span>
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header> -->


            <header class="header-section header-menu w-full pt-1 pt-lg-0 pb-3 pb-lg-0">
                <div class="navbar_mainhead header-fixed w-full">
                    <div class="container mx-auto">
                        <div class="flex items-center">
                            <div class="w-full">
                                <nav class="flex items-center  relative py-3 lg:py-6 ">
                                    <a href="index.html" class="navbar-brand flex items-center gap-2">
                                        <img src="@/assets/media/logo.png" class="logo" alt="logo" />
                                    </a>
                                    <div class=" navbar-collapse justify-between flex-grow" id="navbar-content">
                                        <ul
                                            class="navbar-nav flex items-center gap-5 lg:gap-1 xl:gap-4 2xl:gap-7 py-2 lg:py-0 ml-2 xl:ml-10 2xl:ml-20 pl-0 2xl:pl-10">
                                            <li class="dropdown">
                                                <a href="index.html" class="fs-ten">Home</a>
                                            </li>
                                            <!-- <li class="dropdown show-dropdown">
                                    <button type="button" aria-label="Navbar Dropdown Button" class="dropdown-toggle dropdown-nav flex items-center fs-ten">
                                        Staking <i class="ti ti-chevron-down"></i>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item fs-ten" href="staking.html">Staking Pool</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item fs-ten" href="staking-details.html">Pool details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown show-dropdown">
                                    <button type="button" aria-label="Navbar Dropdown Button" class="dropdown-toggle dropdown-nav flex items-center fs-ten">
                                        IDO <i class="ti ti-chevron-down"></i>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item fs-ten" href="ido.html">IDO</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item fs-ten" href="idodetails.html">IDO Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown show-dropdown">
                                    <button type="button" aria-label="Navbar Dropdown Button" class="dropdown-toggle dropdown-nav flex items-center fs-ten">
                                        Swap <i class="ti ti-chevron-down"></i>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item fs-ten" href="swap.html">Swap</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item fs-ten" href="swap-checkout.html">Swap to share</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown show-dropdown">
                                    <a href="apex.html" class="fs-ten">ApeX</a>
                                </li>
                                <li class="dropdown show-dropdown">
                                    <button type="button" aria-label="Navbar Dropdown Button" class="dropdown-toggle dropdown-nav flex items-center fs-ten">
                                        Buy Crypto <i class="ti ti-chevron-down"></i>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item fs-ten" href="buycrypto.html">Buy Crypto</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item fs-ten" href="pricing-plan.html">Pricing plan</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown show-dropdown">
                                    <button type="button" aria-label="Navbar Dropdown Button" class="dropdown-toggle dropdown-nav flex items-center fs-ten">
                                        Pages <i class="ti ti-chevron-down"></i>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item fs-ten" href="rewards.html">Rewards</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item fs-ten" href="blgoresource.html">Blog</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item fs-ten" href="blogdetails.html">Blog details</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item fs-ten" href="contact-us.html">Contact us</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item fs-ten" href="terms-conditaions.html">Terms & condition</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item fs-ten" href="404.html">Error</a>
                                        </li>
                                    </ul>
                                </li> -->
                                        </ul>
                                    </div>

                                    <div class="right-area custom-pos relative flex gap-0 lg:gap-2 items-center">
                                        <div class="single-item cart-area search-area">
                                            <div class="cmn-head">
                                                <!-- <button type="button" aria-label="Shopping Button"
                                                    class="common_toggles2 icon-area p-0 me-3 me-lg-0 box-second d-center relative">
                                                    <i class="ti ti-search slide-toggle2 fs-four p6-color"></i>
                                                </button> -->

                                                <div class="msg_area common_area2 p2-bg p-5 rounded-lg">
                                                    <form class="flex items-center">
                                                        <input type="text" />
                                                        <button type="submit" class="p-2">
                                                            <i class="ti ti-search slide-toggle2 fs-four p2-color"></i>
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="header-section__modalstyle">
                                            <!-- <router-link :to="{ name: 'auth-login' }"
                                                class="cmn-btn px-3 sm:px-5 md:px-6 py-2 sm:py-3 flex items-center gap-1">
                                                <a class="p7-color font-semibold hidden sm:block">Account</a>
                                            </router-link> -->
                                            <router-link :to="{ name: 'auth-login' }"
                                                class="hero_area__content-btnone cmn-btn px-6 md:px-8 py-3 flex items-center gap-3">
                                                Get Started
                                                <i class=" ti ti-chevron-right fs-five px-1 bg4-color p6-color
                                                rounded-lg fw-bolder"></i>
                                            </router-link>
                                        </div>
                                    </div>

                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        aria-label="Navbar Toggler" data-bs-target="#navbar-content"
                                        aria-expanded="true" id="nav-icon3">
                                        <span></span><span></span><span></span><span></span>
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>



            <section class="hero_area pt-28 pb-16 relative">
                <div class="container z-10">
                    <div class="flex justify-center mt-8 sm:mt-13 md:mt-0">
                        <div class="xl:w-9/12">
                            <div class="hero_area__content pt-17 sm:pt-20 lg:pt-0 text-center">
                                <span class="fs-five py-2 px-3 sm:px-5 mb-4 wow fadeInUp">
                                    Trust and Security in Web3 Crypto Exchange
                                </span>
                                <h1 class="display-three mb-5 md:mb-6 wow fadeInUp">
                                    Trust and Security in Web3 Crypto Exchange
                                </h1>
                                <p class="mb-8 md:mb-10 wow fadeInUp">
                                    Our comprehensive cybersecurity platform, driven by artificial intelligence, not
                                    only <br />
                                    safeguards your organization but also educates your workforce.
                                </p>
                                <div
                                    class="flex items-center justify-center flex-wrap gap-4 md:gap-6 mb-10 md:mb-13 wow fadeInUp">
                                    <a class="hero_area__content-btnone cmn-btn px-6 md:px-8 py-3 flex items-center gap-3"
                                        href="buycrypto.html">
                                        Get Started
                                        <i
                                            class="ti ti-chevron-right fs-five px-1 bg4-color p6-color rounded-lg fw-bolder"></i>
                                    </a>
                                    <a class="hero_area__content-btntwo cmn-btn third-alt px-6 md:px-8 py-3 flex items-center gap-3"
                                        href="staking.html">
                                        Explore
                                        <i class="ti ti-chevron-right fs-five px-1 bg2-color rounded-lg fw-bolder"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hero_area__shape">
                    <img class="absolute rotated_animattwo" src="@/assets/media/hero-shape.png" alt="Shape" />
                </div>
                <div class="hero_area__lishtone">
                    <img class="absolute opacity-75" src="@/assets/media/lightone.png" alt="light" />
                </div>
                <div class="hero_area__lishttwo">
                    <img class="absolute opacity-75" src="@/assets/media/lighttwo.png" alt="light" />
                </div>
            </section>




            <section class="web3_product how_join bg9-color pt-28 pb-28">
                <div class="container">
                    <div class="grid gap-y-5 md:gap-y-6">
                        <div class="how_join__title text-center mb-10 md:mb-15">
                            <h2 class="wow fadeInUp">Explore Coinx Web3 Products</h2>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                            <div class="col-span-1">
                                <div
                                    class="web3_product__item how_join__item py-7 md:py-10 px-6 md:px-8 rounded-lg br2 relative wow fadeInUp">
                                    <div
                                        class="how_join__item-thumb mb-4 md:mb-5 text-center p-6 bg1-color rounded-item inline-block">
                                        <img src="@/assets/media/subscription.png" alt="Icons" />
                                    </div>
                                    <h4 class="mb-4 md:mb-5">Staking</h4>
                                    <p class="mb-6 md:mb-8">Unlock passive profits with just one click!</p>
                                    <div class="web3_product__item-btn">
                                        <a class="cmn-btn third-alt px-3 py-2 rounded-full" href="swap.html">
                                            <i class="ti ti-arrow-up-right fs-four"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-1">
                                <div
                                    class="web3_product__item how_join__item py-7 md:py-10 px-6 md:px-8 rounded-lg br2 relative wow fadeInUp">
                                    <div
                                        class="how_join__item-thumb mb-4 md:mb-5 text-center p-6 bg1-color rounded-item inline-block">
                                        <img src="@/assets/media/snapshot.png" alt="Icons" />
                                    </div>
                                    <h4 class="mb-4 md:mb-5">IDO</h4>
                                    <p class="mb-6 md:mb-8">Be the first to enjoy exclusive token discounts</p>
                                    <div class="web3_product__item-btn">
                                        <a class="cmn-btn third-alt px-3 py-2 rounded-full" href="swap.html">
                                            <i class="ti ti-arrow-up-right fs-four"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-1">
                                <div
                                    class="web3_product__item how_join__item py-7 md:py-10 px-6 md:px-8 rounded-lg br2 relative wow fadeInUp">
                                    <div
                                        class="how_join__item-thumb mb-4 md:mb-5 text-center p-6 bg1-color rounded-item inline-block">
                                        <img src="@/assets/media/lottery.png" alt="Icons" />
                                    </div>
                                    <h4 class="mb-4 md:mb-5">Lottery</h4>
                                    <p class="mb-6 md:mb-8">Participate in our exciting lottery to win big prizes!</p>
                                    <div class="web3_product__item-btn">
                                        <a class="cmn-btn third-alt px-3 py-2 rounded-full" href="swap.html">
                                            <i class="ti ti-arrow-up-right fs-four"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-1">
                                <div
                                    class="web3_product__item how_join__item py-7 md:py-10 px-6 md:px-8 rounded-lg br2 relative wow fadeInUp">
                                    <div
                                        class="how_join__item-thumb mb-4 md:mb-5 text-center p-6 bg1-color rounded-item inline-block">
                                        <img src="@/assets/media/redemption.png" alt="Icons" />
                                    </div>
                                    <h4 class="mb-4 md:mb-5">Buy Crypto</h4>
                                    <p class="mb-6 md:mb-8">Buy Crypto Anytime, Anywhere, Easily.</p>
                                    <div class="web3_product__item-btn">
                                        <a class="cmn-btn third-alt px-3 py-2 rounded-full" href="swap.html">
                                            <i class="ti ti-arrow-up-right fs-four"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-1 text-center mt-2 md:mt-4">
                            <a href="swap.html"
                                class="cmn-btn py-2 px-5 md:px-6 inline-flex justify-center items-center roboto">
                                VIEW MORE <i class="ti ti-chevron-right fs-four"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>



            <!-- Explore Coinx Web3 Products Ends -->
            <!-- Markets Section starts -->
            <section class="market_more what_trending bg5-color pt-120 pb-120 d-none">
                <div class="container">
                    <div class="row categories__header mb-4 mb-md-6">
                        <div class="col-xl-7 col-lg-8 col-sm-8">
                            <div class="categories__title d-flex align-items-center gap-5 gap-md-6 wow fadeInUp">
                                <h2 class="mb-3 mb-md-4">Markets</h2>
                                <a href="javascript:void(0)"
                                    class="roboto d-flex align-items-center gap-2 p1-color">More Market <i
                                        class="ti ti-chevron-right p1-color"></i></a>
                            </div>
                        </div>
                        <div
                            class="col-xl-5 col-lg-4 col-sm-4 categories_top_btn categories_top_btntwo categories_top_btnthree categories_top_btnfour mt-6 mt-sm-0">
                            <div class="slider-btn d-center justify-content-start justify-content-sm-end gap-4">
                                <button type="button" aria-label="Slide Prev"
                                    class="ara-prev d-center cmn-btn third-alt px-2 py-1 rounded-full">
                                    <i class="ti ti-chevron-left fs-four"></i>
                                </button>
                                <button type="button" aria-label="Slide Next"
                                    class="ara-next d-center cmn-btn px-2 py-1 rounded-full">
                                    <i class="ti ti-chevron-right fs-four"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="singletab">
                            <ul class="tablinks d-flex align-items-center gap-3 flex-wrap mb-10 mb-md-15 wow fadeInUp">
                                <li class="nav-links">
                                    <button
                                        class="tablink clickable-active active py-3 px-5 px-md-6 rounded-lg br2">Staking</button>
                                </li>
                                <li class="nav-links">
                                    <button
                                        class="tablink clickable-active py-3 px-5 px-md-6 rounded-lg br2">IDO</button>
                                </li>
                                <li class="nav-links">
                                    <button
                                        class="tablink clickable-active py-3 px-5 px-md-6 rounded-lg br2">Swap</button>
                                </li>
                                <li class="nav-links">
                                    <button class="tablink clickable-active py-3 px-5 px-md-6 rounded-lg br2">Buy
                                        Crypto</button>
                                </li>
                            </ul>
                            <div class="tabcontents">
                                <div class="tabitem active">
                                    <div class="swiper categories_top">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <div class="items-wrapper">
                                                    <div
                                                        class="market_more__item text-center py-8 py-md-10 px-5 px-md-6 bg1-color rounded-lg">
                                                        <div
                                                            class="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                                                            <div class="d-flex align-items-center">
                                                                <img class="mb-3 mb-md-4"
                                                                    src="@/assets/media/homeicon2.png" alt="icon" />
                                                                <img class="imgstyle mb-3 mb-md-4"
                                                                    src="@/assets/media/homeicon3.png" alt="icon" />
                                                            </div>
                                                            <div class="text-start">
                                                                <h3 class="mb-1">yCRV</h3>
                                                                <span class="mb-5 mb-md-6 d-block">Lido Dao</span>
                                                            </div>
                                                        </div>
                                                        <span class="fs-one p1-color fw_500 mb-1 d-block">11.31%</span>
                                                        <span class="mb-8 mb-md-10 d-block fs-five">Apy</span>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-3">
                                                            <span>TVL</span>
                                                            <span>$4.96 M</span>
                                                        </div>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                                                            <span>Network</span>
                                                            <span>Ethereum</span>
                                                        </div>
                                                        <a href="staking-details.html"
                                                            class="cmn-btn third-alt py-3 px-5 px-md-6 w-100">Stack</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="items-wrapper">
                                                    <div
                                                        class="market_more__item text-center py-8 py-md-10 px-5 px-md-6 bg1-color rounded-lg">
                                                        <div
                                                            class="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                                                            <div class="d-flex align-items-center">
                                                                <img class="mb-3 mb-md-4"
                                                                    src="@/assets/media/homeicon4.png" alt="icon" />
                                                            </div>
                                                            <div class="text-start">
                                                                <h3 class="mb-1">cvxeth</h3>
                                                                <span class="mb-5 mb-md-6 d-block">curve</span>
                                                            </div>
                                                        </div>
                                                        <span class="fs-one p1-color fw_500 mb-1 d-block">9.71%</span>
                                                        <span class="mb-8 mb-md-10 d-block fs-five">Apy</span>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-3">
                                                            <span>TVL</span>
                                                            <span>$16.66 M</span>
                                                        </div>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                                                            <span>Network</span>
                                                            <span>Ethereum</span>
                                                        </div>
                                                        <a href="staking-details.html"
                                                            class="cmn-btn third-alt py-3 px-5 px-md-6 w-100">Stack</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="items-wrapper">
                                                    <div
                                                        class="market_more__item text-center py-8 py-md-10 px-5 px-md-6 bg1-color rounded-lg">
                                                        <div
                                                            class="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                                                            <div class="d-flex align-items-center">
                                                                <img class="mb-3 mb-md-4"
                                                                    src="@/assets/media/homeicon5.png" alt="icon" />
                                                            </div>
                                                            <div class="text-start">
                                                                <h3 class="mb-1">GLP</h3>
                                                                <span class="mb-5 mb-md-6 d-block">gmx</span>
                                                            </div>
                                                        </div>
                                                        <span class="fs-one p1-color fw_500 mb-1 d-block">7.79%</span>
                                                        <span class="mb-8 mb-md-10 d-block fs-five">Apy</span>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-3">
                                                            <span>TVL</span>
                                                            <span>$4.96 M</span>
                                                        </div>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                                                            <span>Network</span>
                                                            <span>Ethereum</span>
                                                        </div>
                                                        <a href="staking-details.html"
                                                            class="cmn-btn third-alt py-3 px-5 px-md-6 w-100">Stack</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="items-wrapper">
                                                    <div
                                                        class="market_more__item text-center py-8 py-md-10 px-5 px-md-6 bg1-color rounded-lg">
                                                        <div
                                                            class="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                                                            <div class="d-flex align-items-center">
                                                                <img class="mb-3 mb-md-4"
                                                                    src="@/assets/media/homeicon3.png" alt="icon" />
                                                                <img class="imgstyle mb-3 mb-md-4"
                                                                    src="@/assets/media/homeicon6.png" alt="icon" />
                                                            </div>
                                                            <div class="text-start">
                                                                <h3 class="mb-1">yCRV</h3>
                                                                <span class="mb-5 mb-md-6 d-block">Lido Dao</span>
                                                            </div>
                                                        </div>
                                                        <span class="fs-one p1-color fw_500 mb-1 d-block">11.31%</span>
                                                        <span class="mb-8 mb-md-10 d-block fs-five">Apy</span>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-3">
                                                            <span>TVL</span>
                                                            <span>$43.96 M</span>
                                                        </div>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                                                            <span>Network</span>
                                                            <span>Ethereum</span>
                                                        </div>
                                                        <a href="staking-details.html"
                                                            class="cmn-btn third-alt py-3 px-5 px-md-6 w-100">Stack</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tabitem">
                                    <div class="swiper categories_toptwo">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <div class="items-wrapper">
                                                    <div
                                                        class="market_more__item text-center py-8 py-md-10 px-5 px-md-6 bg1-color rounded-lg">
                                                        <div
                                                            class="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                                                            <div class="d-flex align-items-center">
                                                                <img class="mb-3 mb-md-4"
                                                                    src="@/assets/media/homeicon2.png" alt="icon" />
                                                                <img class="imgstyle mb-3 mb-md-4"
                                                                    src="@/assets/media/homeicon3.png" alt="icon" />
                                                            </div>
                                                            <div class="text-start">
                                                                <h3 class="mb-1">yCRV</h3>
                                                                <span class="mb-5 mb-md-6 d-block">Lido Dao</span>
                                                            </div>
                                                        </div>
                                                        <span class="fs-one p1-color fw_500 mb-1 d-block">11.31% </span>
                                                        <span class="mb-8 mb-md-10 d-block fs-five">Apy</span>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-3">
                                                            <span>TVL</span>
                                                            <span>$4.96 M</span>
                                                        </div>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                                                            <span>Network</span>
                                                            <span>Ethereum</span>
                                                        </div>
                                                        <a href="staking-details.html"
                                                            class="cmn-btn third-alt py-3 px-5 px-md-6 w-100">Stack</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="items-wrapper">
                                                    <div
                                                        class="market_more__item text-center py-8 py-md-10 px-5 px-md-6 bg1-color rounded-lg">
                                                        <div
                                                            class="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                                                            <div class="d-flex align-items-center">
                                                                <img class="mb-3 mb-md-4"
                                                                    src="@/assets/media/homeicon4.png" alt="icon" />
                                                            </div>
                                                            <div class="text-start">
                                                                <h3 class="mb-1">cvxeth</h3>
                                                                <span class="mb-5 mb-md-6 d-block">curve</span>
                                                            </div>
                                                        </div>
                                                        <span class="fs-one p1-color fw_500 mb-1 d-block">9.71%</span>
                                                        <span class="mb-8 mb-md-10 d-block fs-five">Apy</span>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-3">
                                                            <span>TVL</span>
                                                            <span>$16.66 M</span>
                                                        </div>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                                                            <span>Network</span>
                                                            <span>Ethereum</span>
                                                        </div>

                                                        <a href="staking-details.html"
                                                            class="cmn-btn third-alt py-3 px-5 px-md-6 w-100">Stack</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="swiper-slide">
                                                <div class="items-wrapper">
                                                    <div
                                                        class="market_more__item text-center py-8 py-md-10 px-5 px-md-6 bg1-color rounded-lg">
                                                        <div
                                                            class="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                                                            <div class="d-flex align-items-center">
                                                                <img class="mb-3 mb-md-4"
                                                                    src="@/assets/media/homeicon5.png" alt="icon" />
                                                            </div>
                                                            <div class="text-start">
                                                                <h3 class="mb-1">GLP</h3>
                                                                <span class="mb-5 mb-md-6 d-block">gmx</span>
                                                            </div>
                                                        </div>
                                                        <span class="fs-one p1-color fw_500 mb-1 d-block">7.79%</span>
                                                        <span class="mb-8 mb-md-10 d-block fs-five">Apy</span>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-3">
                                                            <span>TVL</span>
                                                            <span>$4.96 M</span>
                                                        </div>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                                                            <span>Network</span>
                                                            <span>Ethereum</span>
                                                        </div>
                                                        <a href="staking-details.html"
                                                            class="cmn-btn third-alt py-3 px-5 px-md-6 w-100">Stack</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="items-wrapper">
                                                    <div
                                                        class="market_more__item text-center py-8 py-md-10 px-5 px-md-6 bg1-color rounded-lg">
                                                        <div
                                                            class="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                                                            <div class="d-flex align-items-center">
                                                                <img class="mb-3 mb-md-4"
                                                                    src="@/assets/media/homeicon3.png" alt="icon" />
                                                                <img class="imgstyle mb-3 mb-md-4"
                                                                    src="@/assets/media/homeicon6.png" alt="icon" />
                                                            </div>
                                                            <div class="text-start">
                                                                <h3 class="mb-1">yCRV</h3>
                                                                <span class="mb-5 mb-md-6 d-block">Lido Dao</span>
                                                            </div>
                                                        </div>
                                                        <span class="fs-one p1-color fw_500 mb-1 d-block">11.31%</span>
                                                        <span class="mb-8 mb-md-10 d-block fs-five">Apy</span>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-3">
                                                            <span>TVL</span>
                                                            <span>$43.96 M</span>
                                                        </div>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                                                            <span>Network</span>
                                                            <span>Ethereum</span>
                                                        </div>
                                                        <a href="staking-details.html"
                                                            class="cmn-btn third-alt py-3 px-5 px-md-6 w-100">Stack</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tabitem">
                                    <div class="swiper categories_topthree">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <div class="items-wrapper">
                                                    <div
                                                        class="market_more__item text-center py-8 py-md-10 px-5 px-md-6 bg1-color rounded-lg">
                                                        <div
                                                            class="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                                                            <div class="d-flex align-items-center">
                                                                <img class="mb-3 mb-md-4"
                                                                    src="@/assets/media/homeicon2.png" alt="icon" />
                                                                <img class="imgstyle mb-3 mb-md-4"
                                                                    src="@/assets/media/homeicon3.png" alt="icon" />
                                                            </div>
                                                            <div class="text-start">
                                                                <h3 class="mb-1">yCRV</h3>
                                                                <span class="mb-5 mb-md-6 d-block">Lido Dao</span>
                                                            </div>
                                                        </div>
                                                        <span class="fs-one p1-color fw_500 mb-1 d-block">11.31%</span>
                                                        <span class="mb-8 mb-md-10 d-block fs-five">Apy</span>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-3">
                                                            <span>TVL</span>
                                                            <span>$4.96 M</span>
                                                        </div>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                                                            <span>Network</span>
                                                            <span>Ethereum</span>
                                                        </div>
                                                        <a href="staking-details.html"
                                                            class="cmn-btn third-alt py-3 px-5 px-md-6 w-100">Stack</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="items-wrapper">
                                                    <div
                                                        class="market_more__item text-center py-8 py-md-10 px-5 px-md-6 bg1-color rounded-lg">
                                                        <div
                                                            class="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                                                            <div class="d-flex align-items-center">
                                                                <img class="mb-3 mb-md-4"
                                                                    src="@/assets/media/homeicon4.png" alt="icon" />
                                                            </div>
                                                            <div class="text-start">
                                                                <h3 class="mb-1">cvxeth</h3>
                                                                <span class="mb-5 mb-md-6 d-block">curve</span>
                                                            </div>
                                                        </div>
                                                        <span class="fs-one p1-color fw_500 mb-1 d-block">9.71%</span>
                                                        <span class="mb-8 mb-md-10 d-block fs-five">Apy</span>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-3">
                                                            <span>TVL</span>
                                                            <span>$16.66 M</span>
                                                        </div>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                                                            <span>Network</span>
                                                            <span>Ethereum</span>
                                                        </div>
                                                        <a href="staking-details.html"
                                                            class="cmn-btn third-alt py-3 px-5 px-md-6 w-100">Stack</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="items-wrapper">
                                                    <div
                                                        class="market_more__item text-center py-8 py-md-10 px-5 px-md-6 bg1-color rounded-lg">
                                                        <div
                                                            class="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                                                            <div class="d-flex align-items-center">
                                                                <img class="mb-3 mb-md-4"
                                                                    src="@/assets/media/homeicon5.png" alt="icon" />
                                                            </div>
                                                            <div class="text-start">
                                                                <h3 class="mb-1">GLP</h3>
                                                                <span class="mb-5 mb-md-6 d-block">gmx</span>
                                                            </div>
                                                        </div>
                                                        <span class="fs-one p1-color fw_500 mb-1 d-block">7.79%</span>
                                                        <span class="mb-8 mb-md-10 d-block fs-five">Apy</span>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-3">
                                                            <span>TVL</span>
                                                            <span>$4.96 M</span>
                                                        </div>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                                                            <span>Network</span>
                                                            <span>Ethereum</span>
                                                        </div>
                                                        <a href="staking-details.html"
                                                            class="cmn-btn third-alt py-3 px-5 px-md-6 w-100">Stack</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="items-wrapper">
                                                    <div
                                                        class="market_more__item text-center py-8 py-md-10 px-5 px-md-6 bg1-color rounded-lg">
                                                        <div
                                                            class="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                                                            <div class="d-flex align-items-center">
                                                                <img class="mb-3 mb-md-4"
                                                                    src="@/assets/media/homeicon3.png" alt="icon" />
                                                                <img class="imgstyle mb-3 mb-md-4"
                                                                    src="@/assets/media/homeicon6.png" alt="icon" />
                                                            </div>
                                                            <div class="text-start">
                                                                <h3 class="mb-1">yCRV</h3>
                                                                <span class="mb-5 mb-md-6 d-block">Lido Dao</span>
                                                            </div>
                                                        </div>
                                                        <span class="fs-one p1-color fw_500 mb-1 d-block">11.31%</span>
                                                        <span class="mb-8 mb-md-10 d-block fs-five">Apy</span>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-3">
                                                            <span>TVL</span>
                                                            <span>$43.96 M</span>
                                                        </div>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                                                            <span>Network</span>
                                                            <span>Ethereum</span>
                                                        </div>
                                                        <a href="staking-details.html"
                                                            class="cmn-btn third-alt py-3 px-5 px-md-6 w-100">Stack</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tabitem">
                                    <div class="swiper categories_topfour">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <div class="items-wrapper">
                                                    <div
                                                        class="market_more__item text-center py-8 py-md-10 px-5 px-md-6 bg1-color rounded-lg">
                                                        <div
                                                            class="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                                                            <div class="d-flex align-items-center">
                                                                <img class="mb-3 mb-md-4"
                                                                    src="@/assets/media/homeicon2.png" alt="icon" />
                                                                <img class="imgstyle mb-3 mb-md-4"
                                                                    src="@/assets/media/homeicon3.png" alt="icon" />
                                                            </div>
                                                            <div class="text-start">
                                                                <h3 class="mb-1">yCRV</h3>
                                                                <span class="mb-5 mb-md-6 d-block">Lido Dao</span>
                                                            </div>
                                                        </div>
                                                        <span class="fs-one p1-color fw_500 mb-1 d-block">11.31%</span>
                                                        <span class="mb-8 mb-md-10 d-block fs-five">Apy</span>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-3">
                                                            <span>TVL</span>
                                                            <span>$4.96 M</span>
                                                        </div>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                                                            <span>Network</span>
                                                            <span>Ethereum</span>
                                                        </div>
                                                        <a href="staking-details.html"
                                                            class="cmn-btn third-alt py-3 px-5 px-md-6 w-100">Stack</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="items-wrapper">
                                                    <div
                                                        class="market_more__item text-center py-8 py-md-10 px-5 px-md-6 bg1-color rounded-lg">
                                                        <div
                                                            class="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                                                            <div class="d-flex align-items-center">
                                                                <img class="mb-3 mb-md-4"
                                                                    src="@/assets/media/homeicon4.png" alt="icon" />
                                                            </div>
                                                            <div class="text-start">
                                                                <h3 class="mb-1">cvxeth</h3>
                                                                <span class="mb-5 mb-md-6 d-block">curve</span>
                                                            </div>
                                                        </div>
                                                        <span class="fs-one p1-color fw_500 mb-1 d-block">9.71%</span>
                                                        <span class="mb-8 mb-md-10 d-block fs-five">Apy</span>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-3">
                                                            <span>TVL</span>
                                                            <span>$16.66 M</span>
                                                        </div>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                                                            <span>Network</span>
                                                            <span>Ethereum</span>
                                                        </div>
                                                        <a href="staking-details.html"
                                                            class="cmn-btn third-alt py-3 px-5 px-md-6 w-100">Stack</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="items-wrapper">
                                                    <div
                                                        class="market_more__item text-center py-8 py-md-10 px-5 px-md-6 bg1-color rounded-lg">
                                                        <div
                                                            class="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                                                            <div class="d-flex align-items-center">
                                                                <img class="mb-3 mb-md-4"
                                                                    src="@/assets/media/homeicon5.png" alt="icon" />
                                                            </div>
                                                            <div class="text-start">
                                                                <h3 class="mb-1">GLP</h3>
                                                                <span class="mb-5 mb-md-6 d-block">gmx</span>
                                                            </div>
                                                        </div>
                                                        <span class="fs-one p1-color fw_500 mb-1 d-block">7.79%</span>
                                                        <span class="mb-8 mb-md-10 d-block fs-five">Apy</span>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-3">
                                                            <span>TVL</span>
                                                            <span>$4.96 M</span>
                                                        </div>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                                                            <span>Network</span>
                                                            <span>Ethereum</span>
                                                        </div>
                                                        <a href="staking-details.html"
                                                            class="cmn-btn third-alt py-3 px-5 px-md-6 w-100">Stack</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="items-wrapper">
                                                    <div
                                                        class="market_more__item text-center py-8 py-md-10 px-5 px-md-6 bg1-color rounded-lg">
                                                        <div
                                                            class="d-flex align-items-center justify-content-center gap-3 mb-8 mb-md-10">
                                                            <div class="d-flex align-items-center">
                                                                <img class="mb-3 mb-md-4"
                                                                    src="@/assets/media/homeicon3.png" alt="icon" />
                                                                <img class="imgstyle mb-3 mb-md-4"
                                                                    src="@/assets/media/homeicon6.png" alt="icon" />
                                                            </div>
                                                            <div class="text-start">
                                                                <h3 class="mb-1">yCRV</h3>
                                                                <span class="mb-5 mb-md-6 d-block">Lido Dao</span>
                                                            </div>
                                                        </div>
                                                        <span class="fs-one p1-color fw_500 mb-1 d-block">11.31%</span>
                                                        <span class="mb-8 mb-md-10 d-block fs-five">Apy</span>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-3">
                                                            <span>TVL</span>
                                                            <span>$43.96 M</span>
                                                        </div>
                                                        <div
                                                            class="d-flex align-items-center justify-content-between mb-9 mb-md-12">
                                                            <span>Network</span>
                                                            <span>Ethereum</span>
                                                        </div>
                                                        <a href="staking-details.html"
                                                            class="cmn-btn third-alt py-3 px-5 px-md-6 w-100">Stack</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section class="get_started pt-28 pb-28 bg7-colo">
                <div class="container">
                    <div
                        class="flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 md:gap-6 mb-10 md:mb-15 pb-8 md:pb-10">
                        <div class="lg:w-2/5 xl:w-1/3">
                            <h2 class="text-center md:text-left wow fadeInUp">How to get started</h2>
                        </div>
                        <div class="lg:w-3/5 xl:w-5/12">
                            <p class="roboto text-center md:text-left wow fadeInUp">
                                Our comprehensive cybersecurity platform, driven by artificial intelligence, not only
                                safeguards your
                                organization but also educates your workforce.
                            </p>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 xl:grid-cols-4 bg1-color rounded-xl gap-y-6">
                        <div class="p-xxl-0">
                            <div class="get_started__item px-5 py-13 text-center relative wow fadeInUp">
                                <span
                                    class="get_started__item-icn py-3 px-4 rounded-full bg1-color mb-5 md:mb-6 inline-block">
                                    <i class="ti ti-user fs-four"></i>
                                </span>
                                <h4 class="p1-color mb-5 md:mb-6">Create account</h4>
                                <span class="roboto mb-8 md:mb-10 block">Sign in to Bitco to register a new profile.
                                    Complete the verification process.</span>
                                <button class="cmn-btn third-alt py-3 px-5 md:px-6">Register now</button>
                            </div>
                        </div>
                        <div class="p-xxl-0">
                            <div class="get_started__item px-5 py-13 text-center relative wow fadeInUp">
                                <span
                                    class="get_started__item-icn py-3 px-4 rounded-full bg1-color mb-5 md:mb-6 inline-block">
                                    <i class="ti ti-shield-filled fs-four"></i>
                                </span>
                                <h4 class="p1-color mb-5 md:mb-6">Verify your identity</h4>
                                <span class="roboto mb-8 md:mb-10 block">Spend less than five minutes completing the
                                    verification process.</span>
                                <button class="cmn-btn third-alt py-3 px-5 md:px-6">Register now</button>
                            </div>
                        </div>
                        <div class="p-xxl-0">
                            <div class="get_started__item px-5 py-13 text-center relative wow fadeInUp">
                                <span
                                    class="get_started__item-icn py-3 px-4 rounded-full bg1-color mb-5 md:mb-6 inline-block">
                                    <i class="ti ti-home-dollar fs-four"></i>
                                </span>
                                <h4 class="p1-color mb-5 md:mb-6">Deposit and buy crypto</h4>
                                <span class="roboto mb-8 md:mb-10 block">Spend less than five minutes completing the
                                    verification process.</span>
                                <button class="cmn-btn third-alt py-3 px-5 md:px-6">Register now</button>
                            </div>
                        </div>
                        <div class="p-xxl-0">
                            <div class="get_started__item px-5 py-13 text-center relative wow fadeInUp">
                                <span
                                    class="get_started__item-icn py-3 px-4 rounded-full bg1-color mb-5 md:mb-6 inline-block">
                                    <i class="ti ti-user fs-four"></i>
                                </span>
                                <h4 class="p1-color mb-5 md:mb-6">Start your journey</h4>
                                <span class="roboto mb-8 md:mb-10 block">Spend less than five minutes completing the
                                    verification process.</span>
                                <button class="cmn-btn third-alt py-3 px-5 md:px-6">Register now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <!-- <section class="trust_security pt-120 pb-120">
                <div class="container">
                    <div class="row align-items-end justify-content-between gy-5 gy-md-6 mb-10 mb-md-15">
                        <div class="col-lg-7 col-xxl-6">
                            <div class="trust_security__title wow fadeInUp">
                                <h2>Trust and Security in Web3</h2>
                                <h2 class="trust_security__title-tstyle">Crypto Exchange</h2>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <p class="wow fadeInUp">
                                Our comprehensive cybersecurity platform, driven by artificial intelligence, not only
                                safeguards your
                                organization.
                            </p>
                        </div>
                    </div>
                    <div class="row gy-5 gy-md-6 justify-content-center">
                        <div class="col-lg-8">
                            <div class="row gy-5 gy-md-6 justify-content-center">
                                <div class="col-12">
                                    <div class="position-relative wow fadeInUp">
                                        <img src="@/assets/media/support227.png" alt="Image" />
                                        <div
                                            class="d-flex align-items-center justify-content-between gap-3 position-absolute bottom-0 start-0 ps-5 ps-md-6 pb-8 pb-md-10 pe-3 pe-md-4 w-100 flex-wrap">
                                            <a href="javascript:void(0)">
                                                <h3>24/7 Support</h3>
                                            </a>
                                            <p>
                                                Count on us for round-the-clock support, ensuring help
                                                <br />
                                                whenever you need it.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="position-relative wow fadeInUp">
                                        <img src="@/assets/media/trade.png" alt="Image" />
                                        <a href="javascript:void(0)">
                                            <h3
                                                class="d-flex align-items-center justify-content-between gap-3 position-absolute top-0 start-0 ps-5 ps-md-6 pt-8 pt-md-10 pe-3 pe-md-4 w-100">
                                                Trade Algorithm
                                            </h3>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="position-relative wow fadeInUp">
                                        <img src="@/assets/media/trustedsecure.png" alt="Image" />
                                        <a href="javascript:void(0)">
                                            <h3
                                                class="d-flex align-items-center justify-content-between gap-3 position-absolute top-0 start-0 ps-5 ps-md-6 pt-8 pt-md-10 pe-3 pe-md-4 w-100">
                                                Trusted & Secure
                                            </h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="row gy-5 gy-md-6 justify-content-center">
                                <div class="col-md-6 col-lg-12">
                                    <div class="position-relative wow fadeInUp">
                                        <img src="@/assets/media/cardtocrypto.png" alt="Image" />
                                        <a href="javascript:void(0)">
                                            <h3
                                                class="position-absolute top-0 start-0 ps-5 ps-md-6 pt-8 pt-md-10 pe-3 pe-md-4 w-100">
                                                Card-to-crypto purchases
                                            </h3>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-12">
                                    <div class="position-relative wow fadeInUp">
                                        <img src="@/assets/media/automatically.png" alt="Image" />
                                        <a href="javascript:void(0)">
                                            <h3
                                                class="position-absolute bottom-0 start-0 ps-5 ps-md-6 pb-8 pb-md-10 pe-3 pe-md-4 w-100">
                                                Automatically
                                            </h3>
                                        </a>
                                        <a href="javascript:void(0)"
                                            class="trust_security__button cmn-btn px-3 py-2 position-absolute end-0 top-0 rounded-full mt-5 mt-md-6 me-5 me-md-6"><i
                                                class="ti ti-arrow-up-right fs-four"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> -->

            <section class="trust_security pt-28 pb-28">
                <div class="container">
                    <div class="flex flex-col md:flex-row items-end justify-between gap-5 md:gap-6 mb-10 md:mb-15">
                        <div class="lg:w-7/12 xl:w-1/2">
                            <div class="trust_security__title wow fadeInUp">
                                <h2>Trust and Security in Web3</h2>
                                <h2 class="trust_security__title-tstyle">Crypto Exchange</h2>
                            </div>
                        </div>
                        <div class="lg:w-5/12">
                            <p class="wow fadeInUp">
                                Our comprehensive cybersecurity platform, driven by artificial intelligence, not only
                                safeguards your
                                organization.
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-col lg:flex-row gap-5 md:gap-6 justify-center">
                        <div class="lg:w-2/3">
                            <div class="flex flex-col gap-5 md:gap-6 h-full">
                                <div class="relative wow fadeInUp">
                                    <img src="@/assets/media/support227.png" alt="Image" class="w-full" />
                                    <div
                                        class="flex items-center justify-between gap-3 absolute bottom-0 start-0 ps-5 md:ps-6 pb-8 md:pb-10 pe-3 md:pe-4 w-full flex-wrap ">
                                        <a href="javascript:void(0)">
                                            <h3>24/7 Support</h3>
                                        </a>
                                        <p>
                                            Count on us for round-the-clock support, ensuring help
                                            <br />
                                            whenever you need it.
                                        </p>
                                    </div>
                                </div>
                                <div class="flex flex-col md:flex-row gap-5 md:gap-6 h-full">
                                    <div class="relative wow fadeInUp md:w-1/2">
                                        <img src="@/assets/media/trade.png" alt="Image" class="w-full h-full" />
                                        <a href="javascript:void(0)">
                                            <h3
                                                class="flex items-center justify-between gap-3 absolute top-0 start-0 ps-5 md:ps-6 pt-8 md:pt-10 pe-3 md:pe-4 w-full">
                                                Trade Algorithm
                                            </h3>
                                        </a>
                                    </div>
                                    <div class="relative wow fadeInUp md:w-1/2">
                                        <img src="@/assets/media/trustedsecure.png" alt="Image"
                                            class="w-full  h-full" />
                                        <a href="javascript:void(0)">
                                            <h3
                                                class="flex items-center justify-between gap-3 absolute top-0 start-0 ps-5 md:ps-6 pt-8 md:pt-10 pe-3 md:pe-4 w-full">
                                                Trusted & Secure
                                            </h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3">
                            <div class="flex flex-col gap-5 md:gap-6">
                                <div class="relative wow fadeInUp">
                                    <img src="@/assets/media/cardtocrypto.png" alt="Image" class="w-full" />
                                    <a href="javascript:void(0)">
                                        <h3
                                            class="absolute top-0 start-0 ps-5 md:ps-6 pt-8 md:pt-10 pe-3 md:pe-4 w-full">
                                            Card-to-crypto purchases
                                        </h3>
                                    </a>
                                </div>
                                <div class="relative wow fadeInUp">
                                    <img src="@/assets/media/automatically.png" alt="Image" class="w-full" />
                                    <a href="javascript:void(0)">
                                        <h3
                                            class="absolute bottom-0 start-0 ps-5 md:ps-6 pb-8 md:pb-10 pe-3 md:pe-4 w-full">
                                            Automatically
                                        </h3>
                                    </a>
                                    <a href="javascript:void(0)"
                                        class="trust_security__button cmn-btn px-3 py-2 absolute end-0 top-0 rounded-full mt-5 md:mt-6 me-5 md:me-6"><i
                                            class="ti ti-arrow-up-right fs-four"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section class="one_stepshop bg4-color pt-28 pb-28">
                <div class="container">
                    <!-- Header Section -->
                    <div class="grid grid-cols-1 md:grid-cols-2 items-end gap-5 md:gap-6 mb-10 md:mb-15">
                        <div class="md:col-span-1 lg:col-span-1">
                            <h2 class="wow fadeInUp">Your one-step shop for crypto trading</h2>
                        </div>
                        <div class="md:col-span-1 lg:col-span-1 text-center md:text-right">
                            <a href="pricing-plan.html" class="cmn-btn py-3 px-5 md:px-6">VIEW MORE <i
                                    class="ti ti-chevron-right fs-5"></i></a>
                        </div>
                    </div>

                    <!-- Features Section -->
                    <div class="grid grid-cols-12 gap-4 justify-center">
                        <!-- Feature 1 -->
                        <div
                            class="one_stepshop__item col-span-12 lg:col-span-4 justify-center br2 rounded-xl py-8 md:py-10 px-6 md:px-8 text-center wow fadeInUp">
                            <img class="mb-4 md:mb-5 mx-auto" src="@/assets/media/radeallassets.png" alt="Icon" />
                            <h4 class="mb-4 md:mb-5">Trade all the trending assets</h4>
                            <p class="mb-6 md:mb-8">Discover over 400 cryptocurrencies including all the trending new
                                listings.</p>
                            <div class="flex items-center justify-center gap-1">
                                <span class="text-lg">400+</span>
                                <span class="roboto">cryptocurrencies</span>
                            </div>
                        </div>
                        <!-- Feature 2 -->
                        <div
                            class="one_stepshop__item col-span-12 lg:col-span-4 justify-center br2 rounded-xl py-8 md:py-10 px-6 md:px-7 text-center wow fadeInUp">
                            <img class="mb-4 md:mb-5 mx-auto" src="@/assets/media/hedgepoloniex.png" alt="Icon" />
                            <h4 class="mb-4 md:mb-5">Hedge with Poloniex Futures</h4>
                            <p class="mb-6 md:mb-8">Discover over 400 cryptocurrencies including all the trending new
                                listings.</p>
                            <div class="flex items-center justify-center gap-1">
                                <span class="text-lg">100x</span>
                                <span class="roboto">Max leverage</span>
                            </div>
                        </div>
                        <!-- Feature 3 -->
                        <div
                            class="one_stepshop__item col-span-12 lg:col-span-4 justify-center br2 rounded-xl py-8 md:py-10 px-6 md:px-8 text-center wow fadeInUp">
                            <img class="mb-4 md:mb-5 mx-auto" src="@/assets/media/crossmargin.png" alt="Icon" />
                            <h4 class="mb-4 md:mb-5">Cross Margin Trading</h4>
                            <p class="mb-6 md:mb-8">Discover over 400 cryptocurrencies including all the trending new
                                listings.</p>
                            <div class="flex items-center justify-center gap-1">
                                <span class="roboto">cryptocurrencies</span>
                                <span class="text-lg">1%</span>
                                <span class="roboto">cryptocurrencies</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>






            <section class="ready_exhange pt-28 pb-28 bg4-color relative">
                <div class="container">
                    <div class="grid place-items-center">
                        <div class="grid justify-center">
                            <div class="col-span-12 md:col-span-6 xl:col-span-4">
                                <div class="ready_exhange__content  text-center">
                                    <h2 class="mb-5 md:mb-6 wow fadeInUp">Ready to Exchange?</h2>
                                    <p class="mb-8 md:mb-10 wow fadeInUp">
                                        Unlock your Coinx account now to trade crypto seamlessly, without any fees for
                                        buying, selling, or
                                        exchanging. Get started today!
                                    </p>
                                    <div
                                        class="ready_exchange__changenow flex items-center justify-center gap-4 sm:gap-8 lg:gap-10">
                                        <a href="swap.html" class="cmn-btn py-3 px-5 md:px-6 wow fadeInUp"> Exchange Now
                                        </a>
                                        <div class="ready_exchange__changenow-brand wow fadeInUp">
                                            <a href="javascript:void(0)">
                                                <i class="ti ti-brand-google-play p1-color text-lg"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <i class="ti ti-brand-apple p1-color text-lg"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <i class="ti ti-brand-pinterest p1-color text-lg"></i>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <i class="ti ti-brand-behance p1-color text-lg"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>






            <section class="rewards_faq pt-28 pb-28 relative">
                <div class="container">
                    <div class="grid md:grid-cols-2 gap-8 items-center justify-center">
                        <div class="md:col-span-1">
                            <div class="rewards_faq__content">
                                <h2 class="mb-5 md:mb-6 wow fadeInUp">FAQs</h2>
                                <p class="roboto mb-8 md:mb-10 wow fadeInUp">
                                    Explore our FAQs for fast, informative answers to frequently asked questions and
                                    common concerns.
                                </p>
                                <div class="accordion-section">
                                    <div class="accordion-single mb-5 md:mb-6 wow fadeInUp">
                                        <h5 class="header-area flex items-center justify-between">
                                            <button
                                                class="accordion-btn flex items-start relative w-full text-lg font-bold text-left"
                                                type="button">
                                                What currencies does the Coinx Exchange support?
                                            </button>
                                        </h5>
                                        <div class="content-area">
                                            <div class="content-body">
                                                <p>
                                                    These are traditional online platforms where users
                                                    <br />
                                                    create accounts and trade
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Repeat the accordion-single block for each FAQ item -->
                                </div>
                                <div class="flex items-center flex-wrap gap-2 wow fadeInUp">
                                    <span>Can't see your question listed above?</span>
                                    <a href="javascript:void(0)"
                                        class="flex items-center gap-1 text-blue-600 hover:underline">Visit our Help
                                        Center <i class="ti ti-arrow-narrow-right text-lg mt-1"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="md:col-span-1">
                            <div class="rewards_faq__thumb">
                                <img src="@/assets/media/faq-thumb.png" class="max-w-full left-right-animation"
                                    alt="Images" />
                            </div>
                        </div>
                    </div>
                    <!-- <img class="rewards_faq__light absolute top-0 left-0" src="@/assets/media/light-faq.png" alt="Icon"> -->
                </div>
            </section>




            <footer class="footer pt-120 bg5-color">
                <div class="container">
                    <div class="grid grid-cols-12 pb-120">
                        <!-- About Section -->
                        <div class="col-span-1 lg:col-span-6">
                            <div class="footer__decs wow fadeInUp">
                                <a href="index.html">
                                    <h2>Coinx Wallet</h2>
                                </a>
                                <p class="mt-5 mb-8 wow fadeInUp">
                                    Welcome to Coinx, your gateway to the world of Web3 trading! Our user-friendly
                                    platform empowers you to explore a wide range of popular cryptocurrencies
                                </p>

                                <div class="contact_info__card-social flex items-center gap-2 md:gap-3 wow fadeInUp">
                                    <a href="javascript:void(0)">
                                        <i class="ti ti-brand-facebook-filled p4-color fs-four fw-normal p-2"></i>
                                    </a>
                                    <a href="javascript:void(0)">
                                        <i class="ti ti-brand-linkedin p4-color fs-four fw-normal p-2"></i>
                                    </a>
                                    <a href="javascript:void(0)">
                                        <i class="ti ti-brand-instagram p4-color fs-four fw-normal p-2"></i>
                                    </a>
                                    <a href="javascript:void(0)">
                                        <i class="ti ti-brand-twitter-filled p4-color fs-four fw-normal p-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Company Links -->
                        <div class="col-span-1 lg:col-span-2">
                            <div class="footer__discover">
                                <h4 class="mb-6 mb-sm-8 mb-md-10 wow fadeInUp">Company</h4>
                                <ul class="flex flex-col gap-4">
                                    <li class="dropdown flex items-center wow fadeInUp">
                                        <i class="ti ti-arrow-badge-right fs-ten s2-color"></i>
                                        <a href="javascript:void(0)">About Coinx Wallet</a>
                                    </li>
                                    <li class="dropdown flex items-center wow fadeInUp">
                                        <i class="ti ti-arrow-badge-right fs-ten s2-color"></i>
                                        <a href="javascript:void(0)">Join Us</a>
                                    </li>
                                    <li class="dropdown flex items-center wow fadeInUp">
                                        <i class="ti ti-arrow-badge-right fs-ten s2-color"></i>
                                        <a href="javascript:void(0)">Blog</a>
                                    </li>
                                    <li class="dropdown flex items-center wow fadeInUp">
                                        <i class="ti ti-arrow-badge-right fs-ten s2-color"></i>
                                        <a href="javascript:void(0)">Academy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- Security Links -->
                        <div class="col-span-1 lg:col-span-2">
                            <div class="footer__community">
                                <h4 class="mb-6 mb-sm-8 mb-md-10 wow fadeInUp">Security</h4>
                                <ul class="flex flex-col gap-4">
                                    <li class="dropdown flex items-center wow fadeInUp">
                                        <i class="ti ti-arrow-badge-right fs-ten s2-color"></i>
                                        <a href="javascript:void(0)">Contact Validator</a>
                                    </li>
                                    <li class="dropdown flex items-center wow fadeInUp">
                                        <i class="ti ti-arrow-badge-right fs-ten s2-color"></i>
                                        <a href="javascript:void(0)">Protection fund</a>
                                    </li>
                                    <li class="dropdown flex items-center wow fadeInUp">
                                        <i class="ti ti-arrow-badge-right fs-ten s2-color"></i>
                                        <a href="javascript:void(0)">Security</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- Assets Links -->
                        <div class="col-span-1 lg:col-span-2">
                            <div class="footer__community">
                                <h4 class="mb-6 mb-sm-8 mb-md-10 wow fadeInUp">Assets</h4>
                                <ul class="flex flex-col gap-4">
                                    <li class="dropdown flex items-center wow fadeInUp">
                                        <i class="ti ti-arrow-badge-right fs-ten s2-color"></i>
                                        <a href="javascript:void(0)">BNB Chain</a>
                                    </li>
                                    <li class="dropdown flex items-center wow fadeInUp">
                                        <i class="ti ti-arrow-badge-right fs-ten s2-color"></i>
                                        <a href="javascript:void(0)">Ethereum</a>
                                    </li>
                                    <li class="dropdown flex items-center wow fadeInUp">
                                        <i class="ti ti-arrow-badge-right fs-ten s2-color"></i>
                                        <a href="javascript:void(0)">ERC20</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container bg2-color">
                    <div class="flex items-center justify-center py-3 py-sm-4 py-lg-6 ">
                        <div class="col-sm-10 col-xxl-8 text-center md:text-left">
                            <div
                                class="footer__copyright text-center d-flex items-center justify-center md:justify-between flex-wrap">
                                <div class="coyp-rightarea">
                                    <span class="p4-color">Copyright 2024 -
                                        <a href="index.html" class="p4-color">ConiX</a>
                                        All Rights Reserved
                                        <span class="p4-color mx-2">|</span>
                                        Design By
                                        <a href="https://themeforest.net/user/uiaxis" class="p4-color">UIAXIS</a>
                                    </span>
                                </div>

                                <div class="privacy-policay flex items-center gap-3 p4-color">
                                    <a href="javascript:void(0)" class="p4-color">Privacy Policy</a>
                                    <span class="p4-color mx-2">|</span>
                                    <a href="javascript:void(0)" class="p4-color">Cookie Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    </div>
</template>
