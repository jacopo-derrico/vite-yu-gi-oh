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
    position: relative;
    figure {
        margin-bottom: 15px;
        z-index: 2;
    }
    h4 {
        margin-bottom: 15px;
        z-index: 2;
    }
    h6 {
        z-index: 2;
    }
    &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.2);
    }
}
</style>