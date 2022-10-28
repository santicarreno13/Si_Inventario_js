// Crear un sistema de informacio de inventarios -login ingreso y salida de productos...

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


            //-------------LOGIN-------------\\

const User = "a"
const Password = "1"

console.log('============================================');
console.log('|                Welcome a                 |');
console.log('|                   TuLón                  |');
console.log('============================================');
console.log('|                                          |');
console.log('|                  Login                   |');
console.log('|          Your User and Password          |');
console.log('|                                          |');
console.log('============================================');
console.log('                                            ');



rl.question('---> Ingresa tu nombre ', function (nombre) {  
    console.log('');
    rl.question('---> Ingresa tu Contraseña ', function (contra) { 
        console.log(``); 
        
        if(nombre == User && contra == Password){
            console.log(`Bienvenido ${nombre}`);   

            productos1();
            

        }else{
            console.log(`Usuario y/o contraseña incorrectas... vuelva a intentarlo...`);
        }
              
    });
});


            //-------------PRODUCTOS-------------\\


    rl.on('close', function(){
        //console.log('Adios');
        process.exit(0);
      })


            //-------------PRODUCTO 1-------------\\
      const pr=[{
        Producto: ``,
        Cantidad: ``,
        Detalle: ``
      }];

   
    function productos1(){


    console.log('============================================');
    console.log('|                Welcome a                 |');
    console.log('|                   TuLón                  |');
    console.log('============================================');
    console.log('|                                          |');
    console.log('|                  Productos               |');
    console.log('|                  El Tulón                |');
    console.log('|                                          |');
    console.log('============================================');
    console.log('|                      1                   |');
    console.log('|             Ingresa un producto          |');
    console.log('|             Ingresa una cantidad         |');
    console.log('|             Ingresa el detalle           |');
    console.log('|                    :3                    |');
    console.log('|                                          |');
    console.log('============================================');

    rl.question('--->Producto: ', function (product1) {
        
        console.log('                                            ');
        rl.question('--->Cantidad: ', function (cantidad1) {
            console.log('                                            ');
             
            rl.question('--->Detalle: ', function (detalle1) {
                console.log('                                            ');
                 
                
                console.log('========================================================================================');
                console.log('                                          ');
                console.log(`             El producto ingresado es: ${product1}                         `);
                console.log(`             la cantidad ingresada del prodcuto es: ${cantidad1}           `);
                console.log(`             Y el detalle del procuto es: ${detalle1}                      `);
                console.log('                    :3                                                    ');
                console.log('                                          ');
                console.log('========================================================================================');

                pr.push  ({
                    "Producto": `${product1}`,
                    "Cantidad": `${cantidad1}`,
                    "Detalle": `${detalle1}`
                })
                other1();
              });
          });  
      });
      
    }
     

                           //-------------ELECCION-------------\\
    function other1(){
        rl.question('--->Desea Ingresar otro Producto? SI o NO ', function (otro) {
            console.log('                                            ');
            if(otro=='si'){
                productos1();
            }else if(otro='no'){
                ListaProductos();
            }else{
                console.log(`No digitaste nada o lo digitaste mal... mmgv`)
            }
            
        });     
    }
    


        //-------------PRODUCTOS LIST-------------\\
            function ListaProductos(){
                console.log(`Aqui van los productos, ta en construccion :)`);

                console.table(pr);
                ListaAcciones()
            }

            function ListaAcciones(){

                        console.log('===========================================');
                        console.log('|                                          |');
                        console.log(`|             1.Eliminar un Producto       |`);
                        console.log(`|             2.Actualizar Un Producto     |`);
                        console.log(`|             3.Ver Productos              |`);
                        console.log('|             4.                           |');
                        console.log('|             5.Salir                      |');
                        console.log('===========================================');
                rl.question('--->Digite la opccion que desea realizar ', function (res) {
                    respu(res);

                    function respu(res){

                        switch(res){
                            case '1':
                                EliminarProductos();
                                break;
                            case '2':
                                ActualizarProducto();
                                break;
                            case '3':
                                ListaProductos();
                                break;
                            case '4':
                                ListaProductos();
                                break;
                            case '5':
                                Despedida();
                                break;
                        }
                    }
                        
                }); 
            
            }

        
        //-------------PRODUCTOS DELETE-------------\\
        function EliminarProductos(){
            console.log(`Aqui van los productos, ta en construccion :)`);          
            console.table(pr);
             rl.question('--->Que id deseas elimnar? ', function (eliminar) {
                delete pr[eliminar]
                console.log('                   ')   
                console.table(pr); 
                ListaAcciones();
                
                
            }); 
                
        }

        function Despedida(){
            console.log('=========================================================');
            console.log(`|Gracias por entrar a TuLón, Fue un placer atenderte :) |`)
            console.log('=========================================================');
            rl.close();
        }
        
            
            
            
            

 
    


    









