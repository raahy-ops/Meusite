<?php
class UploadController {
    static $maxSize = 1024 *1024 * 5; //5Mb
    static $typefiles = [
        "image/png" => "png",
        "image/jpeg" => "jpg"
    ];
    public static $path = __DIR__ ."/../uploads/";

    public static function normalizePictures($pictures){
        $files = [];
        if(is_array($pictures['name'])){
            foreach ($pictures ['name'] as $index => $name) {
                $files[] = [
                    "name"=> $pictures['name'][ $index ],
                    "type" => $pictures['type'][$index],
                    "tmp_name" => $pictures['tmp_name'][ $index ],
                    "error" => $pictures['error'][$index],
                    "size" => $pictures["size"][$index]
                ];
                # code...
            }
        }else{
            $files[] = $pictures;
        }
        return $files;
    }

    public static function randomName($extension){
        $name = bin2hex(random_bytes(16));
        return $name .".". $extension;
    }

    public static function upload($pictures){
        $files = [];
        $errors = [];
        $saves = [];

        if ($pictures){
            $files = self::normalizePictures($pictures);

        }
        foreach ($files as $index => $photo){
            $err = $photo['error'] ?? UPLOAD_ERR_NO_FILE;
            if ($err === UPLOAD_ERR_NO_FILE) continue;
            if($err !== UPLOAD_ERR_OK){
                $erros[] = "Erro no upload (photo: {$index})";
                continue;
            }

            if(($photo['size']??0) > self::$maxSize){
                $errors[] = "Excedeu o limite de " . self::$maxSize . "Mb -(photos: {$index})";
                continue;
            }
            $info = new \finfo(FILEINFO_MIME_TYPE);
            $mime = $info->file($photo['tmp_name']) ?: ($photo['type'] ?? "application/octet-stream");
            if(!isset(self::$typefiles[$mime]) ){
                $errors[] = "Tipo do Arquivo não é permitido";
                continue;
            }

            $photoName = self::randomName(self::$typefiles[$mime]);
            $desPath = self::$path . $photoName;
            if ( !move_uploaded_file($photo['tmp_name'], $desPath) ){
                $errors[] = "Falha ao mover o arquivo";
                continue;
            }
            $saves[] = [
                "name"=> $photoName,
                "path" => "//uploads//" . $photoName,
                "type" => self::$typefiles[$mime]

            ];
            
        }

        return [
            "files" => $files, 
            "errors" => $errors, 
            "saves" => $saves];
    }
}

?>