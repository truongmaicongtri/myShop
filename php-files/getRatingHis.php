<?php 

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "whatshop_db";


    $conn = new mysqli($servername,$username, $password, $dbname);

    $parameters = array();
    parse_str($_SERVER['QUERY_STRING'], $parameters);

    $user_name = $parameters['user_name'];

    $query = "SELECT shop_information.shopname, rating_history.ratingstar, rating_history.date
    FROM shop_information, rating_history
    WHERE rating_history.userid='$user_name' && rating_history.shopid=shop_information.shopid ";

    $result = $conn->query($query);
    $bundles = array();

    if ($result->num_rows > 0){
        while ($row = $result->fetch_assoc()){
            array_push($bundles, new Bundle($row['shopname'], $row['ratingstar'],$row['date']));
        }
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