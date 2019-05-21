const simpleModal = document.getElementById('simpleModal');
const modalBtn = document.getElementById('modalBtn');
const closeBtn = document.getElementById('closeBtn');

modalBtn.addEventListener('click', openModal)

function openModal() {
  simpleModal.style.display = 'block';
}
closeBtn.addEventListener('click', closeModal)

function closeModal() {
  simpleModal.style.display = 'none';
}

window.addEventListener('click', clickOutsideModal)

function clickOutsideModal(e) {
  if (e.target === simpleModal) {
    simpleModal.style.display = 'none';
  }
}


//que aparezca por encima
//recuadro fijo y que no se ponga ni por arriba ni por debajo de los elementos.
//que no pase lo de bootstrap de correrse
//el fondo opacado
//capa filtro y capa