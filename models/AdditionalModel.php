<?php

class AdditionalModel{

       
public static function create($conn, $data){

    $sql = "INSERT INTO adicionais(nome, preco) VALUES (?,?)";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sd",
        $data["nome"],
        $data["preco"],
    );
    return $stmt->execute();
}

public static function getAll($conn){
    $sql = "SELECT * FROM adicionais";
    $result = $conn->query($sql);
    return $result->fetch_all(MYSQLI_ASSOC);   // puxa todas as informações do nosso banco de dados
}


public static function delete($conn, $id){
    $sql = "DELETE FROM adicionais  WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    return $stmt->execute();
    // deleta cliente
}

public static function update($conn, $id, $data){
    $sql = "UPDATE adicionais SET nome = ?, preco = ?";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sdi",
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
    $sql = "SELECT * FROM adicionais WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();

    return $stmt->get_result()->fetch_assoc();   // puxa todas as informações específicas
}

}



?>