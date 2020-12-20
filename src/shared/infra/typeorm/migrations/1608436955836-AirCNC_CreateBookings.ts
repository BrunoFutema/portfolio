import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class AirCNCCreateBookings1608436955836
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'air_cnc_bookings',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'approved',
            type: 'boolean',
            default: false,
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
            isNullable: false,
          },
          {
            name: 'spot_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'user_id',
            type: 'uuid',
            isNullable: false,
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
        ],
        foreignKeys: [
          {
            name: 'Spot_FK',
            columnNames: ['spot_id'],
            referencedTableName: 'air_cnc_spots',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          {
            name: 'User_FK',
            columnNames: ['user_id'],
            referencedTableName: 'air_cnc_users',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('air_cnc_bookings', 'Spot_FK');

    await queryRunner.dropForeignKey('air_cnc_bookings', 'User_FK');

    await queryRunner.dropTable('air_cnc_bookings');
  }
}
