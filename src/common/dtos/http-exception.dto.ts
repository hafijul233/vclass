import { ApiProperty } from '@nestjs/swagger';

export class HttpExceptionDto {
  @ApiProperty({
    type: Number,
    description: 'Http status code',
    example: 403,
  })
  statusCode: () => number;

  @ApiProperty({
    type: String,
    description: 'Response messages',
    example: 'Forbidden',
  })
  message: string;
}
