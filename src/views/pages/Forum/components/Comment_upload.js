export function Comment_upload() {

    var Title = document.getElementById("Title").value;
    var Comment = document.getElementById("Comment").value;
    var Time = new Date();

    var api = "https://suxbwyzp0l.execute-api.us-east-1.amazonaws.com/Dev/"
    var params =
        {

            "Title":Title,
            "Comment":Comment,
            "Time":Time


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
        document.getElementById("Title").value="";
        document.getElementById("Comment").value="";

        
    
  }