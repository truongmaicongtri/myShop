<?php 

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "myshop_db";


    $conn = new mysqli($servername,$username, $password, $dbname);

    $parameters = array();
    parse_str($_SERVER['QUERY_STRING'], $parameters);

    $shopid = $parameters['shopid'];

    $query = "SELECT category_information.categoryid
    FROM category_information
    WHERE category_information.shopid='{$shopid}'";

    $result = $conn->query($query);
    $categories = array();
    $categoryids = array();


    if ($result->num_rows > 0){
        while ($row = $result->fetch_assoc()){
            array_push($categoryids, $row['categoryid']);
        }
    }

    
    foreach ($categoryids as $categoryid) {
        // get list of category view 
        $categoryViews = array();

        $query = "SELECT media.imagelink
        FROM media,category_image
        WHERE category_image.categoryid='{$categoryid}' && media.mediaid=category_image.mediaid";

        $result = $conn->query($query);

        if ($result->num_rows > 0){
            while ($row = $result->fetch_assoc()){
                array_push($categoryViews, $row['imagelink']);
            }
        }

        //get category name, display type and collect category

        $query = "SELECT category_information.categoryname, category_information.displaytype
        FROM category_information
        WHERE category_information.categoryid = '{$categoryid}'";

        $result = $conn->query($query);

        if ($result->num_rows > 0){
            while ($row = $result->fetch_assoc()){
                array_push($categories, new Category($categoryid ,$row['categoryname'],$row['displaytype'], $categoryViews));
            }
        }
    }

    $categories = str_replace("\\/", "/", json_encode($categories));
    echo $categories;

    class Category {
        var $categoryid;
        var $categoryname;
        var $displayview;
        var $categoryview;
    
        function Category($_categoryid, $_categoryname, $_displayview,$_categoryview){
            $this -> categoryid = $_categoryid;
            $this -> categoryname = $_categoryname;
            $this -> displayview = $_displayview;
            $this -> categoryview = $_categoryview;
        }
    }
    $conn->close();
?>