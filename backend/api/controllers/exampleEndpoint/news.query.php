<?php 
require_once(API_ROOT . "/config.php");
require_once(API_ROOT . "/base/db.php");

class News extends Database{
    
    private $table;

    public function __construct()
    {
        parent::__construct();
        $this->tableUser = Config::$userTable;
    }

    public function getAllNews(){
        $stmt = $this->conn->prepare("SELECT * From $this->table");
        $stmt->execute();
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        return $stmt->fetchAll();
    }

    public function insertNewNews($obj){
        $stmt = $this->conn->prepare("INSERT INTO $this->table (headline,subline,description,last_edited_by) VALUES(:headline,:subline,:description,:last_edited_by)");
        $stmt->bindParam(':headline',$obj->headline);
        $stmt->bindParam(':subline',$obj->subline);
        $stmt->bindParam(':description',$obj->description);
        $stmt->bindParam(':last_edited_by',$obj->last_edited_by);
        return $stmt->execute();
    }

    public function updateNews($obj){
        $stmt = $this->conn->prepare("UPDATE $this->table SET headline = :headline,subline=:subline,description=:description,last_edited_by=:last_edited_by");
        $stmt->bindParam(':headline',$obj->headline);
        $stmt->bindParam(':subline',$obj->subline);
        $stmt->bindParam(':description',$obj->description);
        $stmt->bindParam(':last_edited_by',$obj->last_edited_by);
        return $stmt->execute();
    }

    public function removeNews($id){
        $stmt = $this->conn->prepare("DELETE FROM $this->table where id=:id");
        $stmt->bindParam(':id',$id);
        return $stmt->execute();
    }

}
?>