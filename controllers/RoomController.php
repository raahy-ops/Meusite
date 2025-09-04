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
    }
?>