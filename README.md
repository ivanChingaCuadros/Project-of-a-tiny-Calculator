# Project-of-a-tiny-Calculator
_Primer proyecto sobre una calculadora muy mona e interesante. ¿Para quién? Para mi sí.

Proyecto calculadora
https://www.youtube.com/watch?v=0GC-jvB8yNs

tutorial github Desktop
https://www.youtube.com/watch?v=qmRz-K5PM8s

Readme template
https://gist.github.com/Villanuevand/6386899f70346d4580c723232524d35a 



## Proceso 🚀
Para dar FUNCIONALIDAD
```
1-Se itera sobre todos los botones y le vamos asignar a cada uno un listener que este escuchando si el usuario hace Click, y para esto necesitamos convertir html collection=> array
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



## Autores ✒️
 **Iván Chinga Cuadros** - *Trabajo Inicial* - [ivanChingaCuadros](https://github.com/ivanChingaCuadros)

---
⌨️ con ❤️ por [Iván](https://github.com/ivanChingaCuadros) 😊