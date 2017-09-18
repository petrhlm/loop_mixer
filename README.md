This is a loop mixer made with React and Tone.js, with a p5 canvas in the background. Please feel free to change and improve. 

If you want to import your own sounds, make sure that the Tone.Player objects are synced with the array of players. Also, bear in mind that the positions of the fader are influenced by the distance in pixels the SVG canvases rest from the top of the window. The following code,

<code>let difference = Math.floor((100 - (this.state.tracks[i].level - 2) / 3.46));
      players[i].volume.value = difference - 60;</code>
      
 appears many times and is the equation that links the state of pixel coordinates to the Tone.Player objects in the array.
 
 Feel free to email me if you would like to discuss this, or if there is a better way of doing this.

Regards,

Peter
