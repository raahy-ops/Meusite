<?php
require_once __DIR__ . "/../controllers/AuthController.php";

if ( $_SERVER['REQUEST_METHOD'] === "POST" ){
    $opcao =  $segments[2] ?? null;
    $data = json_decode( file_get_contents('php://input'), true);
  
    if ($opcao === "client"){  // login do cliente
        
        AuthController::loginClient($conn, $data);
    
    } else if ( $opcao === "enployee"){ //login do funcionário
        AuthController::login($conn, $data);
    
    } else {
        jsonResponse(['status' => 'error','message'=> 'rota não existe'], 405);
    }
}

// apenas teste 
   /* elseif( $_SERVER['REQUEST_METHOD'] === "PUT" ){
        validateTokenAPI();
        jsonResponse(['message'=>"Deu certo"], 200);
    }  */


    else{
        jsonResponse(['status'=> 'error','message'=> 'Método não permitido'],405);
    }



?>