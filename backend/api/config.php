<?php
    class Config{
        // Datenbank Verbindungs Credentials
        public static $dbname = 'react_cms';
        public static $host = 'localhost';
        public static $username = 'root';
        public static $password = '';
        
        // JWT SECRET
		public static $secret = 'ich_bin_sehr_geheim';
        
        // Tabellennamen
        public static $userTable = 'react_cms_user';
        public static $userJWT = 'react_cms_jwt';
        public static $timesTable = 'times';
        public static $customerTable = 'customer';
        public static $wpTable = 'working_project';
    }