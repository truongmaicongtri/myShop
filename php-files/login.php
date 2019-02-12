<?php 

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "whatshop_db";


    $conn = new mysqli($servername,$username, $password, $dbname);
    $json = file_get_contents('php://input');
    $obj = json_decode($json, true);

    $user_name = $obj['user_name'];
    $userpassword = $obj['userpassword'];
    $state = "Try Again";


    if ($user_name!=""){
        if ($query= $conn->prepare("SELECT username FROM account WHERE username= ? && password= ? ")){

            $query->bind_param("ss", $user_name, $userpassword);

            $query->execute();
    
            $query->bind_result($result);
    
            $query->fetch();
    
            if ($result!=""){
                $state = "Login successful!";
            } else {
                $state = "Wrong user name or password";
            }
        } 
    } 
    
    echo json_encode($state);

    $conn->close();
?>