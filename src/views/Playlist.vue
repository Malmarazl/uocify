<template>
    <main>
        <figure class="playlist-list row">
            <img class="playslist-cover" :src="playlist.picture_big" :alt="playlist.title">
            <div v-if="!loading">
                <p class="playlist-data"><span>Título: </span>{{ playlist.title }}</p>
                <p class="playlist-data"> <span>Descripción: </span>{{ playlist.description }}</p>
                <p class="playlist-data"> <span>Número de canciones: </span>{{ playlist.nb_tracks }}</p>
                <p class="playlist-data"> <span>Fans: </span>{{ playlist.fans | formatNumber}}</p>
            </div>
        </figure>
        <track-list v-if="tracks.length > 0" :tracks="tracks" />
        <Loader :show="loading"/>
    </main>
</template>

<script>
import TrackList from '@/components/Tracks/TrackList'
import Loader from '@/components/Common/Loader'
import api from '@/apis/api.js';

export default {
    name: 'Playlist',
    components:{ TrackList, Loader },
    data() {
        return {
            playlist: Object,
            tracks: [],
            id: this.$route.params.q,
            loading: Boolean
        }
    },
    watch: {
        '$route.params.q': function (q) {
            this.id = q;
        }
    },
    methods: {
        async loadPlaylist (id) {
            const response = await api.getPlaylist(id);
            this.loading = false;

            this.playlist = response;       
            this.tracks = response.tracks.data;
        }
    },
    created() {
        try {
            this.loading = true;
            this.loadPlaylist(this.id);
        } catch (error) {
            console.log(error)
            this.loading = false;
        }
    }
}
</script>


<style lang="scss">
    .playlist-list {
        margin: 0;
        display: flex;
        margin-bottom: 50px;

        div {
            padding: 20px;
            width: 60%;
        }
    }

    .playlist-data {
        span {
            font-weight: 600;
        }
    }

    figure {
        padding: 10px;
        background-color: $bg-color-playlist;
    }

    .playslist-cover {
        height: auto;
        margin-bottom: 10px;
        background: $grey-light;
        border: 1px solid $border-color;
        margin-right: 20px;
    }
</style>