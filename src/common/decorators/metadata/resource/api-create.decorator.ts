import { applyDecorators, Type } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse } from '@nestjs/swagger';

export const ApiCreate = <TModel extends Type<any>>(model: TModel) => {
  return applyDecorators(
    ApiCreatedResponse({
      description: `Return created ${model.name} details`,
      type: model,
    }),
    ApiNotFoundResponse({ description: `Data Not Found` }),
  );
};
