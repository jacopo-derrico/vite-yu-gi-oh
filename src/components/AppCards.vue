<script>
import AppSingleCard from './AppSingleCard.vue';
import AppLoader from './AppLoader.vue';

import { store } from "../store";

export default {
    name: 'AppCards',
    data() {
        return {
            store
        };
    },
    components: { AppSingleCard, AppLoader },
    computed: {
        filteredCardsLength() {
            return this.filteredCards.length;
        },
        filteredCards() {
            if (this.store.selectedType === 'All type') {
                return this.store.cardList;
            } else if (this.store.selectedType === 'No type') {
                return this.store.cardList
                    .filter(card => card.archetype === undefined);
            } else {
                return this.store.cardList
                    .filter(card => card.archetype === this.store.selectedType);
            }
        }
    }
}
</script>


<template>
    <main id="allCards">
        <div id="cards-search" class="col-10 flex justify-between m-center">
            <div class="flex align-center">
                <select v-model="store.selectedType">
                    <option value="All type" selected>All type</option>
                    <option value="No type" selected>No type</option>
                    <option v-for="(element, index) in store.cardType" :value="element.archetype_name">
                        {{ element.archetype_name }}</option>
                </select>
            </div>
            <div class="flex align-center">
                <h6>{{ this.filteredCardsLength }} cards found</h6>
            </div>
        </div>
        <AppLoader v-if="(store.loading)" />
        <div v-else id="cards" class="col-10 flex flex-wrap m-center">
            <AppSingleCard class="card" v-for="(element, index) in filteredCards.slice(0, store.cardToShow)" :key="index"
                :propsImg="element.card_images[0].image_url" :propsName="element.name" :propsType="element.archetype" />
        </div>
    </main>
</template>


<style lang="scss" scoped>
main {
    margin-block: 120px;
}

#cards-search {
    margin-block: 50px;
    color: white;

    h6 {
        font-size: 15px;
    }
}

#cards {
    gap: 15px;

    .card {
        flex-basis: calc((100% / 6) - 15px + (15px/6));

        &:hover {
            filter: drop-shadow(0 0 0.75rem #D9AB2E);
            border: 2px solid #D9AB2E;
        }
    }
}
</style>