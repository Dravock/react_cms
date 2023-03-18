<?php 
require_once("../../base/start.php");
require_once(API_ROOT . "/controllers/exampleEndpoint/news.query.php");

// require_once(APIROOT . "/base/jwt.php");

function getNews () {
    try {
        $query = new News();
        $result = $query->getAllNews();
        echo json_encode($result);
    } catch (Throwable $e) {
        http_response_code(500);
    }
}

function createNews () {
    try {
        $post_json  = file_get_contents('php://input');
        $obj = json_decode($post_json);
        
        $query = new News();

        if(!$query->insertNewNews($obj)) {
            throw new Exception('Something went wrong');
            return;
        }
        http_response_code(200);
    } catch (Throwable $e) {
        http_response_code(500);
    }
}

function modifyNews () {
    try {
        $post_json  = file_get_contents('php://input');
        $obj = json_decode($post_json);
        
        $query = new News();

        if(!$query->updateNews($obj)) {
            throw new Exception('Something went wrong');
            return;
        }
        http_response_code(200);
    } catch (Throwable $e) {
        http_response_code(500);
    }
}

function removeNews () {
    try {
        $post_json  = file_get_contents('php://input');
        $obj = json_decode($post_json);
        
        $query = new News();

        if(!$query->removeNews($obj->id)) {
            throw new Exception('Something went wrong');
            return;
        }
        http_response_code(200);
    } catch (Throwable $e) {
        http_response_code(500);
    }
}

$api = new RestApi('getNews','createNews','modifyNews','removeNews');
?>