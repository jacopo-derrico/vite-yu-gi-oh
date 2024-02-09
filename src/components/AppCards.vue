<script>
import AppSingleCard from './AppSingleCard.vue';

import { store } from "../store";
export default {
    name: 'AppCards',
    data() {
        return {
            store
        };
    },
    components: { AppSingleCard }
}
</script>


<template>
    <main>
        <div id="cards-search" class="col-10 flex justify-between m-center">
            <div>
                <select name="card-type" id="card-type">
                    <option value="">--Please choose an option--</option>
                    <option value="alien">Alien</option>

                </select>
            </div>
            <div>
                <h6>{{ }} cards found</h6>
            </div>
        </div>
        <div id="cards" class="col-10 flex flex-wrap m-center">
            <AppSingleCard class="card" v-for="(element, index) in store.cardList" ::key="index"
                :propsImg="store.cardList[index].card_images[0].image_url" :propsName="store.cardList[index].name"
                :propsType="store.cardList[index].archetype"/>
        </div>
    </main>
</template>


<style lang="scss" scoped>
#cards-search {
    margin-block: 50px;
}
#cards {
    gap: 15px;

    .card {
        flex-basis: calc((100% / 6) - 15px + (15px/6));

        
    }
}
</style>