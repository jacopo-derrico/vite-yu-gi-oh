import { reactive } from "vue";

export const store = reactive({
    cardType: '',
    loading: false,
    cardList: [],
    apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=42&offset=0',
})