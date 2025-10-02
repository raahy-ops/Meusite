<?php
require_once "ValidatorController.php";

require_once __DIR__ . "/../models/ReservationModel.php";

class ReservationController{
    
    public static function create($conn,$data){
        ValidatorController::validate_data($data, ["pedido_id", "quarto_id", "adicional_id", "fim", "inicio"])

        $data ["fim"] = ValidatorController::dateHour($data["fim"], 14)
        $data ["inicio"] = ValidatorController::dateHour($data["inicio"], 12)
 
            
       $result = ReservationModel::create($conn,$data);
            if($result){
                return jsonResponse(['message'=>"Reserva feita, aproveite!"]);
                
            }else{
                return jsonResponse(['message'=>"Reserva não realizada, algo deu errado!"], 404);
            }
        }
        
        public static function searchByRequest($conn, $pedido_id){
            $result = ReservationModel::searchByRequest($conn,$pedido_id);
            return jsonResponse($result);
        }
    }    

 

?>