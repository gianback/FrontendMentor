const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  btnHamburguesa(e);
  verFotos(e);
  buttonsModal(e);
  sumaYResta(e);
  addCarrito(e);
  mostrarCarrito(e);
  btnDark(e);
});

let $imgPrincipal = d.getElementById("img-principal");
let $imgModalPrincipal = d.getElementById("img-modal-main");
//monto antes de dar agrgar carrito
let $monto = d.getElementById("numerito");
//la cantidad mostrar arriba del logo de carrito
const $cantidadCarrito = d.querySelector(".cantidad_carrito");
const $modalFotos = d.querySelectorAll(".img-sm-modal");
const $carBody = d.querySelector(".car-body");
const $carVacio = d.querySelector(".car-vacio");
const $imgMainChicas = d.querySelectorAll(".img-chicos");
//fotos secundarias al activar el modal

const btnHamburguesa = () => {
  const $btnHamburguesa = d.querySelector(".btn-menu");
  $btnHamburguesa.addEventListener("click", (e) => {
    const menuContainer = d.querySelector("#hamburguesa");
    const menuNav = d.querySelector(".menu-contenedor");
    const btnCierre = d.querySelector(".btn-cierre-menu");
    menuContainer.classList.remove("d-none");
    menuNav.classList.remove("d-none");
    btnCierre.addEventListener("click", (e) => {
      menuContainer.classList.add("d-none");
      menuNav.classList.add("d-none");
    });
  });
};
const verFotos = (e) => {
  //fotos secundarias principales

  $imgMainChicas.forEach((img) => {
    img.addEventListener("click", (e) => {
      for (let l = 0; l < $imgMainChicas.length; l++) {
        $imgMainChicas[l].classList.remove("img-select");
      }

      if (e.target.classList.contains("img-chicos")) {
        e.target.classList.add("img-select");
        $modalFotos.forEach((imagen) => {
          if (imagen.classList.contains(e.target.classList[2])) {
            imagen.classList.add("img-select");
          } else {
            imagen.classList.remove("img-select");
          }
        });
      }

      $imgPrincipal.src = img.src;
      $imgModalPrincipal.src = img.src;
    });
  });

  $modalFotos.forEach((imgModal) => {
    imgModal.addEventListener("click", (e) => {
      //agrega y quita el borde naranja
      for (let k = 0; k < $modalFotos.length; k++) {
        $modalFotos[k].classList.remove("img-select");
      }

      if (e.target.classList.contains("img-sm-modal")) {
        e.target.classList.add("img-select");
        for (let l = 0; l < $imgMainChicas.length; l++) {
          $imgMainChicas[l].classList.remove("img-select");
        }
        for (let i = 0; i < $imgMainChicas.length; i++) {
          if (
            e.target.classList.contains(`img-${i + 1}`) &&
            e.target.classList.contains("img-select")
          ) {
            $imgMainChicas[i].classList.add("img-select");
          }
        }
      }
      ///

      $imgModalPrincipal.src = imgModal.src;
      $imgPrincipal.src = imgModal.src;
    });
  });
};

const buttonsModal = () => {
  const $buttonModalBack = d.querySelector(".carousel-control-prev");
  const $buttonModalFront = d.querySelector(".carousel-control-next");

  $buttonModalBack.addEventListener("click", (e) => {
    if ($modalFotos[0].classList.contains("img-select")) {
      $modalFotos[0].classList.remove("img-select");
      $modalFotos[3].classList.add("img-select");
      $imgMainChicas[0].classList.remove("img-select");
      $imgMainChicas[3].classList.add("img-select");
      $imgModalPrincipal.src = $modalFotos[3].src;
      $imgPrincipal.src = $modalFotos[3].src;
    } else if ($modalFotos[1].classList.contains("img-select")) {
      $modalFotos[1].classList.remove("img-select");
      $modalFotos[0].classList.add("img-select");
      $imgMainChicas[1].classList.remove("img-select");
      $imgMainChicas[0].classList.add("img-select");
      $imgModalPrincipal.src = $modalFotos[0].src;
      $imgPrincipal.src = $modalFotos[0].src;
    } else if ($modalFotos[2].classList.contains("img-select")) {
      $modalFotos[2].classList.remove("img-select");
      $modalFotos[1].classList.add("img-select");
      $imgMainChicas[2].classList.remove("img-select");
      $imgMainChicas[1].classList.add("img-select");
      $imgModalPrincipal.src = $modalFotos[1].src;
      $imgPrincipal.src = $modalFotos[1].src;
      /*  $buttonModalFront.setAttribute("disabled", ""); */
    } else if ($modalFotos[3].classList.contains("img-select")) {
      $modalFotos[3].classList.remove("img-select");
      $modalFotos[2].classList.add("img-select");
      $imgMainChicas[3].classList.remove("img-select");
      $imgMainChicas[2].classList.add("img-select");
      $imgModalPrincipal.src = $modalFotos[2].src;
      $imgPrincipal.src = $modalFotos[2].src;
    }
  });

  $buttonModalFront.addEventListener("click", (e) => {
    if ($modalFotos[0].classList.contains("img-select")) {
      $modalFotos[0].classList.remove("img-select");
      $modalFotos[1].classList.add("img-select");
      $imgMainChicas[0].classList.remove("img-select");
      $imgMainChicas[1].classList.add("img-select");
      $imgModalPrincipal.src = $modalFotos[1].src;
      $imgPrincipal.src = $modalFotos[1].src;
    } else if ($modalFotos[1].classList.contains("img-select")) {
      $modalFotos[1].classList.remove("img-select");
      $modalFotos[2].classList.add("img-select");
      $imgMainChicas[1].classList.remove("img-select");
      $imgMainChicas[2].classList.add("img-select");
      $imgModalPrincipal.src = $modalFotos[2].src;
      $imgPrincipal.src = $modalFotos[2].src;
    } else if ($modalFotos[2].classList.contains("img-select")) {
      $modalFotos[2].classList.remove("img-select");
      $modalFotos[3].classList.add("img-select");
      $imgMainChicas[2].classList.remove("img-select");
      $imgMainChicas[3].classList.add("img-select");
      $imgModalPrincipal.src = $modalFotos[3].src;
      $imgPrincipal.src = $modalFotos[3].src;
      /*  $buttonModalFront.setAttribute("disabled", ""); */
    } else if ($modalFotos[3].classList.contains("img-select")) {
      $modalFotos[3].classList.remove("img-select");
      $modalFotos[0].classList.add("img-select");
      $imgMainChicas[3].classList.remove("img-select");
      $imgMainChicas[0].classList.add("img-select");
      $imgModalPrincipal.src = $modalFotos[0].src;
      $imgPrincipal.src = $modalFotos[0].src;
    }
  });
};

