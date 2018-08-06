import { logoSspds } from './imagesBase64'



function formatNumero(number) {
    const length = number.length
    switch (length) {
        case 1:
            return '000' + number
        case 2:
            return '00' + number
        case 3:
            return '0' + number
        default:
            return number

    }

}


function formatDate(date) {
    const data = new Date(date)
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        
    }

    return data.toLocaleDateString('pt-BR', options)
}
function formatDateYear(date) {
    const data = new Date(date)
    const options = {
        year: 'numeric',
       
        
    }

    return data.toLocaleDateString('pt-BR', options)
}

function html2Text(html) {
    const temp = document.createElement("div")
    temp.innerHTML = html
    //console.log('text: '+temp.innerText)
    return temp.textContent || temp.innerText || ""
}

function geraObjetoPdf(item){
    const matched = item.match(/<(\w+)>/g)
    
    switch (matched[0]) {
        case '<p>': return ({text: geraObjetoPdf(item.match(/[^(<p>)].*[^(<\/p>)]/g)[0])+'\n'})
        case '<strong>': return ({text: item.match(/[^(<strong>)].*[^(<\/strong>)]/g)[0], bold: true })   
           
    
        default: item
            break;
    }

}

function formatHtml2Array(html) {
   
    const newArray = html.match(/<(\w+)>(.*?)<\/\1>/gm)
    const arrayPdf = newArray.map(item => (geraObjetoPdf(item)))
    
    
   return arrayPdf
}

export function docDefinition(oficio) { 
 
    

    return Object({
    pageOrientation: 'portrait',
    pageSize: 'A4',
    pageMargins: [55, 30, 25, 40],
    //header: 'simple text',

    footer: function (currentPage, pageCount) {
        return {
            text: 'Página ' + currentPage.toString() + ' de ' + pageCount,
            alignment: 'right',
            margin: [0, 0, 30, 0],
            fontSize: 9,
        }
    },

    content: [
       
        {
            image: logoSspds,
            width: 260,
            height: 130,
        },
               
        { 
            text: 'Ofício n°: '+formatNumero(oficio.numero+"")+'/'+formatDateYear(oficio.data)+" - Ajd. Sec. CBPChoque/CPE.", 
            margin: [10,0,0,0],
            bold: true,
            fontSize: 12
        },
        { 
            text: [{text:'Assunto: ', bold: true},{text: oficio.assunto+'.', bold: false}], 
            margin: [10,0,0,0],
            bold: true,
            fontSize: 12
        },
        { 
            text: [{text:'Referência: ', bold: true},{text: oficio.referencia+'.', bold: false}], 
            margin: [10,0,0,0],            
            fontSize: 12
        },
        { 
            text: 'Fortaleza-CE, '+formatDate(oficio.data), 
            margin: [10,25,0,0],
            bold: true,
            fontSize: 12
        },
        { 
            text: oficio.destino, 
            margin: [10,25,0,0],
            fontSize: 12
        },
        { 
            text: html2Text(oficio.conteudo), 
            margin: [10,25,0,0],
            fontSize: 12
            
        },
    ],

    styles: {
        header: {
            fontSize: 12,
            bold: true,
            alignment: 'center'

        },
        anotherStyle: {
            italics: true,
            alignment: 'right'
        },
        table: {
            fontSize: 7.5,
            alignment: 'center',


        },
    }

})
}

