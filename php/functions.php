<?php 
function connect(){
   $mysqli = new mysqli('localhost', 'admin', 'admin_pass', 'tutorials');
   if($mysqli->connect_errno != 0){
      return $mysqli->connect_error;
   }else{
      $mysqli->set_charset("utf8mb4");	
   }
   return $mysqli;
}
 
function getAllPoliticians(){
   $mysqli = connect();
   $res = $mysqli->query("SELECT * FROM politicians ORDER BY RAND()");
   while($row = $res->fetch_assoc()){
      $politicians[] = $row;
   }
   return $politicians;
}
 
function getPoliticiansByCategory($category){
   $mysqli = connect();
   $res = $mysqli->query("SELECT * FROM politicians WHERE category = '$category'");
   while($row = $res->fetch_assoc()){
      $politicians[] = $row;
   }
   return $politicians;
}
