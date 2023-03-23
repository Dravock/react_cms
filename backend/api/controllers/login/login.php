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
        $verified = password_verify($obj->user_password,$db_pass);
        if($verified){
            $payload = ['vorname'=>$result[0]['first_name'],'nachname'=>$result[0]["last_name"],'email'=>$result[0]['mail']];
            $jwt = JWT::generate_jwt($payload);
            $insertData=['id'=>$result[0]['id'],'jwt'=>$jwt];
            $insert_JWT_to_DB = $query->insertJWT($insertData);
            $return_data=['user_name'=>$obj->user_name, 'vorname'=>$result[0]['first_name'],'nachname'=>$result[0]["last_name"],'email'=>$result[0]['mail'],'jwt'=>$jwt];
            echo json_encode($return_data);
            http_response_code(200);
            return;
        }else{
            throw new Exception("PASSWORD NOT VERIFIED", 1);
        }
        http_response_code(401);
    } catch (Throwable $e) {
        http_response_code(500);
    }
}


$api = new RestApi('checkUserLogin','userLogin');
?>