### **Servicio de Itinerarios**

Este microservicio gestiona la información relacionada con los autobuses, itinerarios y disponibilidad de asientos en un sistema de transporte. Permite registrar nuevos buses, definir itinerarios (rutas, horas de salida/llegada, precio) y gestionar la asignación de asientos, todo mientras asegura la sincronización de datos con una base de datos PostgreSQL.

### **Características principales:**

- **Gestión de Buses**: Registra y actualiza información sobre los autobuses, incluyendo placas, operador, tipo de asientos y capacidad.
- **Control de Itinerarios**: Permite crear, modificar y consultar los itinerarios de viaje, con detalles como ciudad de origen, destino, tiempos de salida y llegada, y tarifas.
- **Asignación de Asientos**: Administra la disponibilidad de asientos en los autobuses para cada itinerario, permitiendo reservar y liberar asientos de forma dinámica.
- **Integración con Kafka**: Incluye microservicios que se comunican entre sí utilizando Kafka, lo que permite una arquitectura distribuida y escalable.
- **Validación de Datos**: Utiliza `class-validator` y `class-transformer` para garantizar la integridad de los datos y la conversión de objetos a entidades.

### **Dependencias**

Para que el servicio funcione correctamente, es necesario instalar las siguientes dependencias:

```bash
npm install join dotenv typeorm pg
npm install --save @nestjs/microservices kafkajs
npm install --save class-validator class-transformer
```

### **Migraciones**

El servicio utiliza TypeORM para la gestión del esquema de la base de datos mediante migraciones. Para generar nuevas migraciones después de realizar cambios en las entidades, utiliza el siguiente comando:

```bash
npm run migration:generate
```

Para aplicar las migraciones pendientes y sincronizar la base de datos con el modelo de datos, ejecuta:

```bash
npm run migration:run
```

---
