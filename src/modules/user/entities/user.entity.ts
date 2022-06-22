import { Column, Entity } from 'typeorm';
import { RoleEnum } from '@app/common/constants';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '@app/common/entity';
import { Expose } from 'class-transformer';

@Entity('users')
export class User extends BaseEntity {
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

  @Column({ type: 'varchar', length: 255, nullable: true, select: false })
  @ApiProperty({
    type: String,
    description: 'Password',
    example: '123456',
    default: 'password',
  })
  password: null | string;

  @Column({ type: 'varchar', length: 255, nullable: true, select: false })
  remember_token: null | string;

  @Column({ type: 'enum', enum: RoleEnum, default: RoleEnum.Student })
  @ApiPropertyOptional({
    type: String,
    description: 'RoleEnum of user',
    example: RoleEnum.Student,
    default: RoleEnum.Guest,
  })
  role: RoleEnum;
}
