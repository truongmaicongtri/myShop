<?php 

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "myshop_db";


    $conn = new mysqli($servername,$username, $password, $dbname);
    $json = file_get_contents('php://input');
    $obj = json_decode($json, true);

    $user_name = $obj['user_name'];
    $userpassword = $obj['userpassword'];


    if ($user_name!=""){
        $query= $conn->prepare("SELECT userid FROM account WHERE username= ? && password= ? ");
        $query->bind_param("ss", $user_name, $userpassword);

        $query->execute();

        $query->bind_result($result);

        $query->fetch();

        if ($result!=''){
            echo json_encode('Login successful!');
        } else {
            echo json_encode('Wrong user name or password');
        }
    } else {
        echo json_encode('Try Again');
    }
    $conn->close();
?>