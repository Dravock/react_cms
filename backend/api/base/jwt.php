<?php 
require_once(API_ROOT . "/config.php");

class JWT {
    private static $expirationHours = 5;
    private $secret;

    private static function base64url_encode($str) {
        return rtrim(strtr(base64_encode($str), '+/', '-_'), '=');
    }

    public static function generate_jwt($payload){
        $headers = array('alg'=>'HS256','typ'=>'JWT');
        $headers_encoded = self::base64url_encode(json_encode($headers));
        $payload['exp'] = self::getNewExpirationTime();
        $payload_encoded = self::base64url_encode(json_encode($payload));
        $signature = hash_hmac('SHA256',"$headers_encoded.$payload_encoded",Config::$secret, true);
        $signature_encoded = self::base64url_encode($signature);

        $jwt = "$headers_encoded.$payload_encoded.$signature_encoded"; 

        return $jwt;
    }

    public static function is_jwt_valid($jwt){
        $tokenParts = explode('.',$jwt);
        $header = base64_decode($tokenParts[0]);
        $payload = base64_decode($tokenParts[1]);
        $signature_provided = $tokenParts[2];

        $expiration = json_decode($payload) -> exp;
        $is_token_expired =($expiration -time()) < 0;

        $base64_url_header = self::base64url_encode($header);
        $base64_url_payload = self::base64url_encode($payload);
        $signature  = hash_hmac('SHA256',$base64_url_header.".". $base64_url_payload, Config::$secret, true);
        $base64_url_signature = self::base64url_encode($signature);

        $is_signature_valid =($base64_url_signature === $signature_provided);

        if($is_token_expired || !$is_signature_valid){
            http_response_code(401);
            die(); //http response code and die
        }else {
            return $payload;
        }
    }

    private static function getNowInSeconds(){
        return time();
    }

    public static function getNewExpirationTime(){
        $secondsInHours = 3600;

        $currentDate = self::getNowInSeconds();
        $expirationTime = $currentDate + ($secondsInHours * self::$expirationHours);
        return strval($expirationTime);
    }
}

