import { MigrationInterface, QueryRunner } from 'typeorm';

export class Update1728627475291 implements MigrationInterface {
  name = 'Update1728627475291';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "itineraries" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "originCity" character varying NOT NULL, "destinationCity" character varying NOT NULL, "departureTime" TIMESTAMP NOT NULL, "arrivalTime" TIMESTAMP NOT NULL, "price" numeric NOT NULL, "bus_uuid" uuid, "seat_uuid" uuid, CONSTRAINT "PK_3b969df5ce556e99d5da59982c6" PRIMARY KEY ("uuid"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "buses" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "plate" character varying NOT NULL, "operator" character varying NOT NULL, "seatType" character varying NOT NULL, "seatCount" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_1da765de924476580123f727ae3" UNIQUE ("plate"), CONSTRAINT "PK_40e38ef6f876a36ab0a8be7bd56" PRIMARY KEY ("uuid"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "seats" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "seatNumber" character varying NOT NULL, "bus_uuid" uuid, CONSTRAINT "PK_57fbcf9a34f33ace97c023f0a5b" PRIMARY KEY ("uuid"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "itineraries" ADD CONSTRAINT "FK_637f397486e3fcd010b7a0d0264" FOREIGN KEY ("bus_uuid") REFERENCES "buses"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "itineraries" ADD CONSTRAINT "FK_31583a8056de74ebaa81c25cd56" FOREIGN KEY ("seat_uuid") REFERENCES "seats"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "seats" ADD CONSTRAINT "FK_9b75b063168c517a97929724a77" FOREIGN KEY ("bus_uuid") REFERENCES "buses"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "seats" DROP CONSTRAINT "FK_9b75b063168c517a97929724a77"`,
    );
    await queryRunner.query(
      `ALTER TABLE "itineraries" DROP CONSTRAINT "FK_31583a8056de74ebaa81c25cd56"`,
    );
    await queryRunner.query(
      `ALTER TABLE "itineraries" DROP CONSTRAINT "FK_637f397486e3fcd010b7a0d0264"`,
    );
    await queryRunner.query(`DROP TABLE "seats"`);
    await queryRunner.query(`DROP TABLE "buses"`);
    await queryRunner.query(`DROP TABLE "itineraries"`);
  }
}
