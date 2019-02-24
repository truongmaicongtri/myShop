<?php 

    try {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "whatshop_db";
    
    
        $conn = new mysqli($servername,$username, $password, $dbname);
        $json = file_get_contents('php://input');
        $obj = json_decode($json, true);
    
        $state = "processing";
        $address = "";
        $orderTime = $obj['orderTime'];
        $amount = $obj['amount'];
        $paymentType = $obj['paymentType'];
        $shopId = $obj['shopId'];
        $user_name = $obj['user_name'];
        $cart = $obj['cart'];
    
        $query= "SELECT user_information.address FROM user_information WHERE user_information.username= '{$user_name}'";
        $result = $conn->query($query);
        $row = $result->fetch_assoc();
        $address = $row['address'];
        $orderId="";
    
        $query= "INSERT INTO order_history (state, ordertime, amount, paymentType, address, shopid, userid) VALUES ( '{$state}', '{$orderTime}', '{$amount}', '{$paymentType}', '{$address}', '{$shopId}', '{$user_name}' )";
    
        if ($conn->query($query) === TRUE) {
            $orderId = $conn->insert_id;
        } 
    
        foreach ($cart as $cartItem) {
            $productName = $cartItem['productName'];
            $productAmount = $cartItem['amount'];
            $query = "INSERT INTO order_detail (orderid, productname, amount) 
            VALUES ( '{$orderId}', '{$productName}', '{$productAmount}')";
    
            $conn->query($query);
        }
        echo json_encode("OK");
    } catch(exception $e) {
        echo "ex: ".$e; 
    }

    $conn->close();
?>