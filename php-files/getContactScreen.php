<?php 

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "whatshop_db";


    $conn = new mysqli($servername,$username, $password, $dbname);

    $parameters = array();
    parse_str($_SERVER['QUERY_STRING'], $parameters);

    $shopid = $parameters['shopid'];

    $query = "SELECT shop_information.latitude,
     shop_information.longitude, 
     shop_information.address, 
     shop_information.cellphone, 
     shop_information.email, shop_information.phone 
    FROM shop_information
    WHERE shop_information.shopid='{$shopid}'";

    $result = $conn->query($query);

    if ($result->num_rows > 0){
        $row = $result->fetch_assoc();
        $bundle = new Bundle($row['latitude'],$row['longitude']
            ,$row['address'],$row['cellphone'],$row['email'],$row['phone']);
    }

    echo json_encode($bundle);

    class Bundle{
        var $latitude;
        var $longitude;
        var $address;
        var $cellphone;
        var $email;
        var $phone;

        function Bundle($_latitude,$_longitude,$_address,$_cellphone,$_email, $_phone){
            $this -> latitude = $_latitude;
            $this -> longitude = $_longitude;
            $this -> address = $_address;
            $this -> cellphone = $_cellphone;
            $this -> email = $_email;
            $this -> phone = $_phone;
        }
    }
    $conn->close();
?>