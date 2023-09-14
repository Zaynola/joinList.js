const library = {
    tracks: {
        t01: {
            id: "t01",
            name: "Code Monkey",
            artist: "Jonathan Coulton",
            album: "Thing a Week Three"
        },
        t02: {
            id: "t02",
            name: "Model View Controller",
            artist: "James Dempsey",
            album: "WWDC 2003"
        },
        t03: {
            id: "t03",
            name: "Four Thirty-Three",
            artist: "John Cage",
            album: "Woodstock 1952"
        }
    },
    playlists: {
        p01: {
            id: "p01",
            name: "Coding Music",
            tracks: ["t01", "t02"]
        },
        p02: {
            id: "p02",
            name: "Other Playlist",
            tracks: ["t03"]
        }
    },
    printPlaylists: function () {
        const playlists = this.playlists;
        for (const plays in playlists) {
            const playlist = playlists[plays];
            console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`)
        }
    },
    printTracks: function () {
        const tracks = this.tracks;
        for (const track in tracks) {
            const allTracks = tracks[track];
            console.log(`${allTracks.id}: ${allTracks.name} by ${allTracks.artist} (${allTracks.album})`);
        }
    }
};
library.printPlaylists();
library.printTracks();