import {topNav} from './modules/topNav'
import {searchFilter} from './modules/searchFilter'
import {swDetecter} from './modules/swDetecter';
import {mdInner} from './modules/mdInner';




(()=>{
	swDetecter();
	topNav();
	//Ruta de los md, nombre del objeto a recorrer del json, nombre de la clase del div container que insertara los md
	mdInner("md/ordinarios/", 'ordinarios',"main-div");
	mdInner("md/banca/", 'banca',"main-div");
	


	if (document.body.classList.contains('home')) {
		// functions here
	}else if (document.body.classList.contains('portfolio')) {
		// functions here
		searchFilter();
	}
})();



