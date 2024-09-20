<template>
    <div>
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
                                <router-link :to="{ name: 'landing' }" class="navbar-brand flex items-center gap-2">
                                    <img src="@/assets/media/logo.png" class="logo" alt="logo" />
                                </router-link>
                                <div class=" flex navbar-collapse justify-center flex-grow" id="navbar-content">
                                    <ul
                                        class="navbar-nav flex items-center gap-5 lg:gap-1 xl:gap-4 2xl:gap-7 py-2 lg:py-0 ml-2 xl:ml-10 2xl:ml-20 pl-0 2xl:pl-10">
                                        <li class="dropdown mr-3">
                                            <router-link :to="{ name: 'landing' }" class="fs-ten">Home</router-link>
                                        </li>

                                        <li class="dropdown mr-3">
                                            <router-link :to="{ name: 'swap' }" class="fs-ten">Swap</router-link>
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
                                    aria-label="Navbar Toggler" data-bs-target="#navbar-content" aria-expanded="true"
                                    id="nav-icon3">
                                    <span></span><span></span><span></span><span></span>
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    </div>
</template>

<script setup lang="ts"></script>