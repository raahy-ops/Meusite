<?php

class ClientModel{
     
    
   
public static function create($conn, $data){

    $sql = "INSERT INTO clientes(nome, email, telefone, cpf, senha, cargo_id) VALUES (?,?,?,?,?,?)";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssssi",
        $data["nome"],
        $data["email"],
        $data["telefone"],
        $data["cpf"],
        $data["senha"],
        $data["cargo_id"]
    );
    return $stmt->execute();
}

public static function getAll($conn){
    $sql = "SELECT id, nome, email, telefone, cpf, cargo_id FROM clientes";
    $result = $conn->query($sql);
    return $result->fetch_all(MYSQLI_ASSOC);   // puxa todas as informações do nosso banco de dados
}


public static function delete($conn, $id){
    $sql = "DELETE FROM clientes  WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    return $stmt->execute();
    // deleta cliente
}

public static function update($conn, $id, $data){
    $sql = "UPDATE clientes SET nome = ?, email = ?, telefone = ?, cpf = ?, senha = ?, cargo_id = ? WHERE id = ?";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssssii",
            $data["nome"],
            $data["email"],
            $data["telefone"],
            $data["cpf"],
            $data["senha"],
            $data["cargo_id"],
            $id
        );
    return $stmt->execute();
}

public static function getById($conn, $id){
    $sql = "SELECT id, nome, email, telefone, cpf, cargo_id FROM clientes WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();

    return $stmt->get_result()->fetch_assoc();   // puxa todas as informações específicas
}


}


?>