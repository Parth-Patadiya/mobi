<?php
  header("Access-Control-Allow-Origin: *");

 require 'database.php';
 $post = file_get_contents('php://input');
 $post = json_decode($post);
 
 $uid = $_COOKIE['uid'];
 
 $sql1 = "SELECT * FROM product where email = '".$post->email."'"; 
 $result1 = mysqli_query($connection,$sql1);
 if(mysqli_num_rows($result1)>0) 
 { 
   
 }
 else
 {
  $result = mysqli_query($connection,$sql);
  $sql = "UPDATE `product` SET `title`='".$post->title."',`price`='.$post->price.',`description`='".$post->description."',`category`='".$post->category."',`image`= WHERE id =$uid";
  $result = mysqli_query($connection,$sql);
  $data = mysqli_fetch_assoc($result1);   
 }
  echo json_encode($data);
 
?>