module("myapp module");

test('getVideo', function () {
    var vid = 'XRzU_em6h80';
    var data = getVideo(vid);
    ok(data);
    equals(data.entry.title.$t, 'KYOSUKE HIMURO GIG at TOKYO DOME');
});
