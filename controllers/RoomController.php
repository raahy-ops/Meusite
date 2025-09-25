<?php
    require_once __DIR__ . "/../models/RoomModel.php";

    class RoomController{

        public static function create($conn,$data){
                
            

            $result = RoomModel::create($conn,$data);
            if($result){
                return jsonResponse(['message'=>"Quarto reservado, aproveite!"]);
                
            }else{
                return jsonResponse(['message'=>"Quarto não reservado, algo deu errado!"], 404);
            }

        }

        public static function getAll($conn){
            $roomlist = RoomModel::getAll($conn);
            return jsonResponse($roomlist);
        }

         public static function getById($conn, $id){
            $arg = RoomModel::getById($conn, $id);
            return jsonResponse($arg);
        }

        public static function delete($conn, $id){
            $result = RoomModel::delete($conn,$id);
            
            if($result){
                return jsonResponse(['message'=>"Quarto deletado com sucesso!"]);
                
            }else{
                return jsonResponse(['message'=>"Quarto não deletado!"], 404);
            }

        }

        public static function update($conn, $id, $data){
            $result = RoomModel::update($conn, $id, $data);
            if($result){
                return jsonResponse(['message'=>"Quarto atualizado com sucesso!"]);
                
            }else{
                return jsonResponse(['message'=>"Quarto não atualizado, algo deu errado!"], 404);
            }
        }



    }
?>