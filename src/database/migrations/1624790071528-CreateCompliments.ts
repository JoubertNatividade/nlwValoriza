import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompliments1624790071528 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable( new Table ({
        name: 'compliments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'user_send',
            type: 'uuid',
          },
          {
            name: 'user_receiver',
            type: 'uuid',
          },
          {
            name: 'tag_id',
            type: 'uuid',
          },
          {
            name: 'message',
            type: 'varchar'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          }
        ],
        foreignKeys: [
          {
            name: 'FK_USER_SEND_COMPLIEMNTS',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_send'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          },
          {
            name: 'FK_USER_RECEIVER_COMPLIMENTS',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_receiver'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          },
          {
            name: 'FK_TAG_COMPLIMENTS',
            referencedTableName: 'tags',
            referencedColumnNames: ['id'],
            columnNames: ['tag_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('compliments')
    }

}
