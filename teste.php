<?php
     require_once __DIR__  ."/controllers/AuthController.php";
     require_once __DIR__  ."/controllers/PasswordController.php";
      require_once __DIR__  ."/helpers/token_jwt.php";

    $data = [
        "email" => "Rayssa@gmail.com",
        "senha" =>"123"

    ];

    //AuthController::login($conn, $data);

    $token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJNZXVzaXRlIiwiaWF0IjoxNzU2OTI2NzIyLCJleHAiOjE3NTY5MzAzMjIsInN1YiI6eyJpZCI6MjUsIm5vbWUiOiJSYXlzc2EiLCJlbWFpbCI6IlJheXNzYUBnbWFpbC5jb20iLCJjYXJnbyI6IlRJIn19.ozVGrcLowIwf8X7HFqXVqqo_Q-NTgLfOSWGDVsGzYPI";
        
    echo validateToken($token);

    //echo PasswordController::generateHash($data['password']);
   
    //$hash = '$2y$10$S7dHtTEp0BD.ZLFjCaKxveJTIerPjJPBVH40jkX4ZaAxPfXIN/zwa';

    //echo "<br>";
   
    //echo  PasswordController::validateHash($data['password'], $hash);


?>