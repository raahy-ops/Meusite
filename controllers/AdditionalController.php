<?php
    require_once __DIR__ . "/../models/AdditionalModel.php";

    class AdditionalController{

        public static function create($conn,$data){


            $result = AdditionalModel::create($conn,$data);
            if($result){
                return jsonResponse(['message'=>" Adicional criado!"]);
                
            }else{
                return jsonResponse(['message'=>"Adicional não criado!"], 404);
            }

        }

        public static function getAll($conn){
            $additionallist = AdditionalModel::getAll($conn);
            return jsonResponse($additionallist);
        }

         public static function getById($conn, $id){
            $arg = AdditionalModel::getById($conn, $id);
            return jsonResponse($arg);
        }

        public static function delete($conn, $id){
            $result = AdditionalModel::delete($conn,$id);
            
            if($result){
                return jsonResponse(['message'=>"Adicional excluido!"]);
                
            }else{
                return jsonResponse(['message'=>"Adicional excluido!"], 404);
            }

        }

        public static function update($conn, $id, $data){
            $result = AdditionalModel::update($conn, $id, $data);
            if($result){
                return jsonResponse(['message'=>"Adicional atualizado!"]);
                
            }else{
                return jsonResponse(['message'=>"Adicional não atualizado, algo deu errado!"], 404);
            }
        }



    }
?>