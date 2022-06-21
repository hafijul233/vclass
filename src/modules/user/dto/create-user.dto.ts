import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Role } from '@app/common/constants';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    description: 'Full name',
    example: 'Mohammad Hafijul Islam',
  })
  name: string;

  @ApiProperty({
    type: String,
    description: 'Email Address',
    example: 'admin@example.com',
  })
  email: string;

  @ApiPropertyOptional({
    type: String,
    description: 'Mobile Number',
    example: '01689553434',
  })
  mobile: null | string;

  @ApiPropertyOptional({
    type: String,
    description: 'Present Street Address',
    example: '334 No Shamlapur, Savar, Dhaka-1207.',
  })
  address: null | string;

  @ApiProperty({
    type: String,
    description: 'Password',
    example: '123456',
    default: 'password',
  })
  password: null | string;

  @ApiPropertyOptional({
    type: String,
    description: 'Present Street Address',
    example: Role.Student,
    default: Role.Guest,
  })
  role: Role;
}
