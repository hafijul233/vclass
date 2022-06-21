import { ApiPropertyOptional } from '@nestjs/swagger';

export class PaginatedDto<TData> {
  @ApiPropertyOptional({
    type: Number,
    description: 'total number of items received from  query',
  })
  total: number;

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

  data: TData[];
}
