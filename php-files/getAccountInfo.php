<?php 

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "whatshop_db";


    $conn = new mysqli($servername,$username, $password, $dbname);

    $parameters = array();
    parse_str($_SERVER['QUERY_STRING'], $parameters);

    $user_name = $parameters['user_name'];

    $query = "SELECT user_information.firstname, user_information.lastname, user_information.email, user_information.phone, user_information.address
    FROM user_information
    WHERE user_information.username = '{$user_name}'";

    $result = $conn->query($query);

    $row = $result->fetch_assoc();

    $bundles = new Bundle($row['firstname'], $row['lastname'],$row['email'], $row['phone'],$row['address']);


    echo json_encode($bundles);


    class Bundle{
        var $firstname;
        var $lastname;
        var $email;
        var $phone;
        var $address;        

        function Bundle($_firstname,$_lastname,$_email,$_phone,$_address ){
            $this -> firstname = $_firstname;
            $this -> lastname = $_lastname;
            $this -> email = $_email;
            $this -> phone = $_phone;
            $this -> address = $_address;
        }
    }
    $conn->close();
?>