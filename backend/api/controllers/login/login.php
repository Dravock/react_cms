<?php 
require_once("../../base/start.php");
require_once(API_ROOT . "/controllers/login/login.query.php");
require_once(API_ROOT . "/base/jwt.php");

function checkUserLogin(){
    AuthMiddleware::checkAuth();
}

function userLogin () {
    try {
        $post_json  = file_get_contents('php://input');
        $obj = json_decode($post_json);
        
        $query = new UserLogin();
        $result = $query->verifyUser($obj);
        $db_pass=$result[0]['user_password'];
        $verified = password_verify($obj->password,$db_pass);
        if($verified){
            $payload = ['vorname'=>$result[0]['first_name'],'nachname'=>$result[0]["last_name"],'email'=>$result[0]['mail'],"looged_in"=>"true"];
            $jwt = JWT::generate_jwt($payload);
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

$api = new RestApi('checkUserLogin','userLogin');
?>