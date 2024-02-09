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


<style lang="scss" scoped></style>