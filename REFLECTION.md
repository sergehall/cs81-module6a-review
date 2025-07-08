# REFLECTION.md

### What was the hardest part to understand?
The most challenging part was understanding how `this` works differently depending on context. For example, inside prototype methods, `this` always refers to the instance of the Playlist, not the method or global object.

### How does this code use `this` to tie data and behavior together?
Each method uses `this` to access or modify the instance’s internal data — such as `this.songs` or `this.currentSong`. This links object data (state) and behavior (methods) into a cohesive unit.

### What would you do differently if you wrote this object from scratch?
I would avoid modifying the original songs array in the `skipSong()` method. Instead, I’d use a `currentIndex` to track the song being played. That would preserve the full playlist and allow going back to previous songs too.
