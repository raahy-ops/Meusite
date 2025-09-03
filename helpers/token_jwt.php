<?php

require_once __DIR__ . "/jwt/jwt_include.php";

use Firebase\JWT\JWT;
use Firebase\JWT\key;

    function createToken($user){
        //criação do json

        $payload = [
            "iss" => "Meusite", // origem
            "iat" => time(),   //quando foi criado
            "exp" => time() + (60 * (60 * 1)),  //quando o token expira
            "sub" => $user   //retorna os dados

        ];

        return JWT::encode($payload, SECRET_KEY, "SH256");
    }

    function validateToken($token){
        try{
            $key = new Key (SECRET_KEY, "SH256");
            $decode = JWT::decode($token, $key);
            return $decode->sub;

            }catch(Exception $error){
                return false;
        }
    }

?>