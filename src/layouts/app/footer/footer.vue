<template>
    <footer class="footer pt-120 bg5-color">
        <div class="container">
            <div class="grid grid-cols-12 pb-120">
                <!-- About Section -->
                <div class="col-span-1 lg:col-span-6">
                    <div class="footer__decs wow fadeInUp">
                        <router-link :to="{ name: 'landing' }">
                            <h2>Coinx Wallet</h2>
                        </router-link>
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

</template>

<script setup lang="ts"></script>