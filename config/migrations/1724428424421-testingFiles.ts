import { MigrationInterface, QueryRunner } from "typeorm";

export class TestingFiles1724428424421 implements MigrationInterface {
    name = 'TestingFiles1724428424421'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`base\` (\`id\` varchar(36) NOT NULL, \`createDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`base\``);
    }

}
