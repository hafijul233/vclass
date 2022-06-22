import { applyDecorators, Type } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';

export const ApiShow = <TModel extends Type<any>>(
  model: TModel,
  alias: string = null,
) => {
  if (!alias) {
    alias = model.name;
  }
  return applyDecorators(
    ApiOkResponse({ description: `${alias} details`, type: model }),
    ApiNotFoundResponse({ description: `Data Not Found` }),
  );
};
