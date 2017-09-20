This is a loop mixer made with React and Tone.js, with a p5 canvas in the background. Please feel free to change and improve. 

If you want to import your own sounds, make sure that the Tone.Player objects are synced with the array of players and the Mixer component state, which contains the pixel coordinates. Also, bear in mind that the positions of the fader are influenced by the distance in pixels the SVG canvases rest from the top of the window. The following code,

<code>let difference = Math.floor((100 - (this.state.tracks[i].level - 2) / 3.46));
      players[i].volume.value = difference - 60;</code>
      
 appears many times and is the equation that links the state of pixel coordinates to the volume levels of the Tone.Player objects in the array of players.
 
 Feel free to email me if you would like to discuss this, or if you would like to provide feedback on a better way of doing this. This project lacks modularity, but I felt that it was best to make the Tone.Player objects global instead of putting them in their own component. The players cannot update, so I felt it was safer to put them outside the Mixer component in the Mixer.js file.
 
I intend to improve on this model in future projects, and then eventually return to this.

Regards,

Peter
