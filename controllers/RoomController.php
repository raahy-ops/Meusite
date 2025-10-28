<?php
    require_once __DIR__ . "/../models/RoomModel.php";
    require_once __DIR__ . "/../models/PhotoModel.php";
    require_once "ValidatorController.php";
    require_once "UploadController.php";

    class RoomController{

     
        public static function create($conn, $data){

            //validar campos
         ValidatorController::validate_data($data,["nome", "numero", "qnt_cama_casal", "qnt_cama_solteiro", "preco", "disponivel"]);



            $result = RoomModel::create($conn,$data);
            if($result){
                if($data['fotos']){
                    $pictures = UploadController::upload($data['fotos']);
                    foreach($pictures ['saves'] as $name){
                        $idPhoto = PhotoModel::create($conn,$name);
                        if($idPhoto){
                            PhotoModel::create($conn, $result, $idPhoto);
                        }
                    }

                }
                return jsonResponse(['message'=>"Quarto criado, aproveite!"]);
                
            }else{
                return jsonResponse(['message'=>"Quarto não criado, algo deu errado!"], 40);
            }

        }


  
        public static function getAll($conn){
            $roomlist = RoomModel::getAll($conn);
            return jsonResponse($roomlist);
        }

         public static function getById($conn, $id){
            $buscarId = RoomModel::getById($conn, $id);
            return jsonResponse($buscarId);
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
            
            //validar campos
            ValidatorController::validate_data($data,["nome", "numero", "qnt_cama_casal", "qnt_cama_solteiro", "preco", "disponivel"]);

            $result = RoomModel::update($conn, $id, $data);
            if($result){
                return jsonResponse(['message'=>"Quarto atualizado com sucesso!"]);
                
            }else{
                return jsonResponse(['message'=>"Quarto não atualizado, algo deu errado!"], 404);
            }
        }


    public static function get_available($conn, $data){
        
        //Validar Campos
        ValidatorController::validate_data($data, ["inicio", "fim", "qnt"]);

        $data["inicio"] = ValidatorController::dateHour($data["inicio"], 14);
        $data["fim"] = ValidatorController::dateHour($data["fim"], 12);
        
        $result = RoomModel::get_available($conn, $data);
        if($result){
            foreach ($result as $quarto) {
                $quarto ['fotos'] = PhotoModel::getByRoomId($conn, $quarto['id']);
            }
            return jsonResponse(['Quartos'=> $result]);
        }else{
            return jsonResponse(['message'=> 'não tem quartos disponiveis'], 400);
        }
    }



    }
?>