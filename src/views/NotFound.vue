<template>
    <main class="page-notfound">
        <img class="icon-sad" src="@/assets/icon-sad.svg" alt="No encontrado">
        <h1 class="main-title">Página no encontrada</h1>

        <router-link to="/">
            Volver a la página de inicio
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