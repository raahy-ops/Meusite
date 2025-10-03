<?php

class ValidatorController{
    
    public static function validate_data($data, $labels){
        $pendents = [];
        foreach($labels as $lbl){
            if (!isset($data[$lbl]) && empty($data[$lbl]) ) {

                $pendents[] = $lbl;
            }
        }

        if(!empty($pendents)){
            $pendents = implode(",", $pendents);
            jsonResponse(['message' => "Erro, Falta o campo: " .$pendents], 400);
            exit;
        }
    }

    public static function  dateHour($date,$hour){
        
        $dateHour = new DateTime($date);

        $dateHour->setTime($hour, 0, 0);
        return $dateHour-> format("Y-m-d H:i:s");
    }
}


?>
