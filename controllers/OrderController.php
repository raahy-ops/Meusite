<?php
    require_once __DIR__ . "/../models/OrderModel.php";

    class OrderController{

        public static function create($conn,$data){
            $result = OrderModel::create($conn,$data);
            if($result){
                return jsonResponse(['message'=>"Pedido feito com sucesso!"]);
                
            }else{
                return jsonResponse(['message'=>"Pedido não realizado, algo deu errada!"], 404);
            }

        }

        public static function getAll($conn){
            $orderlist = OrderModel::getAll($conn);
            return jsonResponse($orderlist);
        }

         public static function getById($conn, $id){
            $arg = OrderModel::getById($conn, $id);
            return jsonResponse($arg);
        }

        public static function delete($conn, $id){
            $result = OrderModel::delete($conn,$id);
            
            if($result){
                return jsonResponse(['message'=>"Pedido foi excluído completamente!"]);
                
            }else{
                return jsonResponse(['message'=>"Pedido não foi excluído, algo deu errado!"], 404);
            }

        }

        public static function update($conn, $id, $data){
            $result = OrderModel::update($conn, $id, $data);
            if($result){
                return jsonResponse(['message'=>"Pedido atualizado com sucesso!"]);
                
            }else{
                return jsonResponse(['message'=>"Pedido não atualizado, algo deu errado!"], 404);
            }
        }



    }
?>