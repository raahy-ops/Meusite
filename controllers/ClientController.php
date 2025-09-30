<?php

require_once __DIR__ . "/../models/ClientModel.php";
require_once __DIR__ . "/../helpers/token_jwt.php";
require_once "PasswordController.php";


class ClientController{
    //Método criar
    public static function create($conn, $data){
        
        $data['senha'] = PasswordController::generateHash($data['senha']);
     
        $result = ClientModel::create($conn, $data);
            if($result){
            return jsonResponse(['message'=>"Cliente cadastrado, boa estádia!"]);
                    
        }else{
            return jsonResponse(['message'=>"cliente não cadastrado, algo deu errado!"], 404);
        }

    }       

    // Método Buscar 
    public static function getAll($conn){
        $clientlist = ClientModel::getAll($conn);
        return jsonResponse($clientlist);
    }


     //Método deletar
    public static function delete($conn, $id){
        $result = ClientModel::delete($conn,$id);
            
        if($result){
            return jsonResponse(['message'=>"Cadastro do cliente deletado com sucesso!"]);
                
        }else{
            return jsonResponse(['message'=>"Cadastro  não deletado!"], 404);
        }

    }

    public static function getById($conn, $id){
        $arg = ClientModel::getById($conn, $id);
        return jsonResponse($arg);
    }

    //Método Atualizar
    public static function update($conn, $id, $data){
        $result = ClientModel::update($conn, $id, $data);
        if($result){
            return jsonResponse(['message'=>"Cadastro do cliente atualizado com sucesso!"]);
                
        }else{
            return jsonResponse(['message'=>"Cadastro do cliente não atualizado, algo deu errado!"], 404);
        }
    }


    public static function loginClient($conn, $data) {

      
        $data['email'] = trim($data['email']);
        $data['senha'] = trim($data['senha']);

 
        if (empty($data['email']) || empty($data['senha'])) {
            return jsonResponse([
                "status" => "erro",
                "message" => "Preencha todos os campos!"
            ], 401);
        }
 
        $client = ClientModel::clientValidation($conn, $data['email'], $data['senha']);
        if ($client) {
            $token = createToken($client);
            return jsonResponse([ "token" => $token ]);
        } else {
            return jsonResponse([
                "status" => "erro",
                "message" => "Credenciais inválidas!"
            ], 401);
        }
    }


    }




?>
