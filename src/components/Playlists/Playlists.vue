<template>
    <section class="playlists-list row">
            <article v-for="playlist in playlists" :key="playlist.id" class="playlist col-sm-6 col-md-4 col-lg-3 col-xl-3">
                <img class="playslists-cover" @click="goToPlaylist(playlist.id)" :src="playlist.picture_big" :alt="playlist.title">
                <span class="playslists-title">{{ playlist.title }}</span>
            </article>
    </section>
</template>

<script>

export default {
    name: 'playlists',
    props: { playlists: Array },
    data() {
        return {
            Loading: Boolean
        }
    },
    methods: {
        goToPlaylist(id) {
            this.$router.push({
                name: 'playlist',
                params: { q: id },
            }).catch(() => console.log("Error going to playlist"));
        }
    }
}
</script>

<style lang="scss">

    .playlists-list {
        margin-top: 50px;
    }

    .playlist {
        margin-bottom: 15px;
        line-height: 1.9em;
        cursor: pointer;
		&:hover{
			border: 1px solid $grey-medium;
		}
    }

    .playslists-title {
        display: block;
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;   
        font-weight: 600;     
    }

    .playslists-cover {
        width: 100%;
        height: auto;
        margin-bottom: 10px;
        background: $grey-light;
        border: 1px solid $border-color;
    }
</style>