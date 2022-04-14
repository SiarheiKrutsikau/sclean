<?php
if (!$_POST)
    exit();

//проверка POST
class check {
    public $value;
    function __construct($inmemory) {
        if (count($inmemory) == 8) {
            foreach ($inmemory as $value) {
                if ($value == '0' || $value == '')
                    die('error');
            }
            return $this->value = 'OK';
        } else
            die('error');
    }
}

class connect {
    public $db;
    function __construct() {
        $driver = PDO::getAvailableDrivers();
        
//проверяем есть ли драйвер mysql
        if (!in_array('mysql', $driver)) {
            die('error');
        }

//подключение к БД
        try {
            $this->db = new PDO('mysql:host=localhost;dbname=in_user;charset=utf8mb4', 'one', 'agat');
        } catch (PDOException $error) {
            die('error');
        }
    }
}

//класс обработки запросов
class inPDO {
    public $value;
    private $string;
    private $array;
    private $db;
    private $stmt;
    function __construct($connect) {
        $this->db = $connect->db;
    }
    public function sel_PDO($string = 'none', $array = 'none') {
        try {
            print_r($array);
            self::chack($string, $array);
            $this->string = $string;
            $this->array = $array;
            $this->stmt = $this->db->prepare($this->string);
            $this->stmt->execute($this->array);
            $this->value = $this->stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            die('error');
        }
    }
    public function ins_PDO($string = 'none', $array = 'none') {
        self::chack($string, $array);
        $this->string = $string;
        $this->array = $array;
        self::request();
    }
    public function upd_PDO($string = 'none', $array = 'none') {
        self::chack($string, $array);
        $this->string = $string;
        $this->array = $array;
        self::request();
    }
    public function del_PDO($string = 'none', $array = 'none') {
        self::chack($string, $array);
        $this->string = $string;
        $this->array = $array;
        self::request();
    }
    private function request() {
        try {
            $this->stmt = $this->db->prepare($this->string);
            $this->stmt->execute($this->array);
            $this->value = $this->stmt->fetch();
            return $this->stmt->rowCount();
        } catch (Error $e) {
            die('error');
        }
        return;
    }
    private function chack($paramone, $paramtwo) {
        if (!$paramone || !$paramtwo || $paramone == 'none' || $paramtwo == 'none' || $paramone == '' || $paramtwo == [''] || gettype($paramtwo) != 'array' || gettype($paramone) != 'string') {
            die('error');
        }
        return;
    }
}

if (isset($_POST['memory']))
    $string = json_decode($_POST['memory'], true);

//print_r($string);
$check = new check($string);

//создание подключения
$connect = new connect;

//создание объекта inPDO
$a = new inPDO($connect);

//вставка строки
$query = 'INSERT INTO `newuser` (`name`, `typeuborki`, `allplace`, `price_place`, `price_type`, `one_metr`, `price_all`, `phone`)  VALUES (:Name, :TypeUborki,:TypePlace,:ValueRed,:ValueOption,:Metr,:Result,:Number)';
$a->ins_PDO($query, $string);
?>