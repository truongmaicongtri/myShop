<?php 

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "myshop_db";


    $conn = new mysqli($servername,$username, $password, $dbname);

    $parameters = array();
    parse_str($_SERVER['QUERY_STRING'], $parameters);

    $categoryid = $parameters['categoryid'];

    $productids = array();
    $products = array();

    // get product ids  to get list of product
    $query = "SELECT products_in_cate.productid
    FROM products_in_cate
    WHERE products_in_cate.categoryid='{$categoryid}'";

    $result = $conn->query($query);

    if ($result->num_rows > 0){
        while ($row = $result->fetch_assoc()){
            array_push($productids, $row['productid']);
        }
    }

    //get list of product by product id
    foreach ($productids as $productid) {
        $productimages = array();

        $query = "SELECT media.imagelink
        FROM product_image ,media
        WHERE media.mediaid=product_image.mediaid && product_image.productid='{$productid}'";

        $result = $conn->query($query);
                
        if ($result->num_rows > 0){
            while ($row = $result->fetch_assoc()){
                array_push($productimages, $row['imagelink']);
            }
        }
            
        $query = "SELECT products_information.productname, products_information.material, products_information.color,
        products_information.price, products_information.amount, products_information.detail
        FROM products_information
        WHERE products_information.productid='{$productid}'";
    
        $result = $conn->query($query);
    
        if ($result->num_rows > 0){
            while ($row = $result->fetch_assoc()){
                array_push($products, new Product($productid,$row['productname'],$row['price'],$productimages, $row['detail']));
            }
        }
    }
    $products = str_replace("\\/", "/", json_encode($products));
    echo $products;

    class Product {
        var $productid;
        var $productname;
        var $price;
        var $productimgs;
        var $detail;
        
        function Product($_productid , $_productname, $_price, $_productimgs,$_detail){
        $this -> productid = $_productid ;
            $this -> productname = $_productname;
            $this -> price = $_price;
            $this -> productimgs = $_productimgs;
            $this -> detail = $_detail;
        }
    }
    $conn->close();
?>