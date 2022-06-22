import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { EnabledEnum } from '@app/common/constants';
import { ApiPropertyOptional } from '@nestjs/swagger';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: EnabledEnum, default: EnabledEnum.Yes })
  @ApiPropertyOptional({
    type: 'enum',
    enum: EnabledEnum,
    description: 'if entity is enabled or not',
    example: EnabledEnum.No,
    default: EnabledEnum.Yes,
  })
  enabled: EnabledEnum;

  @VersionColumn({ type: 'int' })
  version: number;

  @CreateDateColumn({ type: 'datetime' })
  @ApiPropertyOptional({
    type: Date,
    description: 'created datetime',
    example: '2022-06-22T06:11:06.765Z',
    default: null,
  })
  created_at: null | Date;

  @UpdateDateColumn({ type: 'datetime' })
  @ApiPropertyOptional({
    type: Date,
    description: 'last updated datetime',
    example: '2022-06-22T06:11:06.765Z',
    default: null,
  })
  updated_at: null | Date;

  @DeleteDateColumn({ type: 'datetime' })
  @ApiPropertyOptional({
    type: Date,
    description: 'last updated datetime',
    example: '2022-06-22T06:11:06.765Z',
    default: null,
  })
  deleted_at: null | Date;
}
