
var video_player = document.querySelector("#videoPlayer");
var already_clicked  = false;
function handleClick(){
    if(already_clicked){
        return;
    }
    already_clicked = true;
    var url = document.querySelector("#url");
    if(url.value.indexOf("mpd") != -1){
        var player = dashjs.MediaPlayer().create();
        player.initialize(document.querySelector("#videoPlayer"), url.value, true);
        already_clicked = false;
        return;
    }
    var temp_d = url.value.split("/")
    var id = temp_d[temp_d.length-1];
    console.log(id);
    fetch("https://diskuploader.entertainvideo.com/v1/file/cdnurl?param="+id)
    .then(res => res.json())
    .then((res)=> {
        console.log(res);
        already_clicked = false;
        if(res.source){
            video_player.style.display="block"

            var player = dashjs.MediaPlayer().create();
            player.initialize(document.querySelector("#videoPlayer"), res.source, true);
        
        }
    })
    already_clicked = false;

}

