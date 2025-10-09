<?php
 
require_once __DIR__ . "/../controllers/OrderController.php";  
 
if ( $_SERVER['REQUEST_METHOD'] === "GET" ){

    $id = $segments[2] ?? null;
 
    if(isset($id)){
        OrderController::getById($conn,$id);
    }
    else{
        OrderController::getAll($conn);
    }
}

if ( $_SERVER['REQUEST_METHOD'] === "POST" ){
    $opcao = $segments[2] ?? null;

    $data = json_decode( file_get_contents('php://input'), true );
    
    if($opcao == "reservation"){
        OrderController::createOrder( $conn, $data );
    }
    else{
        OrderController::create( $conn, $data );
    }
   
}              //Método criar

elseif ( $_SERVER['REQUEST_METHOD'] === "PUT" ){
    $data = json_decode( file_get_contents('php://input'), true );
    $id = $data['id'];
    OrderController::update($conn, $id, $data);

}            //Método atualizar 

 
elseif ( $_SERVER['REQUEST_METHOD'] === "DELETE" ){
    $id = $segments[2] ?? null;
 
    if(isset($id)){
        OrderController::delete($conn,$id);
    }
    else{
        jsonResponse(['message'=>"id do pedido obrigatorio"], 403);
    }
}           //Método Deletar

 
else {
    jsonResponse([
        'status' => 'erro',
        'message' => 'Método não permitido'
    ], 405);
}
 
 ?>