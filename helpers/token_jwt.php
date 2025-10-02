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

        return JWT::encode($payload, SECRET_KEY, "HS256");
    }

    function validateToken($token){
        try{
            $key = new Key (SECRET_KEY, "HS256");
            $decode = JWT::decode($token, $key);
            return $decode->sub;

            }catch(Exception $error){
                return false;
        }
    }

    function validateTokenAPI(){
         $headers = getallheaders();
        if ( !isset($headers["Authorization"]) ){
            jsonResponse(['message'=>'Token ausente'], 401);
            exit;

        } 

        $token = str_replace("Bearer ", "", $headers["Authorization"]);
        if (!validateToken($token)){
            jsonResponse(['message'=>'Token inválido'], 401);
            exit;
            
        }

    }

?>