// Playlist constructor function
// This function creates a new Playlist object with a name, empty songs list, and no current song
function Playlist(name) {
  this.name = name;           // Assigns the playlist name
  this.songs = [];            // Initializes an empty array to hold songs
  this.currentSong = null;    // No song is playing by default
}

// Adds a song to the playlist
Playlist.prototype.addSong = function(songTitle) {
  this.songs.push(songTitle); // Adds the song title to the songs array
};

// Starts playing the first song in the playlist
Playlist.prototype.playFirst = function() {
  if (this.songs.length > 0) {
    this.currentSong = this.songs[0];  // Sets the first song as current
    console.log("Now playing:", this.currentSong); // Outputs current playing song
  }
};

// Skips the current song and plays the next one
Playlist.prototype.skipSong = function() {
  if (this.songs.length > 1) {
    this.songs.shift();  // Removes the current (first) song from the array
    this.currentSong = this.songs[0]; // Updates the current song to next
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    console.log("No more songs to skip."); // Handles end of playlist
  }
};

// Lists all songs in the playlist
Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name);               // Outputs playlist name
  console.log("Songs:", this.songs.join(", "));      // Displays all songs in readable format
};

// Improvement suggestion:
// Instead of modifying the songs array in skipSong(), consider using a pointer (index) to preserve history

// New Method: Shows how many songs are in the playlist
Playlist.prototype.totalSongs = function() {
  console.log(`Total songs in "${this.name}":`, this.songs.length);
};


// Sample usage
let myMix = new Playlist("My Chill Mix");
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");

myMix.playFirst();    // Should log: Now playing: Lofi Study
myMix.skipSong();     // Should log: Skipped! Now playing: Chillhop Beats
myMix.listSongs();    // Should list current playlist
myMix.totalSongs();   // Should display total number of songs
