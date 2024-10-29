<?php
include_once('../connect.php');

$id = $_POST['id'];

$query = "DELETE FROM student WHERE id=$id";
$result = sqlsrv_query($conn, $query);

if(!$result) {
	die('[WRN]: ...');
}

echo '200';
?>