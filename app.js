var species = {
	cat    : "cat.jpg",
	bear   : "bear.jpg",
	fish   : "fish.jpg"
};

function main(){
	/* 
	tout votre code doit se trouver dans cette fonction,
	vous pouvez biensur créer d'autres fonctions si nécessaire
	*/
	$('#holder').append($('<img>'));
	// 1. placez un listener sur le click des éléments <button>
	$('button').click(function(){
		console.log('click!');
	
	// 2. dans le callback récupérez le data attribute animal
		var animal = $(this).attr('data-animal');

	// 3. récupérerez dans l'objet species la valeur correspond à l'attribut récupéré
		console.log(species[animal]);
	
	// 4. ajoutez élément img en assignant à son attibut src la valeur précédemment récupérée
		var image = $('#holder img').attr('src', 'img/'+species[animal]);

	// 5. inserez cet élément dans l'élément ayant l'id holder
		

	})

	
	// 
	// Conseils : avancez étape par étape, console.log et debugger autant que nécessaires !
	
	
	 
}

$(document).ready(function(){
	main();
});