<template>
    <main class="page-notfound">
        <img class="icon-sad" src="@/assets/icon-sad.svg" alt="No encontrado">
        <h1 class="main-title">Page not found</h1>

        <router-link to="/">
           Return to homepage
        </router-link>
    </main>
</template>

<script>
export default {
    name:'NotFound'
}
</script>


<style lang="scss" >
    .page-notfound{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top:200px;

        .icon-sad{
            width: 100px;
            margin-bottom: 20px;
        }
    }
</style>