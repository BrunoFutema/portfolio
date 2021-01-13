import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUserRoles1613508993033
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_roles',
        columns: [
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'role_id',
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'User_FK',
            columnNames: ['user_id'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
          {
            name: 'Role_FK',
            columnNames: ['role_id'],
            referencedTableName: 'roles',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('user_roles', 'User_FK');
    await queryRunner.dropForeignKey('user_roles', 'Role_FK');
    await queryRunner.dropTable('user_roles');
  }
}
