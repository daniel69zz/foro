export function fecha(){
    const mes = new Date().getMonth();
    const dias = new Date().getDate();

    const anio = new Date().getFullYear();
    let flag2 = "0";

    const flag = dias;
    if (!(dias % 10 == flag)){
        flag2 = "";
    }
    switch(mes){
        case 0:
            return `Enero ${dias}`;
        case 1:
            return `Febrero ${flag2}${dias}, ${anio}`;
        case 2:
            return `Marzo ${flag2}${dias}, ${anio}`;
        case 3:
            return `Abril ${flag2}${dias}, ${anio}`;
        case 4:
            return `Mayo ${flag2}${dias}, ${anio}`;
        case 5:
            return `Junio ${flag2}${dias}, ${anio}`;
        case 6:
            return `Julio ${flag2}${dias}, ${anio}`;
        case 7:
            return `Agosto ${flag2}${dias}, ${anio}`;
        case 8:
            return `Septiembre ${flag2}${dias}, ${anio}`;
        case 9:
            return `Octubre ${flag2}${dias}, ${anio}`;
        case 10:
            return `Novimebre ${flag2}${dias}, ${anio}`;
        case 11:
            return `Diciembre ${flag2}${dias}, ${anio}`;
    }
}

export function hora(){
    const ahora = new Date();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();

    let flag2 = "0";

    const flag = minutos;
    if (!(minutos % 10 == flag)){
        flag2 = "";
    }

    return `${hora}:${flag2}${minutos}`;
}