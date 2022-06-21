import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EnabledEnum, RoleEnum } from '@app/common/constants';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @ApiProperty({
    type: String,
    description: 'Full name',
    example: 'Mohammad Hafijul Islam',
  })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @ApiProperty({
    type: String,
    description: 'Email Address',
    example: 'admin@example.com',
  })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @ApiPropertyOptional({
    type: String,
    description: 'Mobile Number',
    example: '01689553434',
  })
  mobile: null | string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @ApiPropertyOptional({
    type: String,
    description: 'Present Street Address',
    example: '334 No Shamlapur, Savar, Dhaka-1207.',
  })
  address: null | string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @ApiProperty({
    type: String,
    description: 'Password',
    example: '123456',
    default: 'password',
  })
  password: null | string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  remember_token: null | string;

  @Column({ type: 'enum', enum: RoleEnum, default: RoleEnum.Student })
  @ApiPropertyOptional({
    type: String,
    description: 'RoleEnum of user',
    example: RoleEnum.Student,
    default: RoleEnum.Guest,
  })
  role: RoleEnum;

  @Column({ type: 'enum', enum: EnabledEnum, default: EnabledEnum.Yes })
  enabled: EnabledEnum;

  @CreateDateColumn({ type: 'datetime' })
  created_at: null | Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at: null | Date;
}
