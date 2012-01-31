function getVideo(vid) {
    var videoData;
    try {
        $.ajax({
            cache: false,
            async: false,
            data: {
                "alt": "json"
            }, 
            url: "http://gdata.youtube.com/feeds/api/videos/" + vid,
            success: function (json) {
                videoData = typeof json === 'string' ? JSON.parse(json) : json;
            },
            error: function (msg) {
                console.log(msg);
            }
        });
    } 
    catch (e) { 
        console.log(e);
    }

    return videoData ? videoData : null; 
}
