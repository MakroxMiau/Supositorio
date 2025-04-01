$(document).ready(function() {
    $('#formulario-registro').on('submit', function(e) {
        e.preventDefault();
        let valido = true;

        // Validar campos vacíos (excepto dirección)
        $('input:required').each(function() {
            if ($(this).val().trim() === '') {
                $(this).addClass('is-invalid');
                valido = false;
            } else {
                $(this).removeClass('is-invalid');
            }
        });

        // Validar correo
        const email = $('#email').val();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            $('#email').addClass('is-invalid');
            valido = false;
        }

        // Validar contraseña
        const clave = $('#clave').val();
        if (!/(?=.*\d)(?=.*[A-Z])/.test(clave) || clave.length < 6 || clave.length > 18) {
            $('#clave').addClass('is-invalid');
            valido = false;
        }

        // Validar coincidencia de contraseñas
        if ($('#clave').val() !== $('#clave-repetir').val()) {
            $('#clave-repetir').addClass('is-invalid');
            valido = false;
        }

        // Validar edad (mínimo 13 años)
        const fechaNacimiento = new Date($('#fecha-nacimiento').val());
        const hoy = new Date();
        const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        if (edad < 13) {
            $('#fecha-nacimiento').addClass('is-invalid');
            valido = false;
        }

        // Enviar si es válido
        if (valido) {
            alert('¡Registro exitoso!');
            this.reset();
        }
    });

    // Limpiar errores al modificar
    $('input').on('input', function() {
        $(this).removeClass('is-invalid');
    });
});