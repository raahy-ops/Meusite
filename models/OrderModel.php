<?php

class OrderModel{
    
public static function create($conn, $data){

    $sql = "INSERT INTO pedidos( usuario_id, cliente_id, data, pagamento) VALUES (?,?,?,?)";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("iiss",
        $data["usuario_id"],
        $data["cliente_id"],
        $data["data"],
        $data["pagamento"]
    );
    return $stmt->execute();
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

}


?>