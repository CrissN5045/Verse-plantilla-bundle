function mdInnerJson(data, rutaMd, nameObjJson,classDiv){
	
	for (let i = 0; i < data[nameObjJson].length; i++) {
		
		const d = document,
		$main = d.querySelector(`div.${classDiv}`);

		fetch(`assets/${rutaMd}${data[nameObjJson][i].md}.md`)
		.then(res=>res.ok?res.text() : Promise.reject(res))
		.then(text =>{
			let div = document.createElement("div");
			div.innerHTML = new showdown.Converter().makeHtml(text);
			$main.appendChild(div);
		})
		.catch(err=>{
			console.log(err);
			let message = err.statusText || "Ocurrio un error";
			$main.innerHTML= `Error ${err.status}:${message}`;
		});
	}
}

export const mdInner = (rutaMd, nameObjJson, classDiv) => { 
function md(){
	fetch("./data.json")
.then(response => {
   return response.json();
})
.then(data =>  mdInnerJson(data, rutaMd, nameObjJson,classDiv));}

let funcion = md();
}


