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
    
        // $query= "SELECT user_information.address FROM user_information WHERE user_information.username= '{$user_name}'";
        // $result = $conn->query($query);
        // $row = $result->fetch_assoc();
        // $address = $row['address'];
        $orderId="";

        if ($query= $conn->prepare("SELECT user_information.address FROM user_information WHERE user_information.username= ?")){

            $query->bind_param("s", $user_name);

            $query->execute();

            $query->bind_result($user_address);

            while ($query->fetch()) {
                $address= $user_address;
            }

            $query->close();
        } 

        if ($query= $conn->prepare("INSERT INTO order_history (state, ordertime, amount, paymentType, address, shopid, userid) VALUES ( ? , ?  , ?  , ?  , ?  , ?  , ? )")){

            $query->bind_param("sssssss", $state, $orderTime, $amount, $paymentType, $address, $shopId, $user_name);

            $query->execute();
            $orderId= $query->insert_id;

            $query->close();
        } 
    
        foreach ($cart as $cartItem) {
            $productName = $cartItem['productName'];
            $productAmount = $cartItem['amount'];

            if ($query= $conn->prepare("INSERT INTO order_detail (orderid, productname, amount) 
            VALUES ( ?, ?, ? )")){

                $query->bind_param("sss", $orderId, $productName, $productAmount);
    
                $query->execute();
                
                $query->close();
            } 
        }
        echo json_encode("OK");
    } catch(exception $e) {
        echo "ex: ".$e; 
    }

    $conn->close();
?>