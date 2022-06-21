import { ApiPropertyOptional } from '@nestjs/swagger';

export class PaginatedDto<TData> {
  @ApiPropertyOptional({
    type: Number,
    description: 'total number of items received from  query',
  })
  total: number;

  @ApiPropertyOptional({
    type: Number,
    description: 'total number of items will send per page',
  })
  per_page: number;

  @ApiPropertyOptional({
    type: Number,
    description: 'current page number',
  })
  current: number;

  @ApiPropertyOptional({
    type: Number,
    description: 'last page number available',
  })
  last: number;

  @ApiPropertyOptional({
    type: 'array',
    description: 'collection of items',
  })
  data: TData[];
}
