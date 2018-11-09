# MongoIoT
### Información de URLs
*  URL base:
> http://ec2-54-149-173-24.us-west-2.compute.amazonaws.com:8081

* Ver la información de todas las cámaras:
> [/api/cam](http://ec2-54-149-173-24.us-west-2.compute.amazonaws.com:8081/api/cam)

* Ver la información de todas las horas de llegada:
> [/api/arrivalHour](http://ec2-54-149-173-24.us-west-2.compute.amazonaws.com:8081/api/arrivalHour)

* Ver la información de todos las focos:
> [/api/bulb](http://ec2-54-149-173-24.us-west-2.compute.amazonaws.com:8081/api/bulb)

Al entrar, cualquiera de los objetos tiene un id. Si quieren que se les regrese la información de uno de los modelos en específico, tienen que ir a esos links y al final, ponerle un ‘/‘ y el id del objeto que quieren ver.

Por ejemplo, si quieren ver la hora de llegada del objeto con id “5bcd26d59cb14b1462e97bbc”, tienen que ir a [este URL](http://ec2-54-149-173-24.us-west-2.compute.amazonaws.com:8081/api/arrivalHour/5bcd26d59cb14b1462e97bbc). Les dejo [otro ejemplo](http://ec2-54-149-173-24.us-west-2.compute.amazonaws.com:8081/api/bulb/5bcd05efdcf6e412f648f543) de esto por si las dudas.

### Métodos POST
Un método POST es para agregar un nuevo objeto; los URLs para esto son los mismos descritos arriba. Por ejemplo, si quisieran agregar una hora de llegada, tendrían que hacer una petición http POST al url de [/api/arrivalHour](http://ec2-54-149-173-24.us-west-2.compute.amazonaws.com:8081/api/arrivalHour) .

En el *body* del request, tendrían que ir los valores del objeto nuevo que quieren crear. Esto es muy fácil de hacer desde *Postman*. Les recomiendo que la descarguen para hacer pruebas ahí. Adjunto también una imagen de cómo hacer un request de tipo POST para crear un nuevo objeto de foco como ejemplo:

![alt text](https://i.imgur.com/E6ZeJG1.png)

### Tipos de dato y valores

* Foco:
```
minutesOn: Number
minutesLeft: Number
isOn: Boolean
```

* Hora de llegada:
```
person: String
hour: Number
```

La variable `hour` es un timestamp. Les dejo la referencia para que transformen fechas a timestamps y viceversa [aquí](https://www.unixtimestamp.com).

* Cámara:
```
minutesOn: Number
isOn: Boolean
```
Los booleanos mándenlos en booleanos si pueden, si no, manden un string que diga `true` o `false` así como lo escribí en minúsculas. Si no, probablemente *truene* la aplicación, si esto pasara, me dicen porque el servidor se cae y tengo que volverlo a levantar para que lo sigan usando.

### Métodos PUT
Un método PUT es para actualizar los datos de un objeto, por ejemplo con [este URL](http://ec2-54-149-173-24.us-west-2.compute.amazonaws.com:8081/api/arrivalHour/5bcd26d59cb14b1462e97bbc) pueden actualizar la hora de llegada de ese objeto. Nomas tienen que pasar el dato que quieren actualizar en el *body*.
*OJO*: Si van a hacer un PUT, pongan *TODOS* los datos otra vez, porque lo que hace es *sobre escribir* todos  los valores. Si mandan nomas `minutesOn` en la cámara por ejemplo, el campo `isOn` se va a borrar.

### Métodos DELETE
Si quieren borrar un objeto, es lo mismo; tienen que meterse al URL del objeto y que el tipo de método sea DELETE. Así de simple.

#IoT
