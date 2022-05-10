/*1#crea un array che parte vuoto ma viene riempito automaticamente  di 10 numeri casuali da 1 a 1000 generati dal pc, possono esserci anche doppioni;*/

/* const myArray=[];

for(let i = 0; i < 10; i++){

    myArray.push(Math.round(Math.random() * 1000)+1);
}
console.log(myArray); */


/*/Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri (generati come prima), stampiamo nell’id rosso i numeri dispari e in verde i numeri pari;
*/ 
/* const myArray=[];

for(let i = 0; i < 20; i++){
    
    myArray.push(Math.round(Math.random() * 1000)+1);

    if(myArray[i] % 2 != 0){
        document.getElementById("rosso").innerHTML += "dispari:" +(myArray[i] )+" ";
    }else{
        document.getElementById("verde").innerHTML += "pari:" +(myArray[i])+" ";
    }
}
console.log(myArray);  */

/*
Risistemare i Jsnack fatti insieme questa mattina.
#crea 2 array, di 5 stringhe il primo e di 2 stringhe il secondo, stampa dentro una UL dove ogni LI ha come
 contenuto principale in ordine, le parole del primo array e come sotto-contenuto annidato le 2 parole del secondo array in una UL annidata, tipo:
<ul>
 	<li>parola1 arr1
		<ul>
 			<li>parola1 arr2</li>
			<li>parola2 arr2</li>
		</ul>
	</li>
	<li>parola2 arr1
		<ul>
 			<li>parola1 arr2</li>
			<li>parola2 arr2</li>
		</ul>
	</li>
	<li>parola3 arr1
	…etc*/

    const array=["parola1-1","parola2-1","parola3-1","parola4-1","parola5-1"];
    const sottoarray=["parola2-1","parola2-2","parola3-2"];

    for(let i = 0; i < array.length; i++){
    const node = document.createElement("li");

    const textnode = document.createTextNode(array[i]);

    node.appendChild(textnode);

    document.getElementById("myList").appendChild(node);

    for(let j = 0; j < sottoarray.length; j++){
        const node_two = document.createElement("li");

        const textnode_two = document.createTextNode(sottoarray[j]);
    
        node_two.appendChild(textnode_two);
    
        document.getElementById("secondlist").appendChild(node_two);
    }
    
}
