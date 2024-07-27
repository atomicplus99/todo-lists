export class Todo{


    constructor( tarea ){
        
        //asigna mediante la instancia los siguientes propiedades.

        this.id = new Date().getTime(); //numero en milisegundo que simulara como und id
        this.tarea = tarea;  //string recibido y guardado en la propiedad de class todo
        this.creado = new Date(); //crea una fecha actual
        this.completado = false; //false para indicar que la tarea esta incompleta por default
       

    }

   

}