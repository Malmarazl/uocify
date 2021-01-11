const BASE_URL = "https://cors-anywhere.herokuapp.com/https://api.deezer.com";
var services = {};

    services.getPlaylists = () => 
                fetch(`${BASE_URL}/chart/0/playlists`)
                    .then(response => response.json());

    services.getPlaylist = (id) => 
                fetch(`${BASE_URL}/playlist/${id}`)
                    .then(response => response.json());

    services.getAlbums = (param) =>
                fetch(`${BASE_URL}/search/album?q=${param}`)
                    .then(response => response.json());

    services.getTracks = (param) =>
                fetch(`${BASE_URL}/search/track?q=${param}`)
                    .then(response => response.json());
    
    services.getArtists = (param) =>
                fetch(`${BASE_URL}/search/artist?q=${param}`)
                    .then(response => response.json());

export default services;