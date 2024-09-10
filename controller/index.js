
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

async function funcionCSS() {
 console.log("Función CSS ejecutada");
 const model = genAI.getGenerativeModel({
   model: "gemini-1.5-flash",
   systemInstruction: "eres experto en css da siempre soluciones optimas"
 });
 const result = await model.generateContent("dale inidcaiones sobre que es css");
 const response = result.response.text();
 console.log(response);

}


const model = genAI.getGenerativeModel({
 model: "gemini-1.5-flash",
 systemInstruction: "pregunta el nombre primero si el nombre es alan dile hola jefe"
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