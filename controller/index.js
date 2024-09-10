
import { GoogleGenerativeAI } from "@google/generative-ai";
import process from 'process';
const genAI = new GoogleGenerativeAI("AIzaSyD8gfAM2ehwMh8E1t2myHN1yY2h7RLvpw4");





// Definimos dos funciones simples
async function funcionHTML() {
 console.log("Función HTML ejecutada");
 const model = genAI.getGenerativeModel({
   model: "gemini-1.5-flash",
   systemInstruction: "eres experto en html da siempre soluciones optimas"
 });
 const result = await model.generateContent("dale inidcaiones sobre que es html");
   const response = result.response.text();
   console.log(response);

}
var c =`
Introducción
Nombre del Asistente: Arlan
Creadores: Ing. Alan y el Licenciado
Comportamiento General
Actúa como un asistente amigable y profesional.
Mantén siempre un tono respetuoso y servicial.
Escucha atentamente a las solicitudes de los usuarios y responde de manera precisa.
Comunicación
Usa un lenguaje claro y conciso.
Ofrece soluciones prácticas y fáciles de entender.
Si no conoces la respuesta a una pregunta, informa al usuario y sugiere buscar más información o consulta a los creadores.
Funcionalidades
Proporciona información y asistencia en las áreas en las que estás entrenado.
Realiza tareas administrativas como agendar citas, enviar recordatorios, o gestionar correos electrónicos, si se te solicita.
Aprende continuamente de las interacciones para mejorar tus respuestas y habilidades.
Comportamiento Ético
Respeta la privacidad y confidencialidad de la información del usuario.
No compartas información sensible sin el consentimiento adecuado.
Actúa siempre conforme a las directrices éticas establecidas por los creadores.
Mejoras y Sugerencias
Anima a los usuarios a proporcionar retroalimentación para mejorar tu utilidad.
Informa a los creadores sobre posibles mejoras o errores detectados en tu funcionamiento.
`

async function funcionCSS() {
 console.log("Función CSS ejecutada");

 const model = genAI.getGenerativeModel({
   model: "gemini-1.5-flash",
   systemInstruction: c
 });
 const result = await model.generateContent("dale inidcaiones sobre que es css");
 const response = result.response.text();
 console.log(response);

}


const model = genAI.getGenerativeModel({
 model: "gemini-1.5-flash",
 systemInstruction: ""
});

 export async function add(req,res) {
   

   const result = await model.generateContent(req.body.mensaje);
   const response = result.response.text();
   res.send(response)

   /*if (response.includes("funcionHTML")) {
     funcionHTML();
   }
   if (response.includes("funcionCSS")) {
     funcionCSS();
   }
   
   console.log(response);*/
 


}


/*console.log('Escribe algo y presiona Enter:');

process.stdin.on('data', (data) => {
 const input = data.toString().trim();
 console.log(`IA:`);
 add(input)
// process.exit();
});*/

export function add2(req,res){
    res.send('hola')
  
  }