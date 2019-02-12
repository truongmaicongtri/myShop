<?php 

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "whatshop_db";


    $conn = new mysqli($servername,$username, $password, $dbname);

    $parameters = array();
    parse_str($_SERVER['QUERY_STRING'], $parameters);

    $shopid = $parameters['shopid'];

    $query = "SELECT notification.detail, notification.date 
    FROM notification
    WHERE notification.shopid='{$shopid}'";

    $result = $conn->query($query);
    $bundles = array();

    if ($result->num_rows > 0){
        while ($row = $result->fetch_assoc()){
            array_push($bundles, new Bundle($row['detail'], $row['date']));
        }
    }

    echo json_encode($bundles);

    class Bundle{
        var $detail;
        var $date;
        

        function Bundle($_detail,$_date){
            $this -> detail = $_detail;
            $this -> date = $_date;
        }
    }
    $conn->close();
?>