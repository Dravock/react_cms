<?php 
require_once(API_ROOT . "/config.php");
require_once(API_ROOT . "/base/db.php");

class UserLogin extends Database{
    private $userTable;

    public function __construct()
    {
        parent::__construct();
        $this->userTable = Config::$userTable;
    }

    public function verifyUser($obj){
        $stmt = $this->conn->prepare("SELECT * From $this->userTable where user_name='$obj->user'");
        $stmt->execute();
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        return $stmt->fetchAll();
    }
}
?>