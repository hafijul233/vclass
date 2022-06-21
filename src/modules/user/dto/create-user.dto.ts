import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Role } from '@app/common/constants';
import {
  IsAlpha,
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

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
    description: 'Role of user',
    example: Role.Student,
    default: Role.Guest,
  })
  @IsString()
  @IsAlpha()
  role: Role;
}
