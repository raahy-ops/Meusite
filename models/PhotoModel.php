<?php

class PhotoModel{

       
public static function create($conn, $name){

    $sql = "INSERT INTO fotos(nome) VALUES (?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s",$name);
        if($stmt->execute()){
            return $conn->insert_id;
        }
    return false;
}

public static function createRelationRoom($conn, $idRoom, $idPhoto){

    $sql = "INSERT INTO imagens_quartos (imagem_id, quarto_id) VALUES (?,?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ii",$idn);
        if($stmt->execute()){
            return $conn->insert_id;
        }
    return false;
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
        $sql = "UPDATE adicionais SET nome = ?, preco = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sdi",
        $data["nome"],
        $data["preco"],
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

public static function getByRoomId($conn, $id){
    
    $sql = "SELECT  f.nome FROM quartos_fotos qf
    JOIN fotos f ON qf.fot_id = f.id =f.id
    WHERE qf.quarto_id = ?";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    $photos = [];
    while($row = $result->fetch_assoc()){
        $photos[] = $row['nome'];
    }
    return $photos;


}


}



?>