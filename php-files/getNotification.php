<?php 

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "whatshop_db";


    $conn = new mysqli($servername,$username, $password, $dbname);

    $parameters = array();
    parse_str($_SERVER['QUERY_STRING'], $parameters);

    $shopid = $parameters['shopid'];

    $bundles = array();

    if ($query= $conn->prepare("SELECT notification.detail, notification.date 
        FROM notification
        WHERE notification.shopid= ? ")){

        $query->bind_param("s", $shopid);

        $query->execute();

        $query->bind_result($detail, $date);
            
        while ($query->fetch()) {
            array_push($bundles, new Bundle($detail, $date));
        }

        $query->close();
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