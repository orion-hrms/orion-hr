import AWS from 'aws-sdk';
<script src="https://sdk.amazonaws.com/js/aws-sdk-2.7.16.min.js"></script>
AWS.config.update({
        region: "us-east-1",
        accessKeyId: "AKIARGOKD4YBOZ6DOUQG123",
        secretAccessKey: "CfxIbyOIntjroUShy0NTfSKZTGHXIJk2VBim4Kzq123"
        //remove 123 from accesskey and secretaccesskey
      });
      
var docClient = new AWS.DynamoDB.DocumentClient();


  export function Delete() {
    

      var table = "Forum_content";
  
      var Tittle = document.getElementById("index").value;
  
      var params = {
          TableName:table,
          Key:{
  
              "Tittle":Tittle
          },
  
      };
  
      docClient.delete(params, function(err, data) {
          if (err) {
            //   document.getElementById('textarea').innerHTML = "The conditional delete failed: " + "\n" + JSON.stringify(err, undefined, 2);
            alert('success')
          } else {
            //   document.getElementById('textarea').innerHTML = "The conditional delete succeeded: " + "\n" + JSON.stringify(data, undefined, 2);
            alert('success')
          }
      });
  }

  export function Reload(){

  window.location.reload()
}