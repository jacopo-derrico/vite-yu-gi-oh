<script>
import AppHeader from './components/AppHeader.vue';
import AppCards from './components/AppCards.vue';

import { store } from "./store";
import axios from 'axios';

export default {
    components: {
        AppHeader,
        AppCards
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getCards() {
            store.loading = true;
            axios
                .get(store.apiURLType)
                .then(res => {
                    store.cardType = res.data
                })
            setTimeout(() => {
                axios
                    .get(store.apiURL)
                    .then(res => {
                        store.cardList = res.data.data
                        store.loading = false
                    })
            }, 3000);
        },
        checkBottomScroll() {
            let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
            if (bottomOfWindow) {
                store.cardToShow += 42;
            }
        }
    },
    mounted() {
        this.getCards()

        window.addEventListener('scroll', this.checkBottomScroll);
    }
}
</script>


<template>
    <AppHeader />
    <AppCards />
</template>


<style lang="scss">
@use "./styles/general.scss";
@use "./styles/partials/_mixins.scss";
@use "./styles/partials/_variables.scss";
</style>
