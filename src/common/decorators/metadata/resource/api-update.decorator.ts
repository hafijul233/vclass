import { applyDecorators, Type } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';

export const ApiUpdate = <TModel extends Type<any>>(model: TModel) => {
  return applyDecorators(
    ApiOkResponse({ description: 'updated User details', type: model }),
    ApiNotFoundResponse({ description: `Data Not Found` }),
  );
};
