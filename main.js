const add_btn = document.getElementById('add-btn');
const edit_btn = document.getElementById('edit-btn');
const delete_btn = document.getElementById('delete-btn');

const rows = document.querySelectorAll('.row');

let id = 0;

function send(action, data) {
	fetch(`actions/${action}.php`, {
		method: 'POST',
		body: data
	})
	.then(response => response.text())
	.then(data => {
		if(data === '200')
			window.location.reload();
	})
	.catch(err => console.error(err))
}

add_btn.addEventListener('click', async function() {
	const form = await Swal.fire({
		icon: 'info',
		title: 'Añadir nuevo Alumno',
		html: `
			<input id="name" class="swal2-input" type="text" placeholder="nombre">
			<input id="lastname" class="swal2-input" type="text" placeholder="apellido">
		`,
		showCancelButton: true,
		confirmButtonText: 'Añadir',
		cancelButtonText: 'Cancelar',
		preConfirm: () => {
			const form_data = new FormData();
			form_data.append('name', document.getElementById('name').value);
			form_data.append('lastname', document.getElementById('lastname').value);

			return form_data;
		}
	})

	if(!form.isConfirmed)
		return;

	send('insert', form.value);
})

edit_btn.addEventListener('click', async function() {
	if(id === 0)
		return;

	const form = await Swal.fire({
		icon: 'info',
		title: 'Editar Alumno',
		html: `
			<input id="name" class="swal2-input" type="text" placeholder="nombre">
			<input id="lastname" class="swal2-input" type="text" placeholder="apellido">
		`,
		showCancelButton: true,
		confirmButtonText: 'Editar',
		cancelButtonText: 'Cancelar',
		preConfirm: () => {
			const form_data = new FormData();
			form_data.append('id', id);
			form_data.append('name', document.getElementById('name').value);
			form_data.append('lastname', document.getElementById('lastname').value);

			
			return form_data;
		}
	})
	
	if(!form.isConfirmed)
		return;

	send('edit', form.value);
})

delete_btn.addEventListener('click', function() {
	if(id === 0)
		return;

	const form_data = new FormData();
	form_data.append('id', id);

	send('delete', form_data);
})

rows.forEach(node => {
	node.addEventListener('click', function() {
		selected = Number(this.children[0].value);

		document.querySelector('.active-row')?.classList.remove('active-row');

		if(id === selected) {
			id = 0;
			edit_btn.classList.remove('active-btn');
			delete_btn.classList.remove('active-btn');
			return;
		}

		id = selected;
		edit_btn.classList.add('active-btn');
		delete_btn.classList.add('active-btn');
		this.classList.add('active-row')
	})
})