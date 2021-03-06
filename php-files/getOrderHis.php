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

    if ($query= $conn->prepare("SELECT shop_information.shopname, order_history.state, order_history.ordertime, order_history.orderid, order_history.amount, order_history.paymentType, order_history.address 
    FROM shop_information, order_history 
    WHERE order_history.userid=? && shop_information.shopid=order_history.shopid 
    ORDER BY order_history.state ASC, order_history.ordertime DESC")){

        $query->bind_param("s", $user_name);

        $query->execute();

        $query->bind_result($shopname, $state, $ordertime, $orderid, $amount, $paymentType, $address);
        
        while ($query->fetch()) {
            array_push($bundles, new Bundle($shopname, $state, $ordertime,$orderid, $amount,$paymentType, $address) );
        }

        $query->close();
    } 

    echo json_encode($bundles);

    class Bundle{
        var $shopname;
        var $state;
        var $ordertime;
        var $orderid;
        var $amount;
        var $paymentType;
        var $address;
        
        function Bundle($_shopname,$_state ,$_ordertime,$_orderid,$_amount,$_paymentType,$_address){
            $this -> shopname = $_shopname;
            $this -> state = $_state;
            $this -> ordertime = $_ordertime;
            $this -> orderid = $_orderid;
            $this -> amount = $_amount;
            $this -> paymentType = $_paymentType;
            $this -> address = $_address;
        }
    }
    $conn->close();
?>