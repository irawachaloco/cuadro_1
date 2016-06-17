En package.json en `scripts` van instrucciones (p.ej las cosas que van a operar)

Antes crear el proyecto en git
Luego local
Es importante el giignore para NO VERSINAR node_modules (son enormes!!!)

Sobre el local:
para iniciar proyecto o package.json:

    npm init


para instalar stylus:

    npm install http-server --save


para instalar stylus:

    npm install stylus --save

para empezar a correr el proyecto en el servidor, sí sólo sí: script definido como `start`en el package.json

    npm start

En npm todo se corre con run, excepto npm start y npm test


Una vez que corro:

    npm run <nombre del script>

Todo lo que sea node o screipts los paras con:

    ctrl + c


Buscar tut de bash o shell   

Cuando bajo el proyecto de git, debo hacer:
pnm install 
//para instalar las dependencias que hay en el package.json y es cuando se crean node_modules