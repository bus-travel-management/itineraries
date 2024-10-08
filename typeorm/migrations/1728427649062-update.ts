import { MigrationInterface, QueryRunner } from 'typeorm';

export class Update1728427649062 implements MigrationInterface {
  name = 'Update1728427649062';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "buses" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "plate" character varying NOT NULL, "operator" character varying NOT NULL, "seatType" character varying NOT NULL, "seatCount" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_1da765de924476580123f727ae3" UNIQUE ("plate"), CONSTRAINT "PK_40e38ef6f876a36ab0a8be7bd56" PRIMARY KEY ("uuid"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "itineraries" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "originCity" character varying NOT NULL, "destinationCity" character varying NOT NULL, "departureTime" TIMESTAMP NOT NULL, "arrivalTime" TIMESTAMP NOT NULL, "price" numeric NOT NULL, "busUuid" uuid, CONSTRAINT "PK_3b969df5ce556e99d5da59982c6" PRIMARY KEY ("uuid"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "seats" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "seatNumber" character varying NOT NULL, "isAvailable" boolean NOT NULL DEFAULT true, "itineraryUuid" uuid, CONSTRAINT "PK_57fbcf9a34f33ace97c023f0a5b" PRIMARY KEY ("uuid"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "itineraries" ADD CONSTRAINT "FK_3afa890f011ba151a97d4f96689" FOREIGN KEY ("busUuid") REFERENCES "buses"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "seats" ADD CONSTRAINT "FK_8ff897334a111e1ea2df2e5c00d" FOREIGN KEY ("itineraryUuid") REFERENCES "itineraries"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "seats" DROP CONSTRAINT "FK_8ff897334a111e1ea2df2e5c00d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "itineraries" DROP CONSTRAINT "FK_3afa890f011ba151a97d4f96689"`,
    );
    await queryRunner.query(`DROP TABLE "seats"`);
    await queryRunner.query(`DROP TABLE "itineraries"`);
    await queryRunner.query(`DROP TABLE "buses"`);
  }
}
