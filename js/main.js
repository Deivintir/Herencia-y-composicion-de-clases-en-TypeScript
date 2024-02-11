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
class ComputerOrder {
    //Esta clase continúa despues del párrafo siguiente.
    /**A continuación, vamos a realizar la transpilación escribiendo en la terminal de VSC el correspondiente comando:
     *
     * tsc ts/main.ts --outFile js/main.js --target ES2015 --watch
     *
     * Al realizar el proceso, comprobaremos en la terminal que existe un error, puesto que en la clase "CompuerOrder" que implementa la interfaz "Order" no hemos declarado
     * la propiedad "userId", es decir, es obligatorio que contenga todas las propiedades y métodos, aunque la cabecera de estos últimos no se suele declarar en las interfaces
     * de TypeScript.
     *
     * Una vez que se añada esa propiedad, desaparecerá el error; pero se podrán añadir además otras propiedades y, por supuesto, otros métodos. (Para ver el error comentar lín.51) */
    //Aquí continúa la clase.
    constructor(id, date, userId) {
        this.id = id;
        this.date = date;
        this.userId = userId;
    }
    addPosition(position) {
        this.positions.push(position);
    }
    getPositions() {
        return this.positions;
    }
}
/**Ahora observaremos que la clase queda definida e implementa correctamente el contrato de la interfaz, es decir, declara una serie de propiedades que serán obligatorias
 * para modelar y estructurar los datos que manejará nuestra aplicación. */
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**Implementación de la herencia de clases:
 * La herencia de clases, como detallamos en el primer apartado, permite jerarquizar las diferentes clases de una aplicación y reutilizar el código declarado en las super_
 * clases. En el caso de TypeScript, su sintaxis se lleva a cabo añadiendo en la declaración de la subclase la palabra reservada "extends" seguida del identificador de la
 * superclase de la que hereda.
 *
 * class IdentificadorClase extends IdentificadorSuperclase{
 *      constructor(){
 *          super()
 *      }
 * }
 *
 * Además, en el constructor de la clase se empleará el método "super()" para referir al mismo método de la clase padre.
 * Ejemplo: */
class Employee {
    constructor(name, surname, dni, birthDate) {
        this.name = name;
        this.surname = surname;
        this.dni = dni;
        this.birthDay = birthDate;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getSurname() {
        return this.surname;
    }
    setSurname(surname) {
        this.surname = surname;
    }
    getDni() {
        return this.dni;
    }
    setDni(dni) {
        this.dni = dni;
    }
    getBirthDay() {
        return this.birthDay;
    }
    setBirthDay(birthday) {
        this.birthDay = birthday;
    }
}
class Manager extends Employee {
    constructor(name, surname, dni, birthDay, role) {
        super(name, surname, dni, birthDay);
        this.role = role;
    }
}
/**Aquí podemos comprobar que disponemos de una clase padre o superclase "Employee" que dispone de una serie de propiedades y métodos para trabajar con los datos de los
 * objetos que se instancien de ella. Además, podemos implementar para las propiedades la modificación de acceso "protected", que permitirá hacer accesible la propiedad
 * en su clase y en las clases que hereden de esta.
 *
 * Y, a continuación, tenemos una clase "Manager" que hereda de "Employee", con lo cual podemos usar en su constructor el método "super()" para pasarle como argumentos
 * los recibidos en la instancia de objetos de esta clase "Manager" y que se invoque el constructor en la instancia de objetos de esta clase "Manager" y que se incoque el
 * constructor de la clase padre, de manera que no es necesario repetir todo el código de la clase padre.
 *
 * Para comprobar su funcionamiento, vamos a añadir una instancia de la clase hija "Manager" añadiendo el siguiente código. */
let manager = new Manager('David', 'Rodríguez', '74896654E', new Date('1984-10-29'), 'ventas');
console.log(manager.getName());
console.log(manager.getBirthDay());
console.log(manager.role);
/**Al grabar y ejecutar este archivo main.ts, obtendremos los mensajes en la consola del navegador, confirmando su correcto funcionamiento.
 *
 * Además, la clase padre también puede usarse para instanciar objetos; por ejemplo, podemos añadir el siguiente código y no tendrá ningún tipo de error: */
let empleadoIn = new Employee('sara', 'Pérez', '54632215D', new Date('1990,10,05'));
/**Otra manera de implementar herencia es mediante clases abstractas, y en este caso servirán, como en el caso de las interfaces, para obligar a las clases que hereden de
 * ellas a que implementen una serie de miembros.
 *
 * Para estudiar este tipo de herencia, vamos a escribir el siguiente código, en el que escribimos una clase abstracta que ya usamos anteriormente; */
class Price {
}
class ArticlePrice extends Price {
    constructor(regularPrice, savingPercent, currency) {
        super();
        this.regularPrice = regularPrice;
        this.savingPercent = savingPercent;
        this.currency = currency;
    }
    setPrice(regularPrice, savingPercent) {
        this.regularPrice = regularPrice;
        this.savingPercent = savingPercent;
    }
    getPrice() {
        return this.regularPrice - this.savingPercent / 100 * this.regularPrice + ' ' + this.currency;
    }
}
/**En este tipo de herencia con una superclase abstracta, estamos implementando el método "setPrice()" de manera obligatoria en las clases que heredan de "Price"; si no
 * estuviera declarado y definido, el transpilador lanzaría un error. Respecto a la clase hija "ArticlePrice", aunque en este caso no esté usando las propiedades de clase
 * padre, es obligatorio introducir el método "super()" dejándolo vacío.
 *
 * Una vez declaradas las clases, podemos instanciar objetos solamente de la clase hija, puesto que, recordemos, las clases abstractas se usan como interfaces y no es posi_
 * ble hacerlo de otro modo. Añadimos el siguiente código para comprobarlo: */
let articleInPrice = new ArticlePrice(150, 0, '€');
console.log(articleInPrice.getPrice());
articleInPrice.setPrice(200, 25);
console.log(articleInPrice.getPrice());
/**Al grabar y transpilar el archivo, podremos comprobar en el navegador que funciona correctamente. */
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**Composición de clases:
 * Una alternativa a la herencia es la composición, otro mecanismo también utilizado en muchos lenguajes de programación que implementan orientaciòn a objetos. Más que un
 * mecanismo sintáctico, se trata de una forma de utilizar las clases para instanciar objetos mediante el uso de varias clsaes a la vez, de ahí que se denomine composición
 *
 * Vamos a ver un ejemplo práctico: */
class User {
    constructor(name, surname) {
        this.name = name;
    }
    setAdress(adress) {
        this.adress = adress;
    }
}
class Adress {
    constructor(street, city) {
        this.street = street;
        this.city = city;
    }
}
let userIn = new User('Lucía', 'Nadal');
let adreesIn = new Adress('Goya', 'Granada');
userIn.setAdress(adreesIn);
console.log(userIn);
/**Al grabar y transpilar el archivo, comprobaremos que funciona correctamente en la impresión en la consola del navegador de esta otra característica de la programación
 * orientada a objetos. */ 
