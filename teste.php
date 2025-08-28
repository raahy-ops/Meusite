<?php
    require_once __DIR__  ."/controllers/AuthController.php";
     require_once __DIR__  ."/controllers/PasswordController.php";

    $data = [
        "email" => "Rayssa@gmail.com",
        "senha" =>"123"

    ];

    AuthController::login($conn, $data);
    

    //echo PasswordController::generateHash($data['password']);
   
    //$hash = '$2y$10$S7dHtTEp0BD.ZLFjCaKxveJTIerPjJPBVH40jkX4ZaAxPfXIN/zwa';

    //echo "<br>";
   
    //echo  PasswordController::validateHash($data['password'], $hash);


?>