import { ApiProperty } from '@nestjs/swagger';

export class ServerErrorDto {
  @ApiProperty({
    type: Number,
    description: 'Http status code',
    example: 500,
    default: 500,
  })
  statusCode: number;

  @ApiProperty({
    type: String,
    description: 'Response messages',
    example: 'Server Error',
    default: 'Server Error',
  })
  message: string;
}
