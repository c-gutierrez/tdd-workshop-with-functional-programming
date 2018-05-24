
## Temas

1. Conceptos functional programming.
  + Pure function.
  + Currying.
  + Point free style.

2. TDD.

---

## Funciones

Funciones sirven para 3 cosas:
===

+ Mappear.
	- Tomar entradas y retornar salidas.
+ Procedimientos.
	- Puede ser llamada para ejecutar una serie de pasos.
+ Comunicarse con otras partes del sistema (pantalla, almacenamiento, logs, red, etc.).
	- Enviar un email.

---

## Funciones en Matemáticas y Programación

`f(x) = 2x`

`f(x) == 4`

`const double = x => x*2`

`doble(5) == 10`

---

## Funciones puras

+ Dada la misma entrada, siempre retornan la misma salida.
+ No produce cambios externos.

---

## Currying

+ Generalmente son funciones con una arity de 1.
+ Una currry function siempre retorna otra función con una arity de 1 hasta que todos los argumentos han sido aplicados.
+ Es posible hacer aplicación parcial.

---

## Point free style

+ Manera de definir funciones sin referenciar a los argumentos con los cuales operará.

---

## TDD

+ tapejs
+ faucet
+ huskyjs

---

## Escenario

`Routes -> Controllers -> Repositorio -> Capa de persistencia`

*Práctica*
+ Capa de repositorio
  1. Listar todos los registros dentro de un arreglo.
  2. Crear un nuevo registro y devolver la información creada.
  3. Obtener el listado de los ids de todos los registros en un arreglo.
  4. Actualizar un registro buscado por su id y regresar un objeto con los datos actualizados.
  5. Los errores deberán ser un objeto
  6. Los objetos de error deberán tener una llave `success` el cual su valor deberá ser `boolean`
  7. Los objetos de error deberán tener una llave `errors` el cual su valor será un `arreglo de string` 

