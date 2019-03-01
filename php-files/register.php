<?php 

    try {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "whatshop_db";
    
    
        $conn = new mysqli($servername,$username, $password, $dbname);
        $json = file_get_contents('php://input');
        $obj = json_decode($json, true);

        $user_name = $obj["userName"];
        $userpassword = password_hash($obj["password"], PASSWORD_BCRYPT);
        $phoneNumber = $obj["phone"];
        $address = $obj["address"];

        // Check duplicate username

        if ($query= $conn->prepare("SELECT username FROM account WHERE username=?")){

            $query->bind_param("s", $user_name);

            $query->execute();
            
            $query->bind_result($result);
        
            $query->fetch();

            $query->close();
        } 


        if ($result==null){
            if ($query= $conn->prepare("INSERT INTO account (username, password) VALUES ( ? , ?)")){

                $query->bind_param("ss", $user_name, $userpassword);
    
                $query->execute();
    
                $query->close();
            } 
        
            if ($query= $conn->prepare("INSERT INTO user_information (user_information.username, user_information.phone, user_information.address) VALUES (?, ?, ?)")){
    
                $query->bind_param("sss", $user_name, $phoneNumber, $address);
    
                $query->execute();
                
                $query->close();

                echo json_encode("OK");
            } 
        } else {
            echo json_encode("Duplicate");
        }
    } catch(exception $e) {
        echo "ex: ".$e; 
    }

    $conn->close();
?>