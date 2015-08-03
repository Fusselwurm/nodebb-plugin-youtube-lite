# NodeBB Youtube Lite Plugin

This NodeBB plugin allows users to embed Youtube videos inline with their posts, the added benefit of using this plugin, is it lazyloads each video when it's needed.
Saving precious time when loading long, youtube heavy topics. A preview image is loaded by default, the video is requested when play is clicked.


## Installation

    npm install nodebb-plugin-youtube-lite


## find link & youtubeID 

    this YouTube URLs are recognized
    
    

<a href="https://www.youtube.com/watch?t=61&amp;v=JozAmXo2bDE" rel="nofollow">https://www.youtube.com/watch?t=61&amp;v=JozAmXo2bDE</a><br>

<a href="https://www.youtube.com/watch?v=VH2QAMMSL40" rel="nofollow">https://www.youtube.com/watch?v=VH2QAMMSL40</a><br>

<a href="http://www.youtube.com/embed/NLqAF9hrVbY" rel="nofollow">http://www.youtube.com/embed/NLqAF9hrVbY</a><br>

<a href="http://youtu.be/NLqAF9hrVbY" rel="nofollow">http://youtu.be/NLqAF9hrVbY</a>



##Changes
    0.3.1
     - Removed forced http from api and pre loaded image. 
    0.2.2
     - Use this version for 0.6.x and up.

    0.2.1
     - Use this version for NodeBB 0.5.x.

    0.1.3:
     - Added support for ref="nofollow" (If you're on a version of NodeBB lower than 0.5.2, you will need to remove ref="nofollow" from library.js)
     - Fixed issue that caused only one video per post to be rendered.

    0.1.1:
     - Better handling of Regex
     - Fallback for Composer so Youtube Video embeds as soon as you post it.
