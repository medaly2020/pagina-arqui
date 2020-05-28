var imagenes = ['imagenes/G_a2.jpg','imagenes/G_a3.jpg','imagenes/G_b1.jpg','imagenes/G_f3.jpg', 'imagenes/G_f2.jpg','imagenes/G_l1.jpg', 'imagenes/G_l2.jpg', 'imagenes/G_m2.jpg', 'imagenes/a2.jpg', 'imagenes/fondo2.jpg'],
cont = 0;

function carrousel(contenedor)
{
	contenedor.addEventListener('click', e =>{
		let atras = contenedor.querySelector('.atras'),
		adelante = contenedor.querySelector('.adelante'),
		img = contenedor.querySelector('img'),
		tgt = e.target;/*identifica el elemento html que disparo el evento*/
		
		if(tgt == atras){
			if(cont > 0){
					img.src =imagenes[cont -1];
					cont--;
			}else{
				img.src = imagenes[imagenes.length -1];
				cont = imagenes.length -1;
			}
				
		}else if(tgt == adelante){
			if(cont < imagenes.length -1){
					img.src = imagenes[cont + 1];
					cont++;
			}else{
				img.src = imagenes[0];
				cont =0;
			}
			
		}
	});
}
document.addEventListener("DOMContentLoaded", () =>{
	let contenedor = document.querySelector('.contenedor');
	carrousel(contenedor);
});