<?php

class RoomModel{
    public static function create($conn, $data){
        $sql = "INSERT INTO quartos( nome, numero, qnt_cama_casal, qnt_cama_solteiro, preco, disponivel) VALUES (?,?,?,?,?,?)";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("siiidi",
            $data["nome"],
            $data["numero"],
            $data["qnt_cama_casal"],
            $data["qnt_cama_solteiro"],
            $data["preco"],
            $data["disponivel"]
        );
        return $stmt->execute();
    }

    public static function getAll($conn){
            $sql = "SELECT * FROM quartos";
            $result = $conn->query($sql);
            return $result->fetch_all(MYSQLI_ASSOC);   // puxa todas as informações do nosso banco de dados
    }


    public static function getById($conn, $id){
            $sql = "SELECT * FROM quartos WHERE id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i", $id);
            $stmt->execute();

            return $stmt->get_result()->fetch_assoc();   // puxa todas as informações específicas
    }

     public static function delete($conn, $id){
            $sql = "DELETE FROM quartos  WHERE id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i", $id);
            return $stmt->execute();

              // deleta quarto
    }


    public static function update($conn, $id, $data){
             $sql = "UPDATE quartos SET nome = ?, numero = ?, qnt_cama_casal = ?, qnt_cama_solteiro = ?, preco = ?, disponivel = ? WHERE id = ?";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("siiidii",
            $data["nome"],
            $data["numero"],
            $data["qnt_cama_casal"],
            $data["qnt_cama_solteiro"],
            $data["preco"],
            $data["disponivel"],
            $id
        );
        return $stmt->execute();
    }




}

?>