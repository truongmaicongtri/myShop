<?php 

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "whatshop_db";


    $conn = new mysqli($servername,$username, $password, $dbname);
    $json = file_get_contents('php://input');
    $obj = json_decode($json, true);

    $user_name = $obj['user_name'];
    $firstName = $obj['firstName'];
    $lastName = $obj['lastName'];
    $email = $obj['email'];
    $phone = $obj['phone'];
    $address = $obj['address'];

    if ($user_name!=""){
        if ($query= $conn->prepare("UPDATE user_information
        SET user_information.firstname = ? , user_information.lastname = ? , user_information.email = ? , user_information.phone = ? , user_information.address= ? 
        WHERE user_information.username= ? ")){

            $query->bind_param("ssssss", $firstName, $lastName, $email, $phone, $address, $user_name);

            $query->execute();
    
            echo json_encode("OK");
        } 
    } 

    $conn->close();
?>