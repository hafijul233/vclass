import { applyDecorators, Type } from '@nestjs/common';
import { ApiPaginatedResponse } from '@app/common/decorators/metadata/api-paginate-response.decorator';

export const ApiIndex = <TModel extends Type<any>>(
  model: TModel,
  alias: string = null,
) => {
  if (!alias) {
    alias = model.name;
  }
  return applyDecorators(ApiPaginatedResponse(model, alias));
};
