<html>
    <head>
        <title>
            SEARCH BAR
        </title>
        
        <link rel = "icon" href="images/cv.png" type="image/x-icon"> 
        <mata charaset="utf-8">
        <mata name="viewport" content="width=device-width , initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">



    </head>

    <body>
        <br>
        <h1 align="center">SEARCH  IT</h1>
        <br>
        <input style="margin-left: 85px;" type="text" id="input" placeholder="Search by name ..." SIZE="50"  onkeyup="search()">
        <br><br>
        <center>
            <table id="table" border="1">


                <tr height="50" bgcolor="lightgray" class="header">
                    <td width="400" align="center">NAME</td>
                    <td width="400" align="center">SEMESTER</td>
                    <td width="400" align="center">FEILD</td>
                </tr>
    
    
                 

                <tr height="40"  bgcolor="">
                    <td width="400" align="center">M SHAHMIR KHAN</td>
                    <td width="400" align="center">3rd</td>
                    <td width="400" align="center">front-end</td>
                </tr>

                 

                <tr height="40"  bgcolor="">
                    <td width="400" align="center">RASHID</td>
                    <td width="400" align="center">3rd</td>
                    <td width="400" align="center">front-end</td>
                </tr>

                 

                <tr height="40"  bgcolor="">
                    <td width="400" align="center">WALEED</td>
                    <td width="400" align="center">3rd</td>
                    <td width="400" align="center">front-end</td>
                </tr>
            

             </table>
        </center>

        <script>
            function search(){
                var inputV=document.getElementById("input");
                var filler=inputV.value.toUpperCase();

                var tableV=document.getElementById("table");
                var trV=tableV.getElementsByTagName("tr");

                for(i=0 ; i<trV.length ; i++){
                    var td=trV[i].getElementsByTagName('td')[0];
                    if(td){
                        formate=td.textContent || td.innerText;
                        if(formate.toUpperCase().indexOf(filler) > -1){  
                            trV[i].style.display="";
                        }else{
                            trV[i].style.display="none";
                        }//else
                    }//outter if
                }
            }//function
        </script>



        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>

    </body>
</html>    
