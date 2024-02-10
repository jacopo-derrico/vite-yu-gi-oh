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
    components: { AppSingleCard, AppLoader }
}
</script>


<template>
    <main id="allCards">
        <div id="cards-search" class="col-10 flex justify-between m-center">
            <div class="flex align-center">
                <select name="card-type" id="card-type">
                    <option value="">All type</option>
                    <option value="alien">Alien</option>

                </select>
            </div>
            <div class="flex align-center">
                <h6>{{ store.cardList.length }} cards found</h6>
            </div>
        </div>
        <AppLoader v-if="(store.loading)" />
        <div v-else id="cards" class="col-10 flex flex-wrap m-center">
            <!-- <AppSingleCard class="card" v-for="(element, index) in store.cardList" :key="index"
                :propsImg="store.cardList[index].card_images[0].image_url" :propsName="store.cardList[index].name"
                :propsType="store.cardList[index].archetype" /> -->
                <AppSingleCard class="card" v-for="(element, index) in store.cardList.slice(0, store.cardToShow)" :key="index"
                :propsImg="store.cardList[index].card_images[0].image_url" :propsName="store.cardList[index].name"
                :propsType="store.cardList[index].archetype" />
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