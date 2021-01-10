import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1613502592305 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'username',
            type: 'varchar(50)',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar(80)',
            isNullable: false,
          },
          {
            name: 'email_confirmed',
            type: 'boolean',
            default: false,
          },
          {
            name: 'phone_number',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'phone_number_confirmed',
            type: 'boolean',
            default: false,
          },
          {
            name: 'password_hash',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'security_stamp',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'two_factor_enabled',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'access_failed_count',
            type: 'integer',
            default: 0,
          },
          {
            name: 'lockout_enabled',
            type: 'boolean',
            default: false,
          },
          {
            name: 'lockout_end_date',
            type: 'timestamp with time zone',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp with time zone',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
