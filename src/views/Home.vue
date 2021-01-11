<template>
    <main class="page-home">
        <div class="container">
            <img class="logo" src="@/assets/icon.svg" alt="logo">
            <h1 class="main-title">¿En busca de música?</h1>
            <p class="lorem-textum">Aquí podrás encontrar lo último que se escucha en todas las radios. ¡No te lo pierdas! </p>
            <Loader :show="loading"/>
            <playlists :playlists="playlists" />
        </div>
    </main>
</template>

<script>
    import playlists from '@/components/Playlists/Playlists.vue'
    import Loader from '@/components/Common/Loader'
    import api from '@/apis/api.js';

    export default {
        components: { playlists, Loader },
        name:'Home',
        data() {
            return {
                playlists: [],
                Loading: Boolean
            }
        },
        methods: {
            async loadPlaylists () {
                  const response = await api.getPlaylists();
                  this.loading = false;      
                  this.playlists = response.data;
            }
            
        },
        created() {
            try {
                this.loading = true
                this.loadPlaylists();
            } catch(error) {
                console.log(error)
                this.loading = false;   
            }
        }
    }
</script>

<style lang="scss">
    .page-home{
        text-align: center;
        padding-left:30px;
        padding-right:30px;

        .logo{
            width: 200px;
            margin-top: 35px;
            margin-bottom: 35px;
        }

        .container-thin{
            max-width: 600px;
        }
    }
</style>