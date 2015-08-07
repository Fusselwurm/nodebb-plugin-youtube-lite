var library = require('../library.js');

var getPostMarkup = function (url) {
    return '<a href="%s" rel="nofollow">%s</a>'.replace(/%s/g, url);
};

var getExpectedMarkup = function (videoId) {
    return library.embedMarkup.replace(/\$2/g, videoId);
};

var exampleVideoId = 'oT3mC-bbhf0';

var assertReplacement = function (youtubeUrlTemplate) {
    var youtubeUrl = youtubeUrlTemplate.replace(/%s/g, exampleVideoId);
    expect(library.getPostContent(getPostMarkup(youtubeUrl))).toEqual(getExpectedMarkup(exampleVideoId));
};

describe('library.parse', function () {
    it('recognizes standard YouTube URLs', function () {
        assertReplacement('http://www.youtube.com/watch?v=%s');
        assertReplacement('https://www.youtube.com/watch?v=%s');
        assertReplacement('https://www.youtube.com/watch?v=%s&list=WL&index=1');
        assertReplacement('https://youtu.be/%s');
    });

    it('replaces more than one link', function () {
        var input = 'more <a href="http://www.youtube.com/watch?v=' + exampleVideoId + '" foo>http://www.youtube.com/watch?v=' + exampleVideoId + '</a>' +
            'and more <a bar href="http://www.youtube.com/watch?v=' + exampleVideoId + '">http://www.youtube.com/watch?v=' + exampleVideoId + '</a> stuff';
        expect(library.getPostContent(input)).toEqual(
             'more ' + getExpectedMarkup(exampleVideoId) + 'and more ' + getExpectedMarkup(exampleVideoId) + ' stuff'
        );
    });

    it('recognizes playlist URLs', function () {
        //assertReplacement()
    });

    it('keeps hands off of unrelated URLs', function () {
        var input = getPostMarkup('http://fooyoutube.bar/watch?w=12345678901');
        expect(library.getPostContent(input)).toEqual(input);

        input = '<a href="http://www.youtube.com/watch?v=12345678901">no shit</a>';
        expect(library.getPostContent(input)).toEqual(input);
    });
});

