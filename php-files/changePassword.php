<?php 

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "whatshop_db";


    $conn = new mysqli($servername,$username, $password, $dbname);
    $json = file_get_contents('php://input');
    $obj = json_decode($json, true);

    $user_name = $obj['user_name'];
    $newpassword = $obj['newpassword'];

    if ($user_name!=""){
        if ($query= $conn->prepare("UPDATE account
        SET account.username=?, account.password=? 
        WHERE account.username=? ")){

            $query->bind_param("sss", $user_name, $newpassword, $user_name);

            $query->execute();
    
            echo json_encode("OK");
        } 
    } 

    $conn->close();
?>