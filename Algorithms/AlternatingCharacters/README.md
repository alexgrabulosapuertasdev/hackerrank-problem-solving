A Shashank le gustan las cadenas donde los caracteres consecutivos son diferentes. Por ejemplo, le gusta ABABA, mientras que ABAA no le gusta. Dada una cadena que solamente contiene caracteres A y B, él quiere cambiarla a una cadena que le guste. Para hacerlo, solo se le permite borrar los caracteres en la cadena.

Tu tarea es encontrar la mínima cantidad requerida de borrados.

Formato de Entrada La primera linea contiene un enter T que quiere decir el número de casos de prueba. Luego siguen T lineas , con una cadena en cada linea.

Formato de Salida Imprimie la mínima cantidad requerida de pasos en cada caso de prueba.

Restricciones 1 <= T <= 10


Ejemplo de Entrada
5
AAAA
BBBBB
ABABABAB
BABABA
AAABBB

Ejemplo de Salida 00
3
4
0
0
4

Explicación
AAAA ==> A, 3 borrados
BBBBB ==> B, 4 borrados
ABABABAB ===> ABABABAB, 0 borrados
BABABA ===> BABABA, 0 borrados
AAABBB ==> AB, 4 borrados