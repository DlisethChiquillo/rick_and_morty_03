const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword =  /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;;


export const validate = (userData)=> {
    let errors = {}

    if(!regexEmail.test(userData.username)) {
        errors.username = 'El username debe ser un email valido'
    }
    else if (!userData.username) {
        errors.username = 'El nombre del usuario no puede estar vacio'
    }
    else if(userData.username.length > 35) {
        errors.username = 'El nombre de usuario nmo puede tener mas de 35 caracteres'
    }
    
    if(!regexPassword.test(userData.password)) {
        errors.password = 'La contraseña tiene que tener al menos un número'
    }

    if(userData.password.length < 6 && userData.password > 10) {
        errors.password = 'la contraseña tiene que tener una longitud entre 6 y 10 caracteres.'
    }
    
    return errors
}