import { ApiProperty } from '@nestjs/swagger';

export class NotFoundDto {
  @ApiProperty({
    type: Number,
    description: 'Http status code',
    example: 404,
    default: 404,
  })
  statusCode: number;

  @ApiProperty({
    type: String,
    description: 'Response messages',
    example: 'Not Found',
    default: 'Not Found',
  })
  message: string;
}
