<?php
  require_once __DIR__ . "/../controllers/ClientController.php";  


  if ( $_SERVER['REQUEST_METHOD'] === "GET" ){

    $id = $segments[2] ?? null;
 
    if(isset($id)){
        ClientController::getById($conn,$id);
    }
    else{
        ClientController::getAll($conn);
    }
  }
          
  elseif ( $_SERVER['REQUEST_METHOD'] === "POST" ){
  $data = json_decode( file_get_contents('php://input'), true );
  ClientController::create($conn, $data);
  }              //Método criar


  elseif ( $_SERVER['REQUEST_METHOD'] === "PUT" ){
  $data = json_decode( file_get_contents('php://input'), true );
  $id = $data['id'];
  ClientController::update($conn, $id, $data);
  }            //Método atualizar 


elseif ( $_SERVER['REQUEST_METHOD'] === "DELETE" ){
    $id = $segments[2] ?? null;
 
  if(isset($id)){
    ClientController::delete($conn,$id);
  }
  else{
     jsonResponse(['message'=>"id do cliente obrigatorio"], 403);
  }
}           //Método Deletar
    

  else {
    jsonResponse([
      'status' => 'erro',
      'message' => 'Método não permitido'
    ], 405);
  }

?>