const sumaYResta = () => {
  const $btnResta = d.querySelector(".resta");
  const $btnSuma = d.querySelector(".suma");

  $btnResta.addEventListener("click", (e) => {
    if ($monto.textContent == 0) {
      $monto.innerHTML = `${parseInt($monto.textContent)}`;
    } else {
      $monto.innerHTML = ` ${parseInt($monto.textContent) - 1}`;
    }
    e.stopPropagation();
  });

  $btnSuma.addEventListener("click", (e) => {
    $monto.innerHTML = `${parseInt($monto.textContent) + 1}`;
    e.stopPropagation();
  });
};
const addCarrito = () => {
  const $btnAddCarrito = d.querySelector(".btn-carrito");

  //la cantidad agregada al carrito
  const $compraCarrito = d.querySelector(".compra__carrito");
  //total monto dle carrito
  const $totalCarrito = d.querySelector(".total__carrito");

  $btnAddCarrito.addEventListener("click", (e) => {
    if (parseInt($monto.textContent) !== 0) {
      $carBody.classList.remove("d-none");
      $carVacio.classList.add("d-none");

      let result =
        parseInt($cantidadCarrito.textContent) + parseInt($monto.textContent);

      $cantidadCarrito.innerHTML = `${result}`;

      let valorCarrito = parseInt($compraCarrito.textContent);

      let valorTotalCarrito = parseInt($totalCarrito.textContent);

      valorCarrito = result;

      valorTotalCarrito = valorCarrito * 125;

      $compraCarrito.innerHTML = `${valorCarrito}`;
      $totalCarrito.innerHTML = `${valorTotalCarrito}.00`;
      $cantidadCarrito.classList.remove("d-none");
    }
  });
};

const mostrarCarrito = (e) => {
  const $imgCarrito = d.querySelector(".img-carrito");
  const $ventanaCarrito = d.querySelector(".car-open");
  const $btnBasura = d.querySelector(".img-basura");

  $imgCarrito.addEventListener("click", (e) => {
    if ($ventanaCarrito.classList.contains("d-none")) {
      $ventanaCarrito.classList.remove("d-none");
    } else if (!$ventanaCarrito.classList.contains("d-none")) {
      $ventanaCarrito.classList.add("d-none");
    }
  });
  $btnBasura.addEventListener("click", (e) => {
    $cantidadCarrito.textContent = +0;
    $cantidadCarrito.classList.add("d-none");
    $carBody.classList.add("d-none");
    $carVacio.classList.remove("d-none");
  });
};
const btnDark = (btn, classDark) => {
  const $btnDark = d.querySelector(".btn-negro");
  const $selector = d.querySelectorAll("[data-dark]");
  let moon = "🌙",
    sun = "☀️";
  $btnDark.addEventListener("click", (e) => {
    if ($btnDark.textContent === moon) {
      $selector.forEach((el) => el.classList.add("dark_mode"));
      $btnDark.textContent = sun;
    } else {
      $selector.forEach((el) => el.classList.remove("dark_mode"));
      $btnDark.textContent = moon;
    }
  });
};
