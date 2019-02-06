<?php 

    $queries = array();
    parse_str($_SERVER['QUERY_STRING'], $queries);

    echo $queries['x']

?>