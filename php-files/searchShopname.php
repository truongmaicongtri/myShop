<?php 

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "whatshop_db";


    $conn = new mysqli($servername,$username, $password, $dbname);

    $parameters = array();
    parse_str($_SERVER['QUERY_STRING'], $parameters);

    $shopname = $parameters['shopname'];
    $bundles = [];


    $query = "SELECT shop_information.shopid, shop_information.shopname FROM shop_information WHERE shop_information.shopname LIKE '%{$shopname}%' ORDER BY CASE WHEN shop_information.shopname LIKE '{$shopname}' THEN 0 WHEN shop_information.shopname LIKE '{$shopname}%' THEN 1 WHEN shop_information.shopname LIKE '%{$shopname}' THEN 2 ELSE 3  END  LIMIT 3";

    $result = $conn->query($query);

    if ($result->num_rows > 0){
        while ($row = $result->fetch_assoc()){
            array_push($bundles, new Bundle($row['shopid'], $row['shopname']));
        }
    }


    echo json_encode($bundles);

    class Bundle {
        var $shopId;
        var $shopName;

        
        function Bundle($_shopId , $_shopName){
            $this->shopId = $_shopId ;
            $this->shopName = $_shopName;
        }
    }

    $conn->close();
?>
