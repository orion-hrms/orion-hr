export function upload() {
    var Theme = document.getElementById("Theme").value;
    var Allow_Share = document.getElementById("Allow_Share").value;
    var Allow_Comment = document.getElementById("Allow_Comment").value;
    var Title = document.getElementById("Title").value;
    var Author_Name = document.getElementById("Author_Name").value;
    var contents = document.getElementById("contents").value;
    var Like = 1;
    var Dislike = 0;
    var Time = new Date();

    var api = "https://qotu9d6hfg.execute-api.us-east-1.amazonaws.com/Dev/upload_forum"
    var params =
        {
            "Theme":Theme,
            "Allow_Share":Allow_Share,
            "Allow_Comment":Allow_Comment,
            "Tittle":Title,
            "Author_Name":Author_Name,
            "contents":contents,
            "Like":Like,
            "Dislike":Dislike,
            "Time":Time,

        };
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status ==200 )
            {
                alert(xhttp.responseText);
            }
        };
        xhttp.open("POST", api, false);
        var a = xhttp.send(JSON.stringify(params));

        document.getElementById("Theme").value="";
        document.getElementById("Allow_Share").value="";
        document.getElementById("Allow_Comment").value="";
        document.getElementById("Title").value="";
        document.getElementById("Author_Name").value="";
        document.getElementById("contents").value="";
        
    
  }