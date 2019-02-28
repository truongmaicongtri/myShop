<?php 

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "whatshop_db";


    $conn = new mysqli($servername,$username, $password, $dbname);

    $parameters = array();
    parse_str($_SERVER['QUERY_STRING'], $parameters);

    $shopName = $parameters['shopname'];
    $param1 = "%{$shopName}%";
    $param2 = "{$shopName}";
    $param3 = "{$shopName}%";
    $param4 = "%{$shopName}";
    $bundles = [];

    if ($query= $conn->prepare("SELECT shop_information.shopid, shop_information.shopname FROM shop_information WHERE shop_information.shopname
    LIKE ? ORDER BY CASE WHEN shop_information.shopname LIKE ? THEN 0 WHEN shop_information.shopname
     LIKE ? THEN 1 WHEN shop_information.shopname LIKE ? THEN 2 ELSE 3  END  
     LIMIT 3")){

        $query->bind_param("ssss", $param1, $param2, $param3, $param4);

        $query->execute();

        $query->bind_result($shopid, $shopname);
        
        while ($query->fetch()) {
            array_push($bundles, new Bundle($shopid, $shopname));
        }

        $query->close();
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
