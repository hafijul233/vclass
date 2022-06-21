import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@app/modules/user/entities/user.entity';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { FindUserDto } from '@app/modules/user/dto/find-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiBody({ description: 'Create new user', type: CreateUserDto })
  @ApiCreatedResponse({ description: 'Create new user', type: User })
  @ApiBadRequestResponse({ description: 'Validation error' })
  @ApiForbiddenResponse({ description: 'Access Forbidden' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiBody({ description: 'Return all users as list', type: CreateUserDto })
  @ApiOkResponse({
    description: 'Return all users as list',
    type: [User],
    isArray: true,
  })
  @ApiForbiddenResponse({ description: 'Access Forbidden' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  async findAll(@Query() findUserDto: FindUserDto): Promise<User[]> {
    return await this.userService.findAll(findUserDto);
  }

  @Get(':id')
  @ApiBody({ description: 'User details', type: Number })
  @ApiBadRequestResponse({ description: 'Validation error' })
  @ApiOkResponse({ description: 'User details', type: User })
  @ApiForbiddenResponse({ description: 'Access Forbidden' })
  @ApiNotFoundResponse({ description: 'Data Not Found' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({ description: 'Update user details', type: UpdateUserDto })
  @ApiBadRequestResponse({ description: 'Validation error' })
  @ApiOkResponse({ description: 'Updated user details', type: User })
  @ApiForbiddenResponse({ description: 'Access Forbidden' })
  @ApiNotFoundResponse({ description: 'Data Not Found' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiBody({ description: 'Soft delete a user', type: UpdateUserDto })
  @ApiNoContentResponse({ description: 'item is deleted ' })
  @ApiBadRequestResponse({ description: 'Validation error' })
  @ApiForbiddenResponse({ description: 'Access Forbidden' })
  @ApiNotFoundResponse({ description: 'Data Not Found' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
