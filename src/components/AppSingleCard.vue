<script>
export default {
    name: 'AppSingleCard',
    props: {
        propsImg: String,
        propsName: String,
        propsType: String
    }
}
</script>


<template>
    <div class="flex-col">
        <figure>
            <img :src="propsImg" :alt="propsName">
        </figure>
        <h4>{{ propsName }}</h4>
        <h6>{{ propsType }}</h6>
    </div>
</template>


<style lang="scss" scoped>
div {
    background-color: #121212;
    color: white;
    padding: 10px;
    border-radius: 10px;

    figure {
        margin-bottom: 15px;
    }

    h4 {
        margin-bottom: 15px;
    }

}
</style>