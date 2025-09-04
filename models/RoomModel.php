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
}

?>