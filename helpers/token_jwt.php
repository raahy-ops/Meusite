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
            $result = json_decode(json_encode($decode->sub), true);
            return $result;

            }catch(Exception $error){
                return false;
        }
    }

    function validateTokenAPI($typeRole){
         $headers = getallheaders();
        if ( !isset($headers["Authorization"]) ){
            jsonResponse(['message'=>'Token ausente'], 401);
            exit;
        } 

        $token = str_replace("Bearer ", "", $headers["Authorization"]);
        $user = validateToken($token);
        
        if (!$user){
            jsonResponse(['message'=>'Token inválido'], 401);
            exit;
        }
        
        if ($user['cargo'] != $typeRole){
            jsonResponse(['message'=> 'Area Restrita, para Usuarios!'], 401);
            exit;
        }
        return $user;
    }

?>