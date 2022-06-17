Para hacer funcionar el programa es necesario instalar lo siguiente:

npm install : Este comando instalará angular en el proyecto.

npm install cors : Este comando debe ser instalado en el directorio API y habilitará las conexiones entre front end y back end.

npm install concurrently : Este comando habilitará la conexión silmuntanea entre front end y back end. Permite hacer funcionar el siguiente comando

npm run dev : Compilará el proyecto y se podrá utilizar en un navegador en la ruta localhost:4200 .

---------------------------------------------------------------------------------------------------------------------------------------------

Para el uso de la base de datos se pueden hacer las pruebas desde la aplicación POSTman ( https://www.postman.com/downloads/ ). 

Es necesario tener instalado y configurado Apache, php y alguna base de datos, para este proyecto se decidió usar xampp ( https://www.apachefriends.org/es/index.html )
ya que los configura de manera sencilla. Una vez ejecutado xampp se debe iniciar apache y la base de datos dentro de ella (mysql).

El buscador de productos funciona al ingresar un nombre en inglés de una carta de la franquicia Yu-Gi-Oh, en el siguiente link podra encontrarlos 
(https://www.db.yugioh-card.com/yugiohdb/card_list.action )

No se pudo iniciar sesion desde una base de datos local, no se logro arreglar el error. Se encontro una forma de conectarlo a traves de Firebase, pero no se pudo reemplazar
el codigo inicial por lo cual no se consiguio hacer funcionar el login (ni sus fuciones push, put,delete, etc).