<?php 
   require "functions.php";
 
   if(isset($_POST['category'])){
      $category = $_POST['category'];
 
      if($category === ""){
         $politicians = getAllPoliticians();
      }else{
         $politicians = getPoliticiansByCategory($category);
      }
      echo json_encode($politicians);
   }