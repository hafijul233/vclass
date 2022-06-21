import { ApiProperty } from '@nestjs/swagger';

export class ForbiddenDto {
  @ApiProperty({
    type: Number,
    description: 'Http status code',
    example: 403,
    default: 403,
  })
  statusCode: number;

  @ApiProperty({
    type: String,
    description: 'Response messages',
    example: 'Forbidden',
    default: 'Forbidden',
  })
  message: string;
}
