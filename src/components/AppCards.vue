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
        <div class="flex justify-evenly">
            <div>
                <select name="card-type" id="card-type">
                    <option value="">--Please choose an option--</option>
                    <option value="alien">Alien</option>
                    
                </select>
            </div>
            <div>
                <h6>{{  }} cards found</h6>
            </div>
        </div>
        <div id="cards">
            <AppSingleCard v-for="(element, index) in store.cardList" />
        </div>
    </main>
</template>


<style lang="scss" scoped></style>