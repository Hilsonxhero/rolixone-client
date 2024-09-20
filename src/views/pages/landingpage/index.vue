<script setup lang="ts">
import { ref, onMounted } from 'vue';
import 'aos/dist/aos.css';
import AOS from 'aos';

onMounted(() => {
    AOS.init();
});
</script>

<template>
    <div class="lp-wraper">


        <div>
            <button class="scrollToTop d-none d-md-flex d-center" aria-label="scroll Bar Button">
                <i class="ti ti-chevron-up fs-four p6-color"></i>
            </button>





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






        </div>
    </div>
</template>
