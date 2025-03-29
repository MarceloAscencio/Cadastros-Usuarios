document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nome = document.getElementById("inome");
    const email = document.getElementById("iemail");
    const senha = document.getElementById("isenha");
    const confirmarSenha = document.getElementById("iconfirma");

    function validarCampo(input, condicao) {
        if (condicao) {
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
        } else {
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
        }
    }

    function validarFormulario() {
        validarCampo(nome, nome.value.trim().length >= 3);
        validarCampo(email, email.value.includes("@") && email.value.includes("."));
        validarCampo(senha, senha.value.length >= 6);
        validarCampo(confirmarSenha, confirmarSenha.value === senha.value && senha.value.length >= 6);
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio se houver erros
        validarFormulario();

        if (document.querySelectorAll(".is-invalid").length === 0) {
            alert("Cadastro realizado com sucesso!");
            form.reset();
            document.querySelectorAll(".form-control").forEach(input => input.classList.remove("is-valid"));
        }
    });

    // Adiciona eventos para validar em tempo real
    nome.addEventListener("input", () => validarCampo(nome, nome.value.trim().length >= 3));
    email.addEventListener("input", () => validarCampo(email, email.value.includes("@") && email.value.includes(".")));
    senha.addEventListener("input", () => validarCampo(senha, senha.value.length >= 6));
    confirmarSenha.addEventListener("input", () => validarCampo(confirmarSenha, confirmarSenha.value === senha.value && senha.value.length >= 6));
});
