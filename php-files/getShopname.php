<?php 

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "whatshop_db";


    $conn = new mysqli($servername,$username, $password, $dbname);

    $parameters = array();
    parse_str($_SERVER['QUERY_STRING'], $parameters);

    $shopid = $parameters['shopid'];

    $query = "SELECT shop_information.shopname
    FROM shop_information
    WHERE shop_information.shopid='{$shopid}'";

    $result = $conn->query($query);

    $row = $result->fetch_assoc();

    $shopname = $row['shopname'];

    echo $shopname;
    $conn->close();
?>