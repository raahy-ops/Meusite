<?php

require_once "RoomModel.php";


class OrderModel{
    
public static function create($conn, $data){

    $sql = "INSERT INTO pedidos( usuario_id, cliente_id, pagamento) VALUES (?,?,?,?)";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("iis",
        $data["usuario_id"],
        $data["cliente_id"],
        $data["pagamento"]
    );
    $resultado = $stmt->execute();
    if($resultado){
        return $conn->insert_id;
    }
    return false;
}

public static function getAll($conn){
    $sql = "SELECT * FROM pedidos";
    $result = $conn->query($sql);
    return $result->fetch_all(MYSQLI_ASSOC);   // puxa todas as informações do nosso banco de dados
}


public static function delete($conn, $id){
    $sql = "DELETE FROM pedidos  WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    return $stmt->execute();
    // deleta cliente
}

public static function update($conn, $id, $data){
    $sql = "UPDATE pedidos SET usuario_id = ?, cliente_id = ?, data = ?, pagamento = ? WHERE id = ?";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("iissi",
            $data["usuario_id"],
            $data["cliente_id"],
            $data["data"],
            $data["pagamento"],
            $id
        );
    return $stmt->execute();
}

public static function getById($conn, $id){
    $sql = "SELECT id, usuario_id, cliente_id, data, pagamento FROM pedidos WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();

    return $stmt->get_result()->fetch_assoc();   // puxa todas as informações específicas
}


    public static function createOrder($conn,$data){
        $cliente_id = $data['cliente_id'];
        $pagamento = $data['pagamento'];
        $usuario_id  = $data['usuario_id'];
        $reservas =[];
        $reservou = false;

        $conn->begin_transaction(MYSQLI_TRANS_START_READ_WRITE);


        try {
           
            $order_id = self::create($conn, [
                
                "usuario_id" => $usuario_id,
                "cliente_id" => $cliente_id,
                "pagamento" => $pagamento
            ]);
            
            if(!$order_id){
                throw new RuntimeException("Erro ao criar o pedido.");
            }

            foreach($data ['quartos'] as  $quarto){
                $id = $quarto['id'];
                $inicio = $quarto['inicio'];
                $fim = $quarto['fim'];

                //garantia de existir e bloquear 
                if(!RoomModel::lockById($conn,$id)){

                    $reservas[] =  "Quarto{$id} indisponível";
                    continue;
                }
                //criar método na classe reserveModel para avaliar o quarto se ele esta disponivel no intervalo de datas ou nõa
                //ReservaModel::isConflict();
                $reserveResult = ReservationModel::create($conn, [
                    "pedido_id" => $order_id,
                    "quarto_id" =>$id,
                    "adicional_id" => null,
                    "inicio" => $inicio,
                    "fim" => $fim,

                ]);
                $reservou = true;
                $reservas[] = [
                    "reserva_id"=> $conn->insert_id,
                    "quarto_id"=> $id
                ];
            }
            if($reservou == true){
                $conn->commit();
                return[
                    "pedido_id" => $order_id,
                    "reservas" => $reservas,
                    "message" => "Reservas criadas com sucesso!"
                ];
            }else{
                throw new RuntimeException("Pedido não realizado, nenhum quarto reservado!!");
            }

            
        } catch (\Throwable $th) {
            try {
                $conn->rollback();
            
            } catch (\Throwable $th2) {
                throw $th;
            }
            //throw $th;
        }

    }
        



}

?>

