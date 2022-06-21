import { ApiPropertyOptional } from '@nestjs/swagger';
import { Role } from '@app/common/constants';

export class FindUserDto {
  @ApiPropertyOptional({
    type: 'enum',
    enum: Role,
    description: 'total number of items received from  query',
    default: Role.Guest,
    example: Role.Student,
  })
  role: string;

  @ApiPropertyOptional({
    type: Number,
    description: 'number of items should be included',
  })
  limit: number;

  @ApiPropertyOptional({
    type: Number,
    description: 'number of items should be escaped',
  })
  offset: number;
}
