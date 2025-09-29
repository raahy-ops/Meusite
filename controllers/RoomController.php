<?php
    require_once __DIR__ . "/../models/RoomModel.php";

    class RoomController{

        public static $labels = ["nome", "numero", "qnt_cama_casal", "qnt_cama_solteiro", "preco", "disponivel"];

        public static function create($conn,$data){

            //validar campos
        $validar = ValidatorController::validate_data($data, self::$labels);

        if( !empty($validar) ){
            $dados = implode(", ", $validar);
            return jsonResponse(['message'=>"Erro, Falta o campo: ".$dados], 400);
        }

                
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


    public static function get_available($conn, $data){
        $result = RoomModel::get_available($conn, $data);
        if($result){
            return jsonResponse(['Quartos'=> $result]);
        }else{
            return jsonResponse(['message'=> 'ERROORRR'], 400);
        }
    }



    }
?>