<?php 

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "whatshop_db";


    $conn = new mysqli($servername,$username, $password, $dbname);

    $parameters = array();
    parse_str($_SERVER['QUERY_STRING'], $parameters);

    $user_name = $parameters['user_name'];

    $query = "SELECT shop_information.shopname, order_history.ordertime, order_history.orderid, order_history.amount, order_history.paymentType, order_history.address
    FROM shop_information, order_history
    WHERE order_history.userid='{$user_name}' && shop_information.shopid=order_history.shopid";

    $result = $conn->query($query);
    $bundles = array();

    if ($result->num_rows > 0){
        while ($row = $result->fetch_assoc()){
            array_push($bundles, new Bundle($row['shopname'], $row['ordertime'],$row['orderid'], $row['amount'],$row['paymentType'], $row['address']));
        }
    }

    echo json_encode($bundles);

    class Bundle{
        var $shopname;
        var $ordertime;
        var $orderid;
        var $amount;
        var $paymentType;
        var $address;
        
        function Bundle($_shopname,$_ordertime,$_orderid,$_amount,$_paymentType,$_address){
            $this -> shopname = $_shopname;
            $this -> ordertime = $_ordertime;
            $this -> orderid = $_orderid;
            $this -> amount = $_amount;
            $this -> paymentType = $_paymentType;
            $this -> address = $_address;
        }
    }
    $conn->close();
?>