<?php
  header("Access-Control-Allow-Origin: *");
  
  require 'database.php';
  $post = file_get_contents('php://input');
  $post = json_decode($post);
 
  $email= $_COOKIE["email"];
//  $email = "a@gmail.com";
   $sql = "INSERT INTO cart (`id`, `email`, `title`, `price`, `description`, `category`, `image`, `quantity`) VALUES ('".$post->id."','".$email."','".$post->title."','".$post->price."','".$post->description."','".$post->category."','".$post->image."','".$post->quantity."')";
    //  echo $sql;
   $result = mysqli_query($connection,$sql);
   
   $sql1 = "delete from cart where id = 0";
   mysqli_query($connection,$sql1);
   $qry ="select * from cart";
   $result1 =mysqli_query($connection,$qry);
   $data = mysqli_fetch_assoc($result1);   
  
   echo json_encode($data);
 
?>