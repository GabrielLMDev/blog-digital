import { LitElement, html, css } from 'lit-element';
import './login-litelement';

export class LoginLit extends LitElement {
    static get properties() {
        return {
            login: { type: Boolean }
        };
    }

    static get styles() {
        return css`
        login-litelement {
          margin-top: 15vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          /* Centra verticalmente */
          align-items: center;
        }
    `;
    }
    render() {
        return html`
        ${this.login
                ? html` <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="./assets/css/styles.css" rel="stylesheet">
</head>
<body>
<!-- Navigation-->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="#">
            <span>
                <img src="img/Am.ico" style="width: 40px;">
            </span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Acerca</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">Tienda</a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Todos los Productos</a></li>
                        <li>
                            <hr class="dropdown-divider" />
                        </li>
                        <li><a class="dropdown-item" href="#">Populares</a></li>
                        <li><a class="dropdown-item" href="#">Nuevos</a></li>
                    </ul>
                </li>
            </ul>
            <div class="d-flex">
                <button class="btn btn-outline-dark">
                <img src="img/cart.png" alt="..." style="height: 24px;"/>
                    <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                </button>
            </div>
        </div>
    </div>
</nav>
<!-- Header-->
<header class="py-5">
    <div class="container-banner">
        <img src="img/banner.jpg" style="width: 100%;">
    </div>

</header>
<!-- Section-->
<section class="py-5">
    <div class="container px-4 px-lg-5 mt-0">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

            <div class="col mb-5">
                <div class="card h-100">
                    <img class="card-img-top" src="img/1.jpg" alt="..." style="height: 200px; width: 150px;"/>
                    <div class="card-body p-4">
                        <div class="text-center">
                            <h5 class="fw-bolder">PRODUCTO</h5>
                            <span class="text-muted text-decoration-line-through">$20.00</span>
                            $18.00
                        </div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Agregar al Carrito</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col mb-5">
                <div class="card h-100">
                    <img class="card-img-top" src="img/2.jpg" alt="..." style="height: 200px; width: 150px;"/>
                    <div class="card-body p-4">
                        <div class="text-center">
                            <h5 class="fw-bolder">PRODUCTO</h5>
                            <span class="text-muted text-decoration-line-through">$20.00</span>
                            $18.00
                        </div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Agregar al Carrito</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col mb-5">
                <div class="card h-100">
                    <img class="card-img-top" src="img/3.jpg" alt="..." style="height: 200px; width: 150px;"/>
                    <div class="card-body p-4">
                        <div class="text-center">
                            <h5 class="fw-bolder">PRODUCTO</h5>
                            <span class="text-muted text-decoration-line-through">$20.00</span>
                            $18.00
                        </div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Agregar al Carrito</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col mb-5">
                <div class="card h-100">
                    <img class="card-img-top" src="img/4.jpg" alt="..." style="height: 200px; width: 150px;"/>
                    <div class="card-body p-4">
                        <div class="text-center">
                            <h5 class="fw-bolder">PRODUCTO</h5>
                            <span class="text-muted text-decoration-line-through">$20.00</span>
                            $18.00
                        </div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Agregar al Carrito</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col mb-5">
                <div class="card h-100">
                    <img class="card-img-top" src="img/5.jpg" alt="..." style="height: 200px; width: 150px;"/>
                    <div class="card-body p-4">
                        <div class="text-center">
                            <h5 class="fw-bolder">PRODUCTO</h5>
                            <span class="text-muted text-decoration-line-through">$20.00</span>
                            $18.00
                        </div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Agregar al Carrito</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col mb-5">
                <div class="card h-100">
                    <img class="card-img-top" src="img/6.jpg" alt="..." style="height: 200px; width: 150px;"/>
                    <div class="card-body p-4">
                        <div class="text-center">
                            <h5 class="fw-bolder">PRODUCTO</h5>
                            <span class="text-muted text-decoration-line-through">$20.00</span>
                            $18.00
                        </div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Agregar al Carrito</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col mb-5">
                <div class="card h-100">
                    <img class="card-img-top" src="img/7.jpg" alt="..." style="height: 200px; width: 150px;"/>
                    <div class="card-body p-4">
                        <div class="text-center">
                            <h5 class="fw-bolder">PRODUCTO</h5>
                            <span class="text-muted text-decoration-line-through">$20.00</span>
                            $18.00
                        </div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Agregar al Carrito</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col mb-5">
                <div class="card h-100">
                    <img class="card-img-top" src="img/8.jpg" alt="..." style="height: 200px; width: 150px;"/>
                    <div class="card-body p-4">
                        <div class="text-center">
                            <h5 class="fw-bolder">PRODUCTO</h5>
                            <span class="text-muted text-decoration-line-through">$20.00</span>
                            $18.00
                        </div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Agregar al Carrito</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
<footer class="py-5 bg-dark">
<div class="container">
    <p class="m-0 text-center text-white">Copyright &copy; 2023 Carolina Lopez Santiago
    </p>
    <p class="m-0 text-center text-white"> Proyecto - Blog Digital</p>
</div>
</footer>
  </body>
</html> `
                : html` <login-litelement @signin="${this._hiddenLogin}"></login-litelement> `}
    `;
    }

    _hiddenLogin() {
        this.login = true;
    }
}
