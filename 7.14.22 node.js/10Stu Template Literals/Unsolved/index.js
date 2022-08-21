// done: music should be an object with title, artist, and album properties
const music = {
  title: 'Title',
  artist: 'Artist',
  album: 'Album'
};

// done: Write code between the backticks tags to output the data from the music object above.
const songSnippet = 
`title: ${music.title}
artist: ${music.artist}
album: ${music.album}`;

console.log(songSnippet);