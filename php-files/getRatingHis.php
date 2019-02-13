<?php 

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "whatshop_db";


    $conn = new mysqli($servername,$username, $password, $dbname);

    $parameters = array();
    parse_str($_SERVER['QUERY_STRING'], $parameters);

    $user_name = $parameters['user_name'];
    $bundles = array();

    if ($query= $conn->prepare("SELECT shop_information.shopname, rating_history.ratingstar, rating_history.date
    FROM shop_information, rating_history
    WHERE rating_history.userid=? && rating_history.shopid=shop_information.shopid")){

        $query->bind_param("s", $user_name);

        $query->execute();

        $query->bind_result($shopname, $ratingstar, $date);
        
        while ($query->fetch()) {
            array_push($bundles, new Bundle($shopname, $ratingstar ,$date ));
        }

        $query->close();
    } 

    echo json_encode($bundles);

    class Bundle{
        var $shopname;
        var $ratingstar;
        var $date;
        
        function Bundle($_shopname,$_ratingstar,$_date){
            $this -> shopname = $_shopname;
            $this -> ratingstar = $_ratingstar;
            $this -> date = $_date;
        }
    }
    $conn->close();
?>