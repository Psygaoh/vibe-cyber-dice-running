# Sound Files Required

This directory needs the following audio files for the game to have sound:

## Required Files

1. `main_ost.mp3`: Background music
   - Style: Cyberpunk/synthwave
   - Length: 2-3 minutes (will loop)
   - Format: MP3 (128kbps or higher)
   - Volume: Moderate (will be played at 20% in-game)

2. `hack-success.mp3`: Success sound effect
   - Style: Short digital "beep" or "ping"
   - Length: 0.3-0.5 seconds
   - Format: MP3
   - Volume: Moderate (will be played at 50% in-game)

3. `hack-failed.mp3`: Failure sound effect
   - Style: Short digital "buzz" or "error"
   - Length: 0.2-0.4 seconds
   - Format: MP3
   - Volume: Moderate (will be played at 30% in-game)

## File Structure
Place these files directly in this directory:
```
public/sounds/
├── main_ost.mp3
├── hack-success.mp3
└── hack-failed.mp3
```

## Note
The game will run without these files, but will have no sound. Add the files to enable the full audio experience.

You can obtain these sounds from:
1. Free sound effect libraries (e.g., freesound.org)
2. Create them using a synthesizer
3. Purchase them from a sound effect marketplace 