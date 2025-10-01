<?php
require_once __DIR__ . "/../models/userModel.php";
require_once __DIR__ . "/../models/ClientModel.php";
require_once "PasswordController.php";
require_once __DIR__ . "/../helpers/token_jwt.php";
 
class AuthController {
    public static function login($conn, $data){
       
        $data['email'] = trim($data['email']);
        $data['senha'] = trim($data['senha']);
 
        // Confirma se tem algum campo vazio
        if (empty($data['email']) || empty($data['senha'])){
            return jsonResponse([
                "status"=>"erro",
                "message"=>"Preencha todos os campos!"
            ], 401);
        }
 
        $user = UserModel::validateUser($conn, $data['email'], $data['password']);
        if ($user){
            $token = createToken($user);
            return jsonResponse([
                "token" => $token
            ]);
        }else{
            return jsonResponse([
                "status"=>"erro",
                "message"=>"Credenciais inválidas!"
            ], 401);
        }
    }
 
    public static function loginClient($conn, $data){
        $data['email'] = trim($data['email']);
        $data['senha'] = trim($data['senha']);
 
        // Confirma se tem algum campo vazio
        if (empty($data['email']) || empty($data['senha'])){
            return jsonResponse([
                "status"=>"erro",
                "message"=>"Preencha todos os campos!"
            ], 401);
        }
 
        $user = ClientModel::clientValidation($conn, $data['email'], $data['senha']);
        if ($user){
            $token = createToken($user);
            return jsonResponse([
                "token" => $token
            ]);
        }else{
            return jsonResponse([
                "status"=>"erro",
                "message"=>"Credenciais inválidas!"
            ], 401);
        }
    }
}
?>