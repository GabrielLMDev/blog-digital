import { LitElement, html, css } from 'lit-element';

export class LoginLitelement extends LitElement {

    static get styles() {
        return css`
        body {
            font-family: 'Roboto', sans-serif;

        }
        a {
            text-decoration: underline;
            color: #f04594;
        }
        
        a:hover{
            color: #961b54;
        }
        
        .principal {
            margin:0;
            font-family: 'Roboto', sans-serif;
        }
        .text-small{
            font-weight: 400;
            margin: 0;
            font-size: 20px;
        }
        .text-medium{
            font-weight: 300;
            margin: 0;
            font-size: 35px;
        }
        .login-container {
            display: flex;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            width: 70vw;
            height: 70vh;
        }
        
        .login-form {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            /* Centra verticalmente */
            align-items: center;
            /* Centra horizontalmente */
            padding: 10px;
            width: 100%;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group label {
            font-weight: bold;
            display: block;
            margin-bottom: 10px;
        }
        
        .form-group input {
            display: block;
            width: 20vw;
            height: 10px;
            padding: 15px;
            font-size: 15px;
            font-weight: 400;
            line-height: 1.5;
            color: #3b3b3d;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #d1d3e2;
            border-radius: 30px;
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            text-align: center;
        }
        
        .login-button {
            background-color: #f04594;
            width: 15vw;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 10px;
            cursor: pointer;
            transition: background-color 0.3s;
            font-weight: 100;
            font-size: 15px;
        }
        
        .login-button:hover {
            background-color: #ad2665;
        }
        
        .login-button:active {
            background-color: #86194c;
        }
        
        .image-container {
            flex: 1;
            background-image: url('img/foto2.jpg');
            background-size: cover;
            background-position: center;
        }
        
        .image-container img {
            display: block;
            width: 100%;
            height: auto;
        }
        `;
    }

    render() {
        return html`
        <div class="principal">
        <div class="login-container">
            <div class="image-container">
            </div>
            <div class="login-form" style="text-align: center;">
                <h2 class="text-small">¡Bienvenido de nuevo!</h2>
                <h2 class="text-medium">Inicia sesión para continuar</h2>
                <form id="formulario">
                <div class="form-group" style="margin-top: 30px;">
                <input type="text" id="username" name="username" placeholder="Nombre de Usuario" required>
            </div>
            <div class="form-group" style="margin-bottom:5px;">
                <input type="password" id="password" name="password" placeholder="Contraseña" required>
            </div>
            <input type="checkbox" name="mostrar" id="mostrar">
            <label for="mostrar">Mostrar Contraseña</label>
            <div class="form-group" style="margin-top: 30px;">
            <button @click="${this._login}" class="login-button">Iniciar sesión</button>
            </div>

        </form>

        <a href="#" style="margin-top: 20px;">Olvide mi contraseña</a>
        <a href="#" style="margin-top: 5px;">Crear cuenta</a>

    </div>
</div>
</div>`;
    }

    _login() {
        const username = this.shadowRoot.querySelector("#username").value;
        const pass = this.shadowRoot.querySelector("#password").value;

        if (username == 'Caro' && pass == 'admin') {
            this.dispatchEvent(new CustomEvent('signin', {
                detail: { login: true },
                bubbles: true, composed: true
            }));
        }
    }
}

customElements.define('login-litelement', LoginLitelement);