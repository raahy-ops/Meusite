<?php

require_once __DIR__ . "/../models/ClientModel.php";

class ClientController{

        //Método criar
     public static function create($conn, $data){
            $result = ClientModel::create($conn, $data);
            if($result){
                return jsonResponse(['message'=>"Cliente cadastrado, boa estádia!"]);
                
            }else{
                return jsonResponse(['message'=>"cliente não cadastrado, algo deu errado!"], 404);
            }

        }       


    }




?>
