import { ApiProperty } from '@nestjs/swagger';

export class UnauthorizedDto {
  @ApiProperty({
    type: Number,
    description: 'Http status code',
    example: 401,
    default: 401,
  })
  statusCode: number;

  @ApiProperty({
    type: String,
    description: 'Response messages',
    example: 'Unauthorized',
    default: 'Unauthorized',
  })
  message: string;
}
