import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ValidationDto {
  @ApiProperty({
    type: Number,
    description: 'Http status code',
    example: 400,
    default: 400,
  })
  statusCode: () => number;

  @ApiProperty({
    type: [String],
    isArray: true,
    description: 'Validation response messages',
    example: ['name should not be empty', 'name must be a string'],
  })
  message: string[];

  @ApiPropertyOptional({
    type: String,
    description: 'Finalized Error Message',
    example: 'Bad Request',
    default: 'Bad Request',
  })
  error: string;
}
