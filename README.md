### Servicio de Itinerarios

Este microservicio gestiona la información relacionada con los autobuses, itinerarios y disponibilidad de asientos en un sistema de transporte. Permite registrar nuevos buses, definir itinerarios (rutas, horas de salida/llegada, precio) y gestionar la asignación de asientos, todo mientras asegura la sincronización de datos con una base de datos PostgreSQL.

## Dependencias
´´´
npm i join dotenv typeorm pg
npm i --save @nestjs/microservices kafkajs
npm i --save class-validator class-transformer
´´´

## Migraciones

´´´
npm run migration:generate
´´´

´´´
npm run migration:run
´´´
