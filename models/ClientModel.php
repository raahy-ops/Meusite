<?php
require_once __DIR__  ."/../controllers/PasswordController.php";

class ClientModel{
     
    

public static function create($conn, $data){

    $sql = "INSERT INTO clientes(nome, email, telefone, cpf, senha) VALUES (?,?,?,?,?)";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssss",
        $data["nome"],
        $data["email"],
        $data["telefone"],
        $data["cpf"],
        $data["senha"]
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


public static function clientValidation($conn, $email, $senha) {
    
        $sql = "SELECT 
                clientes.id, 
                clientes.email, 
                clientes.senha, 
                clientes.nome,
                cargos.nome AS cargo
                FROM clientes
                INNER JOIN cargos
                ON cargos.id = clientes.cargo_id
                WHERE clientes.email = ? 
            ;";
       
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();
 
        if($client = $result->fetch_assoc()) {
       
            if(PasswordController::validateHash($senha, $client['senha'])) {
                unset($client['senha']);
                return $client;  
            }
 
            return false;
        }
}


}       //CRUD = create, read, update, delete


?>