<?php

require_once __DIR__ . "/../models/ClientModel.php";
require_once "PasswordController.php";

class ClientController{

    //Método criar
    public static function create($conn, $data){
        $hashdpassword = password_hash( $data ['senha'], PASSWORD_BCRYPT);
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





    }




?>
