<?php 

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "whatshop_db";


    $conn = new mysqli($servername,$username, $password, $dbname);

    $parameters = array();
    parse_str($_SERVER['QUERY_STRING'], $parameters);

    $shopid = $parameters['shopid'];

    if ($query= $conn->prepare("SELECT shop_information.shopname
        FROM shop_information
        WHERE shop_information.shopid=?")){

        $query->bind_param("s", $shopid);

        $query->execute();

        $query->bind_result($result);

        $query->fetch();
    } 

    $shopname = $result;

    echo json_encode($shopname);
    $conn->close();
?>