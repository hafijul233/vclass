import { ApiPropertyOptional } from '@nestjs/swagger';
import { RoleEnum } from '@app/common/constants';

export class FindUserDto {
  @ApiPropertyOptional({
    type: 'enum',
    enum: RoleEnum,
    description: 'total number of items received from  query',
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
