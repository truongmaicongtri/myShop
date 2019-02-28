<?php 

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "whatshop_db";


    $conn = new mysqli($servername,$username, $password, $dbname);

    $parameters = array();
    parse_str($_SERVER['QUERY_STRING'], $parameters);

    $shopid = $parameters['shopid'];

    // $query = "SELECT category_information.categoryid
    // FROM category_information
    // WHERE category_information.shopid='{$shopid}'";

    // $result = $conn->query($query);
    // $categories = array();
    // $categoryids = array();


    // if ($result->num_rows > 0){
    //     while ($row = $result->fetch_assoc()){
    //         array_push($categoryids, $row['categoryid']);
    //     }
    // }


    $categories = array();
    $categoryids = array();
    if ($query= $conn->prepare("SELECT category_information.categoryid
    FROM category_information
    WHERE category_information.shopid= ? ")){

        $query->bind_param("s", $shopid);

        $query->execute();

        $query->bind_result($categoryid);
            
        while ($query->fetch()) {
            array_push($categoryids, $categoryid);
        }

        $query->close();
    } 

    
    foreach ($categoryids as $categoryid) {
        // get list of category view 
        $categoryViews = array();

        if ($query= $conn->prepare("SELECT media.imagelink
        FROM media,category_image
        WHERE category_image.categoryid= ? && media.mediaid=category_image.mediaid")){

            $query->bind_param("s", $categoryid);

            $query->execute();

            $query->bind_result($imagelink);
                
            while ($query->fetch()) {
                array_push($categoryViews, $imagelink);
            }

            $query->close();
        } 

        //get category name, display type and collect category

        if ($query= $conn->prepare("SELECT category_information.categoryname, category_information.displaytype
        FROM category_information
        WHERE category_information.categoryid = ? ")){

            $query->bind_param("s", $categoryid);

            $query->execute();

            $query->bind_result($categoryname, $displaytype);
                
            while ($query->fetch()) {
                array_push($categories, new Category($categoryid ,$categoryname, $displaytype, $categoryViews));
            }

            $query->close();
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