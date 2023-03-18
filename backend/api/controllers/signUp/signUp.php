<?php 
require_once("../../base/start.php");
require_once(API_ROOT . "/controllers/login/login.query.php");

function create_new_user () {
    try {
        $post_json  = file_get_contents('php://input');
        $obj = json_decode($post_json);
        
        $query = new UserLogin();
        $result = $query->verifyUser($obj);
        $db_pass=$result[0]['user_password'];
        $verified = password_verify($obj->password,$db_pass);
        if($verified){
            $jwt = JWT::generate_jwt(['vorname'=>$result[0]['firstname']]);
            echo json_encode($jwt);
            http_response_code(200);
            return;
        }else{
            throw new Exception("Error Processing Request", 1);
        }
        http_response_code(401);
    } catch (Throwable $e) {
        http_response_code(500);
    }
}

$api = new RestApi(null,'create_new_user');
?>