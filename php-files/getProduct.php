<?php 

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "whatshop_db";


    $conn = new mysqli($servername,$username, $password, $dbname);

    $parameters = array();
    parse_str($_SERVER['QUERY_STRING'], $parameters);

    $categoryid = $parameters['categoryid'];

    $productids = array();
    $products = array();

    // get product ids  to get list of product

    if ($query= $conn->prepare("SELECT products_in_cate.productid
    FROM products_in_cate
    WHERE products_in_cate.categoryid=?")){

        $query->bind_param("s", $categoryid);

        $query->execute();

        $query->bind_result($productid);
        
        while ($query->fetch()) {
            array_push($productids, $productid );
        }

        $query->close();
    } 

    //get list of product by product id
    foreach ($productids as $productid) {
        $productimages = array();

        if ($query= $conn->prepare("SELECT media.imagelink
        FROM product_image ,media
        WHERE media.mediaid=product_image.mediaid && product_image.productid=?")){

            $query->bind_param("s", $productid);

            $query->execute();

            $query->bind_result($imagelink);
            
            while ($query->fetch()) {
                array_push($productimages, $imagelink);
            }

            $query->close();
        } 

        if ($query= $conn->prepare("SELECT products_information.productname, products_information.material, products_information.color,
        products_information.price, products_information.amount, products_information.detail
        FROM products_information
        WHERE products_information.productid= ? ")){

            $query->bind_param("s", $productid);

            $query->execute();

            $query->bind_result($productname, $material, $color, $price, $amount, $detail,);
            
            while ($query->fetch()) {
                array_push($products, new Product($productid, $productname, $price, $productimages, $detail));
            }

            $query->close();
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