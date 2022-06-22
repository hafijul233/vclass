import { applyDecorators, Type } from '@nestjs/common';
import { ApiPaginatedResponse } from '@app/common/decorators/metadata/api-paginate-response.decorator';

export const ApiIndex = <TModel extends Type<any>>(model: TModel) => {
  return applyDecorators(ApiPaginatedResponse(model));
};
