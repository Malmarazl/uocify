<template>
    <main class="page-search">
        <h1 class="main-title">Results of <span>{{query}}</span></h1>
        <b-tabs>
            <b-tab id="tabAll" title="All" active>
                <h2 class="title">Songs <fa-icon icon="chevron-right" class="icon" /></h2>
                <Loader :show="loading"/>
                <track-list v-if="tracks.length > 0" :tracks="tracks.slice(0,6)" />
                <p v-if="tracks.length == 0 && !loading">No songs results</p>

                <h2 class="title">Albums <fa-icon icon="chevron-right" class="icon" /></h2>
                <Loader :show="loading"/>
                <album-list v-if="albums.length > 0" :albums="albums.slice(0,6)" />
                <p v-if="albums.length == 0 && !loading">No albums results</p>

                <h2 class="title">Artists <fa-icon icon="chevron-right" class="icon" /></h2>
                <Loader :show="loading"/>
                <artist-list v-if="artists.length > 0" :artists="artists.slice(0,6)" />
                <p v-if="artists.length == 0 && !loading">No artist results</p>              

            </b-tab>            
            <b-tab id="tabTracks" title="Songs">
                <h2 class="title">{{tracksTotal}} songs</h2>
                <Loader :show="loading"/>
                <track-list v-if="tracks.length > 0" :tracks="tracks" />
                <p v-if="tracks.length == 0 && !loading">No songs results</p>
            </b-tab>
            <b-tab id="tabAlbums" title="Albums">
                <h2 class="title">{{albumsTotal}} albums</h2>
                <Loader :show="loading"/>
                <album-list v-if="albums.length > 0" :albums="albums" />
                <p v-if="albums.length == 0 && !loading">No albums results</p>
            </b-tab>            
            <b-tab id="tabArtists" title="Artists">
                <h2 class="title">{{artistsTotal}} artists</h2>
                <Loader :show="loading"/>
                <artist-list v-if="artists.length > 0" :artists="artists" />
                <p v-if="artists.length == 0 && !loading">No artist results</p>
            </b-tab>
        </b-tabs>
    </main>
</template>

<script>

import api from '@/apis/api.js';

import TrackList from '@/components/Tracks/TrackList'
import AlbumList from '@/components/Albums/AlbumList'
import ArtistList from '@/components/Artists/ArtistList'
import Loader from '@/components/Common/Loader'

export default {
    name:'SearchResults',
    components:{ AlbumList, ArtistList, TrackList, Loader },
    data(){
        return{
            tracks: [],
            albums: [],
            artists: [],
            tracksTotal: 0,
            albumsTotal: 0,
            artistsTotal: 0,
            query: this.$route.params.q || '',
            loading: Boolean
        }
    },    
    watch: {
        '$route.params.q': function (q) {
            if (q != this.query) {
                this.tracks = [];
                this.albums = [];
                this.artists = [];

                this.query= q;
                this.search();
            }
        }
    },
    created() {
        this.search();
    },
    methods: {
        search() {
            try {
                this.loading = true
                this.updateTracks(this.query);
                this.updateAlbums(this.query);
                this.updateArtists(this.query);
            } catch(error) {
                console.log(error)
                this.loading = false
            }
        },
        async updateTracks(param) {
            const response = await api.getTracks(param);
            this.loading = false

            this.tracks = response.data;
            this.tracksTotal = this.tracks.length;
        },
        async updateAlbums(param) {
            const response = await api.getAlbums(param);
            this.loading = false

            this.albums = response.data; 
            this.albumsTotal = this.albums.length;
        },
        async updateArtists(param) {
            const response = await api.getArtists(param);
            this.loading = false

            this.artists = response.data;
            this.artistsTotal = this.artists.length;    
        }
    }
}
</script>

<style lang="scss" >
    .page-search{
        display: flex;
        flex-direction: column;
        height: 100%;

        .main-title {
            margin-bottom: 20px;

            span{
                color: $grey-label;
            }
        }

        .tabs{
            background: white;
            flex: 1;
            height: 100%;
        }

        #tabAll{
            .title{
                font-size: 18px;

                .icon{
                    font-size: 14px;
                    margin-left: 3px;
                }
            }

            .track-list{
                margin-bottom: 30px;
                thead{
                    display: none;
                }
            }

            section{
                margin-bottom: 30px;
            }
        }
    }
</style>