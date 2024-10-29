<?php
include_once('../connect.php');

$id = $_POST['id'];
$name = $_POST['name'];
$lastname = $_POST['lastname'];

$query = "UPDATE student set name='$name', lastname='$lastname' WHERE id=$id";
$result = sqlsrv_query($conn, $query);

if(!$result) {
	die('[WRN] ...');
}

echo '200';
?>