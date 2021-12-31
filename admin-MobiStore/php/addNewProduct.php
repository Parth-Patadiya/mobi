<?php
  header("Access-Control-Allow-Origin: *");
  
 require 'database.php';
 $post = file_get_contents('php://input');
 $post = json_decode($post);
 $email = $_COOKIE['email'];
 $image = $_COOKIE['img_name'];
 $path ="../../../assets/img/".$image;
// $email ="admin1@gmail.com";

//    $image = "abc.jpg";
$sql2 = "delete from product where price=0";
mysqli_query($connection,$sql2);
  $sql = "INSERT INTO `product`(`email`, `title`, `price`, `description`, `category`,`image`) VALUES ('".$email."','".$post->title."','.$post->price.','".$post->description."','".$post->category."','".$path."')";
  $result = mysqli_query($connection,$sql);
   
  $sql1 = "select * from product order by id desc limit 1";
  $result1 = mysqli_query($connection,$sql1);

  $data = mysqli_fetch_assoc($result1);
echo json_encode($data);
 
?>