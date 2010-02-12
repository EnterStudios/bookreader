// Tests for BookReaderJSLocate.php

// $$$ TODO -- make the test host configurable/automagic

module("JSLocate");

testHost = 'http://www-testflip.archive.org';

// Set up dummy BookReader class for JSLocate
function BookReader() {
};

BookReader.prototype.init = function() {
    return true;
};

asyncTest("JSLocate for notesonsubmarine00grea", function() {
    expect(1);
    $.getScript(testHost + '/bookreader/BookReaderJSLocate.php?id=amonographonmec00buregoog',
        function(data, textStatus) {
            equals(13, window.br.titleLeaf, 'br object should exist with title leaf 13. See https://bugs.launchpad.net/bookreader/+bug/517424');
            start();
        }
    );
});
