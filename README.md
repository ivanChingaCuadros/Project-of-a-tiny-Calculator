# Project-of-a-tiny-Calculator
_Primer proyecto sobre una calculadora muy mona e interesante. ¿Para quién? Para mi sí.

Proyecto calculadora
https://www.youtube.com/watch?v=0GC-jvB8yNs

tutorial github Desktop
https://www.youtube.com/watch?v=qmRz-K5PM8s

Readme template
https://gist.github.com/Villanuevand/6386899f70346d4580c723232524d35a 

## Proceso ONE🚀
```
1- Lo primero que se creo fue un listener que escucha cuando se carga completamente el HTML.
Esto es para evitar que cuando preguntemos por el display y por los botones responda que no existe, pq si JS corre ante de que se cargue el documento, por un documento que aún no se creo, se va a decir que no existe. 

2- Dentro de este listener, se crea dos constantes, una para buscar el display y otra para buscar los botones. 
Los botones se van a guardar en un HTML Collection, y que después de otra constante lo vamos a convertir en Array para poder iterarlo.

3- Iteramos sobre este Array de botones que creamos.

4- A cada bonton le agregamos un Listener que escucha cuando el usuario hace click, y cuando el usuario hace click en un boton, este listener imprimer el innerHTML de cada boton, que viene a ser el texto que tiene cada boton. 
```
## Proceso de cada constante🚀
Para dar FUNCIONALIDAD
```
1-Se iteraR sobre todos los botones y le vamos asignar a cada uno un listener que este escuchando si el usuario hace Click, y para esto necesitamos convertir html collection=> array
```
```
2-Se crea dentro del Window.addEventListener otra constante para guardar este array nuevo que vamos a crear: const keypadButtonsArray, esto lo que hace es coger el html collection y lo va ha convertir a Array y guardarla en la cte ultima que hemos creado.
```
```
3-Iteramos sobre este nuevo Array, 

```

## Aprendizaje de JavaScript
Usamos dos métodos:

**document.querySelector**
```
Para el display alcanza con usar esto, busca de la clase que le pasamos, el primer elemento que encuentre y lo va a guardar, en este caso la clase lo estamos usando en un solo elemento y tenemos que buscar en SOLO elemento.
```

**document.getElementByClassName** 
```
Para todos los botones, y ya que necesitamos buscar varios botones y guardarlos en la constante, el querySelector simple no sirve pq, va ha buscar un solo boton y lo va ha guardar en la constante y todos los otros botones no les va importar.
```
```
Esto nos da un HTML COLLECTION, pq después vamos a ITERAR sobre est HTML COLLECTION y voy a ir agregando un evento que se escucha cuando hace CLICK sobre cada boton.
Para hacer todo esto, necesitamos convertir:
Html collectio => array y después ITERAR sobre el array

```

**document.querySelectorAll**
```
Si usamos este, nos va ha traer todos los botones, pero lo va ha guardar en un node list dentro de la constante y lo que NECESITAMOS ES UN HTML COLLECTION
```

## Diccionario 📦

_Iterar_

Los bucles ofrecen una forma rápida y sencilla de hacer algo repetidamente.

_innerHTML_
La propiedad Element.innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento.

_eval_
La función eval() evalúa un código JavaScript representado como una cadena de caracteres (string), sin referenciar a un objeto en particular.
Toma el string y resuelve 
## Autores ✒️
 **Iván Chinga Cuadros** - *Trabajo Inicial* - [ivanChingaCuadros](https://github.com/ivanChingaCuadros)

---
⌨️ con ❤️ por [Iván](https://github.com/ivanChingaCuadros) 😊