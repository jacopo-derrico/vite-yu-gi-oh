import { reactive } from "vue";

export const store = reactive({
    cardType: '',
    loading: false,
    cardList: [],
    cardToShow: 42,
    cardType: [],
    selectedType: 'All type',
    apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    apiURLType: 'https://db.ygoprodeck.com/api/v7/archetypes.php'
})