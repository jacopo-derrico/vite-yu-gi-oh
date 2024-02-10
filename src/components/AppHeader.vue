<script>
export default {
    name: 'AppHeader',
}
</script>


<template>
    <header class="w-100">
        <div class="col-10 flex align-center m-center">
            <figure>
                <img src="../assets/img/logo.png" alt="Yu-gi-oh! logo">
            </figure>
            <h1>Yu-gi-oh! card viewer</h1>
        </div>
    </header>
</template>


<style lang="scss" scoped>
header {
    background-color: rgba(255, 255, 255, 0.2);
    padding-block: 20px;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    position: fixed;
    top: 0;
    z-index: 99;

    figure {
        width: 100px;
        margin-right: 30px;
    }

    h1 {
        font-size: 20px;
        color: white;
    }
}
</style>