import { applyDecorators, Type } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse } from '@nestjs/swagger';

export const ApiCreate = <TModel extends Type<any>>(
  model: TModel,
  alias: string = null,
) => {
  if (!alias) {
    alias = model.name;
  }
  return applyDecorators(
    ApiCreatedResponse({
      description: `Return created ${alias} details`,
      type: model,
    }),
    ApiNotFoundResponse({ description: `Data Not Found` }),
  );
};
