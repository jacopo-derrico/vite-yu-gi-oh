import { reactive } from "vue";

export const store = reactive({
    cardType: '',
    loading: false,
    cardList: [],
    cardToShow: 42,
    apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
})