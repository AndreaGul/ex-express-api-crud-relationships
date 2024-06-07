const {PrismaClient} = require("@prisma/client");
const { options } = require("../routers/post");
const prisma = new PrismaClient();

const bodyData ={
    title:{
        in:["body"],
        notEmpty: {
            errorMessage: 'Titolo è un campo obbligatorio.',
            bail: true
        },
        isString: {
            errorMessage: 'Titolo deve essere una stringa.',
            bail: true
        },
        isLength: {
            errorMessage: 'Titolo deve essere di almeno 3 caratteri',
            options: {min:3}
        }
    },
    img:{
        in:["body"],
        optional:{
            options:{nullable:true},
        },
        isString: {
            errorMessage: 'img deve essere una stringa.',
            bail: true,
        },
        matches:{
            options:[/\.(jpg|jpeg|png|gif)$/i],
            errorMessage: 'img deve avere un \'estenzione valida(jpg, jpeg, png, gif)',
        }
    },
    content:{
        in:["body"],
        notEmpty: {
            errorMessage: 'Il contenuto è un campo obbligatorio.',
            bail: true
        },
        isString: {
            errorMessage: 'Il content deve essere una stringa.',
            bail: true
        },
        isLength: {
            errorMessage: 'Il contenuto contenere almeno 3 caratteri',
            options: {min:3}
        }
    },
    published:{
        in:["body"],
        isBoolean: {
            errorMessage: 'Published deve essere un booleano'
        }
    }
}

module.exports ={
    bodyData,
}