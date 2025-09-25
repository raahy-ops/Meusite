<?php

class ReservationModel {

public static function create($conn, $data) {
       
 
        $sql = "INSERT INTO reservas (pedido_id, quarto_id, adicional_id, fim, inicio) VALUES (?, ?, ?, ?, ?)";
 
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("iiiss",
            $data['pedido_id'],
            $data['quarto_id'],
            $data['adicional_id'],
            $data['fim'],
            $data['inicio']
        );
 
        return $stmt->execute();
    }
       
    public static function update($conn, $id, $data){
             $sql = "UPDATE reservas SET pedido_id = ?, quarto_id = ?, adicional_id = ?, fim = ?, inicio = ?  WHERE id = ?";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("iiissi",
            $data["pedido_id"],
            $data["quarto_id"],
            $data["adicional_id"],
            $data["fim"],
            $data["inicio"],
            $id
        );
        return $stmt->execute();
    }

        public static function getAll($conn){
            $sql = "SELECT * FROM reservas";
            $result = $conn->query($sql);
            return $result->fetch_all(MYSQLI_ASSOC);   // puxa todas as informações do nosso banco de dados
        }

    public static function getById($conn, $id){
            $sql = "SELECT * FROM reservas WHERE id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i", $id);
            $stmt->execute();

            return $stmt->get_result()->fetch_assoc();   // puxa todas as informações específicas
    }




}

?>



