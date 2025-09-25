<?php

require_once __DIR__ . "/../models/ReservationModel.php";

class ReservationController{
    
    public static function create($conn,$data){
            
       $result = ReservationModel::create($conn,$data);
            if($result){
                return jsonResponse(['message'=>"Reserva feita, aproveite!"]);
                
            }else{
                return jsonResponse(['message'=>"Reserva não realizada, algo deu errado!"], 404);
            }

    }

    
    
        public static function getAll($conn){
            $reservationlist = ReservationModel::getAll($conn);
            return jsonResponse($reservationlist);
        }

    public static function getById($conn,$id){
        $arg = ReservationModel::getById($conn, $id);
        return jsonResponse($arg);
    }

        public static function update($conn, $id, $data){
            $result = ReservationModel::update($conn, $id, $data);
            if($result){
                return jsonResponse(['message'=>"Reserva atualizada com sucesso!"]);
                
            }else{
                return jsonResponse(['message'=>"Reserva não atualizada, algo deu errado!"], 404);
            }
        }
    
} 

?>