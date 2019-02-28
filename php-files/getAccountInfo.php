<?php 

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "whatshop_db";


    $conn = new mysqli($servername,$username, $password, $dbname);

    $parameters = array();
    parse_str($_SERVER['QUERY_STRING'], $parameters);

    $user_name = $parameters['user_name'];

    if ($query= $conn->prepare("SELECT user_information.firstname, user_information.lastname, user_information.email, user_information.phone, user_information.address
    FROM user_information
    WHERE user_information.username = ?")){

        $query->bind_param("s", $user_name);

        $query->execute();

        $query->bind_result($firstname, $lastname, $email, $phone, $address);
            
        while ($query->fetch()) {
            $bundles = new Bundle($firstname, $lastname, $email, $phone, $address);
        }

        $query->close();
    } 

    echo json_encode($bundles);


    class Bundle{
        var $firstname;
        var $lastname;
        var $email;
        var $phone;
        var $address;        

        function Bundle($_firstname,$_lastname,$_email,$_phone,$_address ){
            $this -> firstname = $_firstname;
            $this -> lastname = $_lastname;
            $this -> email = $_email;
            $this -> phone = $_phone;
            $this -> address = $_address;
        }
    }
    $conn->close();
?>