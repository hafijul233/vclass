import { applyDecorators, Type } from '@nestjs/common';
import { ApiNoContentResponse, ApiNotFoundResponse } from '@nestjs/swagger';

export const ApiRemove = <TModel extends Type<any>>(
  model: TModel,
  alias: string = null,
) => {
  if (!alias) {
    alias = model.name;
  }
  return applyDecorators(
    ApiNoContentResponse({ description: `${alias} is deleted` }),
    ApiNotFoundResponse({ description: 'Data Not Found' }),
  );
};
