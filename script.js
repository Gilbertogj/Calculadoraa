window.addEventListener('load', inicio());

function inicio(){
    cambiar_fondo();
    var memoria=0;
    var operacion='';
    var memoria2=0;
    var repeticion=false;
    var aux=-1;
    document.querySelector('#t1').checked=true;
    document.querySelectorAll('td').forEach(tecla => {
        tecla.addEventListener('click',function(event){
            if(document.getElementsByClassName('darks')[0]){
                aux=1;
                resultado=document.getElementsByClassName('darks')[0];
            }
            else  if(document.getElementsByClassName('dias')[0]){
                aux=2;
                resultado=document.getElementsByClassName('dias')[0];
            }
            else  if(document.getElementsByClassName('flors')[0]){
                aux=3;
                resultado=document.getElementsByClassName('flors')[0];
                
            }
            
            
            if(resultado.innerHTML==''){
                if(tecla.id=='min'){
                    resultado.innerHTML='-';
                }
                else if(tecla.id=='dot'){
                    resultado.innerHTML='0.';
                }
                else if(+resultado.innerHTML+0==+resultado.innerHTML){
                    resultado.innerHTML=+tecla.id;
                }
                else{
                    resultado.innerHTML=resultado.innerHTML;
                }
            }
            else if(resultado.innerHTML=='-'){
                if( +tecla.innerHTML+0==+tecla.innerHTML ){
                    resultado.innerHTML='-'+tecla.id;
                }
                else if(tecla.id=='dot'){
                    resultado.innerHTML= resultado.innerHTML+'0.';
                }
                else if(tecla.id=='min'){
                    resultado.innerHTML= '';
                }
                

            }    
            else if(+resultado.innerHTML+0==+resultado.innerHTML){
                  if(tecla.id=='delete'){
                    resultado.innerHTML='';
                }

                if(tecla.id=='plus'){
                    memoria=+resultado.innerHTML;
                    resultado.innerHTML='';
                    operacion='+';
                    repeticion=false;
                }
                else  if(tecla.id=='min'){
                    memoria=+resultado.innerHTML;
                    resultado.innerHTML='';
                    operacion='-';
                    repeticion=false;
                }
                else  if(tecla.id=='mul'){
                    memoria=+resultado.innerHTML;
                    resultado.innerHTML='';
                    operacion='*';
                    repeticion=false;
                }
                else  if(tecla.id=='div'){
                    memoria=+resultado.innerHTML;
                    resultado.innerHTML='';
                    operacion='/';
                    repeticion=false;
                }
                else if(+tecla.innerHTML+0==+tecla.innerHTML){
                      resultado.innerHTML=resultado.innerHTML+tecla.innerHTML;
                    repeticion=false;
                }
                else if(tecla.id=='reset'){
                    repeticion=false;
                    resultado.innerHTML='';
                }
                else if(tecla.id=='dot' && resaux==+resultado.innerHTML && resultado.innerHTML[(resultado.innerHTML.length-1)]
                !='.'){
                
                    resultado.innerHTML=+resultado.innerHTML+'.';
                    repeticion=false;
                }
                
                else if(tecla.id=='igual'){
                    if(operacion=='+'){
                        if(repeticion){
                            memoria=memoria2+(+resultado.innerHTML);
                  
                        }
                        else{
                            memoria2=+resultado.innerHTML;
                            memoria=memoria+(+resultado.innerHTML);
                            repeticion=true
                        }
                        resultado.innerHTML=Math.round(memoria*1000000)/1000000;
                        }
                    else if(operacion=='-'){
                        if(repeticion){
                            memoria=-memoria2+(+resultado.innerHTML);
                  
                        }
                        else{
                            memoria2=+resultado.innerHTML;
                            memoria=memoria-(+resultado.innerHTML);
                            repeticion=true
                        }
                        resultado.innerHTML=Math.round(memoria*1000000)/1000000;
                        }
                    
                    else if(operacion=='*'){
                        if(repeticion){
                            memoria=memoria2*(+resultado.innerHTML);
                  
                        }
                        else{
                            memoria2=+resultado.innerHTML;
                            memoria=memoria*(+resultado.innerHTML);
                            repeticion=true
                        }
                        resultado.innerHTML=Math.round(memoria*1000000)/1000000;
                        }
                    
                    else if(operacion=='/'){
                        if(repeticion){
                            memoria=(+resultado.innerHTML)/memoria2;
                  
                        }
                        else{
                            memoria2=+resultado.innerHTML;
                            memoria=memoria/(+resultado.innerHTML);
                            repeticion=true
                        }
                        resultado.innerHTML=Math.round(memoria*1000000)/1000000;
                        }
                    
                }
               
            }
            
           
            
            
        })
    });
}
function cambiar_fondo(){
    var theme1=document.getElementById('t1');
    var theme2=document.getElementById('t2');
    var theme3=document.getElementById('t3');

    theme2.addEventListener('click', function(){
        
        document.querySelector('body').classList.remove('flor');
        document.querySelector('body').classList.add('dia');
        document.querySelector('body').classList.remove('dark');
        document.querySelector('#resultado').classList.remove('flors');
        document.querySelector('#resultado').classList.add('dias');
        document.querySelector('#resultado').classList.remove('darks');
        
    });
    theme3.addEventListener('click', function(){
        
        document.querySelector('body').classList.remove('dia');
        document.querySelector('body').classList.add('flor');
        document.querySelector('body').classList.remove('dark');
        document.querySelector('#resultado').classList.remove('dias');
        document.querySelector('#resultado').classList.add('flors');
        document.querySelector('#resultado').classList.remove('darks');
       
    });
    theme1.addEventListener('click', function(){
        
        document.querySelector('body').classList.remove('flor');
        document.querySelector('body').classList.remove('dia');
        document.querySelector('body').classList.add('dark');
        document.querySelector('#resultado').classList.remove('flors');
        document.querySelector('#resultado').classList.remove('dias');
        document.querySelector('#resultado').classList.add('darks');
       
    });


}
