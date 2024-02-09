<script>
import AppHeader from './components/AppHeader.vue';
import AppCards from './components/AppCards.vue';

import { store } from "./store";
import axios from 'axios';

export default {
    components: {
        AppHeader,
    },
    data() {
        return {
            store,
        }
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
