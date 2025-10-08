<?php
    require_once __DIR__ . "/../models/ReservationModel.php";
    require_once "ValidatorController.php";

    class ReservationController{
        public static function create($conn, $data){
            ValidatorController::validate_data($data, ["pedido_id", "quarto_id", "adicional_id", "inicio", "fim"]);

            $data["inicio"] = ValidatorController::dateHour($data["inicio"], 14);
            $data["fim"] = ValidatorController::dateHour($data["fim"], 12);

            $result = ReservationModel::create($conn, $data);
            if($result){
                return jsonResponse(['message'=> 'Reserva criada com sucesso']);
            }else{
            return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }

        public static function getById($conn, $pedido_id) {
            $result = ReservationModel::getById($conn, $pedido_id);
            return jsonResponse($result);
        }
    }
?>