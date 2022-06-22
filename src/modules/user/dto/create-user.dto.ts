import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { RoleEnum } from '@app/common/constants';
import {
  IsAlpha,
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';
import { enumToArray } from '@app/common/helpers';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    description: 'Full name',
    example: 'Mohammad Hafijul Islam',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String,
    description: 'Email Address',
    example: 'admin@example.com',
  })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiPropertyOptional({
    type: String,
    description: 'Mobile Number',
    example: '01689553434',
  })
  @IsOptional()
  @IsNumberString()
  mobile: null | string;

  @ApiPropertyOptional({
    type: String,
    description: 'Present Street Address',
    example: '334 No Shamlapur, Savar, Dhaka-1207.',
  })
  @IsOptional()
  @IsString()
  address: null | string;

  @ApiProperty({
    type: String,
    description: 'Password',
    example: '123456',
    default: 'password',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiPropertyOptional({
    type: String,
    description: 'RoleEnum of user',
    example: RoleEnum.Student,
    default: RoleEnum.Guest,
  })
  @IsString()
  @IsAlpha()
  @IsIn(enumToArray(RoleEnum))
  role: RoleEnum;
}
