<?php

require_once __DIR__ . "/jwt/jwt_include.php";

use Firebase\JWT\JWT;
use Firebase\JWT\key;

    function createToken($user){
        //criação do json

        $payload = [
            "iss" => "Meusite",
            "iat" => time(),
            "exp" => time() + (60 * (60 * 1)),  //quando o token expira
            "sub" => $user   //retorna os dados

        ];

        return JWT::encode($payload, SECRET_KEY);
    }

?>