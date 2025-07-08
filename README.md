# CS81 Module 6A – Playlist Object Code Review

This project is part of **Module 6 Assignment 6A** for Santa Monica College's CS81 JavaScript Programming course.  
It focuses on understanding and documenting how constructor functions and prototype methods work in JavaScript by reviewing a playlist manager object.

---

## Repository Structure

```
.
├── playlist.js        # Original playlist object with added comments and one new method
├── REFLECTION.md      # Reflection on key concepts and learning takeaways
└── README.md          # This project overview and setup instructions
```

---

## Objectives

- Understand how constructor functions define object structure
- Explain the role of `this` in object methods
- Practice analyzing and annotating working JavaScript code
- Extend an object by writing a custom method
- Reflect on object behavior and improvement opportunities

---

## Features in `playlist.js`

The following functionality is included and annotated with detailed comments:

- `Playlist(name)`  
  → Constructor function that initializes playlist name, an empty song list, and a `currentSong`.

- `.addSong(title)`  
  → Adds a new song to the end of the playlist.

- `.playFirst()`  
  → Starts playing the first song (if available) and sets `currentSong`.

- `.skipSong()`  
  → Removes the current song and moves to the next one, or gives a message if none left.

- `.listSongs()`  
  → Prints the playlist name and full song list as a string.

- 🔧 **New Method Added: `.shuffle()`**  
  → Randomizes the order of the songs in the playlist. Added to extend object behavior.

---

## Setup & Usage

1. Clone the repository:
```bash
git clone https://github.com/sergehall/cs81-module6a-review
cd cs81-module6a-review
```

2. Open `playlist.js` in any modern JavaScript environment or browser console to run the example.

---

## Sample Output

```
Now playing: Lofi Study
Skipped! Now playing: Chillhop Beats
Playlist: My Chill Mix
Songs: Chillhop Beats, Evening Jazz
```

---

## Git Commit History

 Includes at least 3 meaningful commits:
- `init: setup cs81-module6a-review project with initial playlist.js`
- `docs: added detailed comments explaining object methods and constructor`
- `feat: added shuffle() method to playlist object`
- `docs: completed REFLECTION.md with thoughtful responses`

---

## License

This repository is for academic use only as part of the CS81 JavaScript Programming course at Santa Monica College.
