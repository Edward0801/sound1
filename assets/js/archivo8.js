 fetch('https://reqres.in/api/users/13')
     .then( resp => resp.json())
     .then (usuario=>{
         console.log(usuario.data);
     })


//si yo necesito trabajar con esta informacion dentro de la promesa:

//fetch('https://reqres.in/api/users/12')
  //  .then( resp => {

 //   	resp.json().then (usuario=>{

 //   		console.log(usuario.data);
 //   	});
    
  //  });

    //si al mismo tiempo debo disparar otra peticion con la misma informacion:

//fetch('https://reqres.in/api/users/12')
//    .then( resp => {

 //   	resp.json().then (usuario=>{
 //   		console.log(usuario.data);
 //   	});

 //   	resp.json().then (usuario=>{
 //   		console.log(usuario.data);
 //   	});
    
  //  });

    //en este caso debemos clonar

  //  fetch('https://reqres.in/api/users/12')
  //  .then( resp => {

   // 	resp.clone().json()
   // 	.then (usuario=>{
    // 		console.log(usuario.data);
    // 	});

    // 	resp.json().then (usuario=>{
    // 		console.log(usuario.data);
    // 	});
    
   //  });

//fetch('https://reqres.in/api/users/12')
  //  .then( resp => {
//
        
  //      if ( resp.ok ) {
    //        return resp.json();
      //  } else {
        //    // console.log('No existe el usuario 1000');
         //   throw new Error('No existe el usuario 1000');
      //  }

            
    
   // })
   // .then( console.log )
  //  .catch( error => {
   //     console.log('Error en la petición');
   //     console.log(error);
   // });

   
fetch('https://reqres.in/api/users/13')
    .then( resp => {

        
        if ( resp.ok ) {
            return resp.json();
        } else {
             console.log('No existe el usuario ');
            throw new Error('No existe el usuario');
        }

            
    
    })
    .then( console.log )
    .catch( error => {
        console.log('Error en la petición');
        console.log(error);
    });




