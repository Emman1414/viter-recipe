<?php

class Level
{
    public $level_aid;
    public $level_is_active;
    public $level_level;
    public $level_datetime;
    public $level_created;


    public $connection;
    public $lastInsertedId;
    public $level_start;
    public $level_total;
    public $level_search;


    public $tblLevel;


    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblLevel = "recipe_level";
       
    }


       public function readAll()
      {
        try {
          $sql = "select * from {$this->tblLevel} ";
          $sql .= "order by level_is_active desc, ";
          $sql .= "level_aid asc ";
          $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
          $query = false;
        }
        return $query;
      }


      public function readLimit()
      {
        try {
          $sql = "select * from {$this->tblLevel} ";
          $sql .= "order by level_is_active desc, ";
          $sql .= "level_aid asc ";
          $sql .= "limit :start, ";
          $sql .= ":total ";
          $query = $this->connection->prepare($sql);
          $query->execute([
              "start" => $this->level_start - 1,
              "total" => $this->level_total,
          ]);
      } catch (PDOException $ex) {
          $query = false;
      }
      return $query;
  }
      public function readById()
      {
          try {
              $sql = "select * from {$this->tblLevel} ";
              $sql .= "where level_aid = :level_aid ";
              $query = $this->connection->prepare($sql);
              $query->execute([
                  "level_aid" => $this->level_aid,
              ]);
          } catch (PDOException $ex) {
              $query = false;
          }
          return $query;
      }


      public function create()
  {
    try {
      $sql = "insert into {$this->tblLevel} ";
      $sql .= "(level_is_active, ";
      $sql .= "level_level, ";
      $sql .= "level_created, ";
      $sql .= "level_datetime ) values ( ";
      $sql .= ":level_is_active, ";
      $sql .= ":level_level, ";
      $sql .= ":level_created, ";
      $sql .= ":level_datetime ) ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "level_is_active" => $this->level_is_active,
        "level_level" => $this->level_level,
        "level_datetime" => $this->level_datetime,
        "level_created" => $this->level_created,


      ]);
      $this->lastInsertedId = $this->connection->lastInsertId();
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }


  public function checkName()
  {
    try {
      $sql = "select level_level from {$this->tblLevel} ";
      $sql .= "where level_level = :level_level ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "level_level" => "{$this->level_level}",
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }


  public function update()
  {
    try {
      $sql = "update {$this->tblLevel} set ";
      $sql .= "level_level = :level_level, ";
      $sql .= "level_datetime = :level_datetime ";
      $sql .= "where level_aid  = :level_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "level_level" => $this->level_level,
        "level_datetime" => $this->level_datetime,
        "level_aid" => $this->level_aid
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }


  public function delete()
  {
    try {
      $sql = "delete from {$this->tblLevel} ";
      $sql .= "where level_aid = :level_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "level_aid" => $this->level_aid,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }


  public function active()
    {
    try {
    $sql = "update {$this->tblLevel} set ";
    $sql .= "level_is_active = :level_is_active, ";
    $sql .= "level_datetime = :level_datetime ";
    $sql .= "where level_aid  = :level_aid ";
    $query = $this->connection->prepare($sql);
    $query->execute([
    "level_is_active" => $this->level_is_active,
    "level_datetime" => $this->level_datetime,
    "level_aid" => $this->level_aid,
    ]);
    } catch (PDOException $ex) {
    $query = false;
    }
    return $query;
  }

  public function search()
  {
    try {
      $sql = "select * from {$this->tblLevel} ";
      $sql .= "where level_level like :level_level ";
      $sql .= "order by level_is_active desc, ";
      $sql .= "level_level ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "level_level" => "%{$this->level_search}%",
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  public function filterActive()
  {
    try {
      $sql = "select * from {$this->tblLevel} ";
      $sql .= "where level_is_active like :level_is_active ";
      $sql .= "order by level_is_active desc, ";
      $sql .= "level_level ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "level_is_active" => "%{$this->level_is_active}%",
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }



  public function filterActiveSearch()
  {
    try {
      $sql = "select * from {$this->tblLevel} ";
      $sql .= "where level_is_active like :level_is_active ";
      $sql .= "and level_level like :level_level ";
      $sql .= "order by level_is_active desc, ";
      $sql .= "level_level ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "level_is_active" => "$this->level_is_active",
        "level_level" => "%{$this->level_search}%",
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }



}







