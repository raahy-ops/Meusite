<?php
 
require_once __DIR__ . "/../controllers/RoomController.php";  
 
if ( $_SERVER['REQUEST_METHOD'] === "GET" ){

    $id = $segments[2] ?? null;
 
    if(isset($id)){
        RoomController::getById($conn,$id);
    }
    else{
        RoomController::getAll($conn);
    }
}

elseif ( $_SERVER['REQUEST_METHOD'] === "POST" ){
    $data = json_decode( file_get_contents('php://input'), true );
    RoomController::create($conn, $data);

}              //Método criar

elseif ( $_SERVER['REQUEST_METHOD'] === "PUT" ){
    $data = json_decode( file_get_contents('php://input'), true );
    $id = $data['id'];
    RoomController::update($conn, $id, $data);

}            //Método atualizar 

 
elseif ( $_SERVER['REQUEST_METHOD'] === "DELETE" ){
    $id = $segments[2] ?? null;
 
    if(isset($id)){
        RoomController::delete($conn,$id);
    }
    else{
        jsonResponse(['message'=>"id do quarto obrigatorio"], 403);
    }
}           //Método Deletar

 
else {
    jsonResponse([
        'status' => 'erro',
        'message' => 'Método não permitido'
    ], 405);
}
 
 ?>