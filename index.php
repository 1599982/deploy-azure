<?php include_once('connect.php'); ?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Azure?</title>
	<link rel="stylesheet" href="style.css">
	<script src="https://kit.fontawesome.com/1431b616a6.js" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<body>
	<header>
		<h1 class="title">Alumnos</h1>
		<nav class="actions">
			<div id="add-btn" class="active-btn">
				<i class="fa-solid fa-user-plus"></i>
			</div>
			<div id="edit-btn" class="disabled">
                <i class="fa-solid fa-user-pen"></i>
			</div>
			<div id="delete-btn" class="disabled">
				<i class="fa-solid fa-user-xmark"></i>
			</div>
		</nav>
	</header>
	<main>
		<table>
			<tr>
				<th>id</th>
				<th>nombre</th>
				<th>apellido</th>
			</tr>
			<?php
			$query = 'SELECT * FROM student';
			$result = sqlsrv_query($conn, $query);

			while($row = sqlsrv_fetch_array($result, SQLSRV_FETCH_ASSOC)) {
				echo "
			<tr class=\"row\">
				<input type=\"hidden\" value=\"$row[id]\" disabled>
				<td>$row[id]</td>
				<td>$row[name]</td>
				<td>$row[lastname]</td>
			</tr>
				";
			}
			?>
		</table>
	</main>
	<script src="main.js"></script>
</body>
</html>