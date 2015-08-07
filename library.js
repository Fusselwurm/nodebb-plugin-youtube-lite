(function(module) {
	"use strict";

	var YoutubeLite = {},
		embed = '<div class="js-lazyYT" data-youtube-id="$2" data-width="640" data-height="360"><iframe class="lazytube" src="//www.youtube.com/embed/$2"></iframe></div>';

	var regularUrl = /<a[^>]*>https?:\/\/(?:[a-zA-Z0-9\.\-]+\.)?(youtube\.com|youtu\.be)\/(?:watch\?v=|watch\?t=[^<]*v=|embed\/|)([a-zA-Z0-9_\-]{11})(?:&[^<]*)?<\/a>/g;
        
    YoutubeLite.parse = function(data, callback) {
        if (!data || !data.postData || !data.postData.content) {
            return callback(null, data);
        }
        if (data.postData.content.match(regularUrl)) {
            data.postData.content = YoutubeLite.getPostContent(data.postData.content);
            
        }
        callback(null, data);
    };

    YoutubeLite.getPostContent = function (postContent) {
        return postContent.replace(regularUrl, embed);
    };

	module.exports = YoutubeLite;
    module.exports.embedMarkup = embed;
}(module));
