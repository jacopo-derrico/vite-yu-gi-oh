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
            setTimeout(() => {
                axios
                    .get(store.apiURL)
                    .then(res => {
                        store.cardList = res.data.data
                        store.loading = false
                    })
            }, 3000);
        }
    },
    mounted() {
        this.getCards()
    },
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
