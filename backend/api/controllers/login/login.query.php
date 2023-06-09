<?php 
require_once(API_ROOT . "/config.php");
require_once(API_ROOT . "/base/db.php");

class UserLogin extends Database{
    private $userTable;
    private $userJWT;

    public function __construct()
    {
        parent::__construct();
        $this->userTable = Config::$userTable;
        $this->userJWT = Config::$userJWT;
    }

    public function verifyUser($obj){
    
        $stmt = $this->conn->prepare("SELECT * From $this->userTable where user_name='$obj->user_name'");
        $stmt->execute();
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        return $stmt->fetchAll();
    }

    public function insertJWT($obj){
        $id=$obj['id'];
        $jwt =$obj['jwt'];

        // $stmt = $this->conn->prepare( "INSERT INTO $this->userJWT (id,jwt) VALUES ('$id','')");
        $stmt = $this->conn->prepare( "UPDATE $this->userJWT SET jwt = '$jwt' WHERE id = $id " );
        return  $stmt->execute();
    }

}
?>