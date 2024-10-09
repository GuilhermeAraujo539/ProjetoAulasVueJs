<template>

    <footer class="container">
      
             
            <img style="height: 9%; width: 9%;x" src="../assets/logo.png" alt="Logo Condô Store">

            <div class="row">
               <section class="col-md-4">
                <h5>Home</h5>
                    <a class="home" href="#">Voltar ao Topo!</a>
                </section>
     
                <section class="col-md-4">
                    <h5>Sobre Nós</h5>
                        <ul class="nav-flex-c">
                            <p class="about-us text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        </ul>
                </section>
    
                <section class="col-md-4">
                    <h5>Contato</h5>
                        <ul class="nav-flex-c">
                            <li class="nav-item">
                              <a class="nav-link text-white" href="tel:+5511111111111" >Tel: (11) 40022-8922</a>
                            </li>

                            <li class="nav-item">
                              <a class="nav-link text-white" href="https://w.app/N6TlUz" target="_blank">WhatsApp: (11) 40022-8922</a>
                            </li>
                        </ul>
                </section>

               <br>
               <br>
               <br>
               <br>
               <br>
               <p>&copy; 2024 Condô Store</p>
            </div>
           
     

      
    
    </footer>
    
    </template>
    
    
    <script>
    export default{
        name: 'FooterPageShop'
    }
    </script>
    
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');




   
    .container{
        background-color: rgb(0, 0, 0);
        padding-left: 20px  
    }

    .row{
        text-decoration: none; 
        color: white;
        letter-spacing: 1px; 
        font-weight: 500;  
        font-family:Poppins, sans-serif; text-transform: uppercase;

    }
   

    h5, .home{
        color: white;
        text-decoration: none;
    }

    .nav-flex-c, p{
        align-items: flex-end;
    }

    p{
        display: flex;
        justify-content: center;
        color: white;
    }
    </style>
    