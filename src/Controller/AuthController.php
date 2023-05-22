<?php

namespace App\Controller;

class AuthController
{
    public function env()
    {
        $url = '.env';

        $read = file($url, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        var_dump($read);

        $ok = explode('=', $read[1]);
        var_dump($ok);

        return $array = [$ok[0] => $ok[1]];
        var_dump($array);
    }
}
