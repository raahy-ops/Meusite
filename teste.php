<?php
     require_once __DIR__  ."/controllers/AuthController.php";
     require_once __DIR__  ."/controllers/RoomController.php";
     require_once __DIR__  ."/controllers/PasswordController.php";
    require_once __DIR__  ."/helpers/token_jwt.php";
    require_once __DIR__  ."/controllers/PasswordController.php";
    require_once __DIR__ . "/controllers/ClientController.php";
     require_once __DIR__ . "/controllers/AdditionalController.php";
      require_once __DIR__ . "/controllers/OrderController.php";
      require_once __DIR__ . "/controllers/ReservationController.php";




    
    
    /* $data = [
      "nome" => "Quarto Elite",
      "numero" => 18,
      "qnt_cama_casal" => 1,
      "qnt_cama_solteiro" => 3,
      "preco" => 800,
      "disponivel" => 1
      
      
      ];
      */
      
      
      //RoomController::create($conn, $data);   //inserir dados 
      //   RoomController::getAll($conn);  // busca dados
      //RoomController::getById($conn, 19); // busca dados específicos
      //RoomController::delete($conn, 19); // deleta dados
      // RoomController::update($conn, 20, $data);

      
      
      /*
     $data = [
       "nome" => "Café da Manhã Premiu",
        "preco" => "3000"
      ];  */
      


      //AdditionalController::update($conn, 29, $data);
     //AdditionalController::create($conn, $data);   //inserir dados 
      //AdditionalController::getAll($conn);  // busca dados
      //AdditionalController::getById($conn, 19); // busca dados específicos
      //AdditionalController::delete($conn, 19); // deleta dados
     

      
      
      
   /*  $data = [
          "nome" => "Arthur",
          "email" => "Arthur@gmail.com",
          "telefone" => "(15)99787-5976",
          "cpf" => "9056406292",
          "senha" => "123",
          "cargo_id" => 5
      ]; */

      

   //   ClientController::create($conn, $data);   //inserir criar dados 
    //  ClientController::getAll($conn); // Busca todos os dados da tabela
    //  ClientController::delete($conn, 19);



  /*    $data = [
      "usuario_id" => 29,
      "cliente_id" => 31,
      "data" => date("Y-m-d H:i:s"),
      "pagamento" => "DINHEIRO"

      
      
      ]; */ 
      




       //  OrderController::create($conn, $data);   //inserir dados 
       //  OrderController::getAll($conn);  // busca dados
      //OrderController::getById($conn, 2); // busca dados específicos
      //OrderController::delete($conn, 2); // deleta dados
       //OrderController::update($conn, 3, $data);


      /*  $data = [
          "pedido_id" => 5,
          "quarto_id" => 20,
          "adicional_id" => 3,
          "fim" => "2025-09-20 12:00:00",
          "inicio" => "2025-09-10 14:00:00"

        ]; */


    //  ReservationController::create($conn,$data);   //inserir dados
   //   ReservationController::getAll($conn);  // busca dados
   //    ReservationController::getById($conn, 3); // busca dados específicos
   //    ReservationController::update($conn, 1, $data);



 /* $data = [
            "qnt" => "10",
            "fim" => "2025-12-17 12:00:00",
            "inicio" => "2025-09-25 14:00:00"

          ]; 

        RoomController::get_available($conn, $data);   // Verificar reservas disponíveis 
        */



    


    

   
  

       




  //  $data = [
   //     "email" => "Rayssa@gmail.com",
  //      "senha" =>"123"

  //   ];

  //  AuthController::login($conn, $data);

   // $tokenInvalido = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJNZXVzaXRlIiwiaWF0IjoxNzU2OTI2NzIyLCJleHAiOjE3NTY5MzAzMjIsInN1YiI6eyJpZCI6MjUsIm5vbWUiOiJSYXlzc2EiLCJlbWFpbCI6IlJheXNzYUBnbWFpbC5jb20iLCJjYXJnbyI6IlRJIn19.ozVGrcLowIwf8X7HFqXVqqo_Q-NTgLfOSWGDVsGzYPI";
    
    // echo validateToken($token);
    
   // $tokenValido = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJNZXVzaXRlIiwiaWF0IjoxNzU2OTMwMzYwLCJleHAiOjE3NTY5MzM5NjAsInN1YiI6eyJpZCI6MjUsIm5vbWUiOiJSYXlzc2EiLCJlbWFpbCI6IlJheXNzYUBnbWFpbC5jb20iLCJjYXJnbyI6IlRJIn19.PJ6YBfaHMyI6FebWoOsQZm8Ub2Nb7h73DiOKGYmZLVc";
   // echo var_dump ( validateToken($tokenValido));

        

    //echo PasswordController::generateHash($data['password']);
   
    //$hash = '$2y$10$S7dHtTEp0BD.ZLFjCaKxveJTIerPjJPBVH40jkX4ZaAxPfXIN/zwa';

    //echo "<br>";
   
    //echo  PasswordController::validateHash($data['password'], $hash);


?>