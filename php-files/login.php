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
        if ($query= $conn->prepare("SELECT password FROM account WHERE username= ? ")){

            $query->bind_param("s", $user_name);

            $query->execute();
    
            $query->bind_result($result);
    
            $query->fetch();
    
            if (password_verify($userpassword, $result)){
                $state = "Login successful!";
            } else {
                $state = "Wrong user name or password";
            }
        } 
    } 
    
    echo json_encode($state);

    $conn->close();
?>