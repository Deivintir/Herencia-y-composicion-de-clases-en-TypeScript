/**Herencia y composición de clases en TypeScript:
 * Concluimos el módulo con una característica esencial en la programación orientada a objetos como es el uso de herencia, que permite la reutilización de código y el
 * establecimiento de una jerarquía de clases.
 * 
 * Comenzaremos conociendo qué es la herencia y qué terminología lleva asociada para seguidamente aprender de forma práctica cómo utiliza TypeScript las interfaces en
 * cuanto a su implementación en clases.
 * 
 * Posteriormente, aprenderemos cómo se implementa la herencia en TypeScript realizando varias prácticas relacionadas con las superclases y las subclases, y qué especi_
 * ficaciones resultan en el caso de las clases abstractas.
 * 
 * Para concluir, estudiaremos de forma práctica una alternativa a la herncia, la composición de clases; cubriremos de esta manera los principales casos de uso de estas
 * características en TypeScript. */
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**Herencia de clases en POO:
 * Una de las características fundamentales de la programación orientada a objetos es la herencia, un mecanismo que permite que una clase puede heredar de otra sus miembros,
 * propiedades y métodos, con el objetivo de reutilizar código, generando así una jerarquía de clases dentro de una solución de software.
 * 
 * Si una clase deriva de otra, hereda sus propiedades y métodos, y puede añadir nuevas propiedades y métodos, o redefinir los heredados. En programación orientada a objetos,
 * se define la siguiente terminología para esta característica de herencia de clases. 
 * Superclase: También conocida como clase base o principal, es aquella de la que otras clases heredan sus métodos o propiedades.
 * Subclase. También conocida como clase derivada, extendida o hija, es aquella que hereda los métodos o propiedades de una superclase.
 * Reutilización: Implementación que permite reutilizar código en los programas mejorando su limpieza y mantenimiento evolutivo.
 * 
 * Aunque la herencia en JavaScript es una característica incorporada a partir de ECMAScript 2015, es en TypeScript donde adopta un papel relevante, pues permite ser combinada
 * con el tipado estático propio de este superset, como veremos en los siguiente casos de uso.*/
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**Implementación de la herencia de interfaces:
 * EN cierto modo, las interfaces también usan la característica de herencia y por eso se puede incluir su uso en esta unidad, pero su principal propósito, más que la reu_
 * tilización de código, es establecer un contrato para las clases en las que se implemente, que obligue a estas a que declaren sus propiedades. La sintaxis que emplean las
 * clases que usan una interfaz es la palabra "implement" justo después del identificador de clase y, a continuación, el identificador de la interfaz.
 * 
 * class IdentificadorClase implements IdentificadorInterfaz {
 *      código de la clase;
 * }
 * 
 *Ejemplo: */

interface Order {
    id:string,
    date:Date,
    positions:Array<any>,
    userId:string,
}

class ComputerOrder implements Order{
    id:string;
    date:Date;
    positions:Array<any>;
    userId: string; //Comentar para ver el error Lín.58.
    //Esta clase continúa despues del párrafo siguiente.

/**A continuación, vamos a realizar la transpilación escribiendo en la terminal de VSC el correspondiente comando:
 * 
 * tsc ts/main.ts --outFile js/main.js --taret ES2015 --watch
 * 
 * Al realizar el proceso, comprobaremos en la terminal que existe un error, puesto que en la clase "CompuerOrder" que implementa la interfaz "Order" no hemos declarado
 * la propiedad "userId", es decir, es obligatorio que contenga todas las propiedades y métodos, aunque la cabecera de estos últimos no se suele declarar en las interfaces
 * de TypeScript.
 * 
 * Una vez que se añada esa propiedad, desaparecerá el error; pero se podrán añadir además otras propiedades y, por supuesto, otros métodos. (Para ver el error comentar lín.51) */

    //Aquí continúa la clase.
    constructor(id:string, date:Date, userId:string){
        this.id = id;
        this.date = date;
        this.userId = userId;
    }
    addPosition(position:any):void{
        this.positions.push(position);
    }
    getPositions():Array<any>{
        return this.positions;
    }
}

/**Ahora observaremos que la clase queda definida e implementa correctamente el contrato de la interfaz, es decir, declara una serie de propiedades que serán obligatorias
 * para modelar y estructurar los datos que manejará nuestra aplicación. */
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

