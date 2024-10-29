<?php
include_once('../connect.php');

$values = array(
	$_POST['name'],
	$_POST['lastname']
);

$query = 'INSERT INTO student(name, lastname) VALUES(?, ?)';
$result = sqlsrv_query($conn, $query, $values);

if(!$result) {
	die('[WRN] ...');
}

echo '200';
?>