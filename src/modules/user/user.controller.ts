import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@app/modules/user/entities/user.entity';
import { ApiTags } from '@nestjs/swagger';
import {
  ApiCreate,
  ApiHttpExceptionResponse,
  ApiIndex,
  ApiRemove,
  ApiShow,
  ApiUpdate,
} from '@app/common/decorators';
import {
  CreateUserDto,
  FindUserDto,
  UpdateUserDto,
} from '@app/modules/user/dto';

@Controller('users')
@ApiTags('user')
@ApiHttpExceptionResponse()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiIndex(User)
  async findAll(@Query() findUserDto: FindUserDto): Promise<User[]> {
    return await this.userService.findAll(findUserDto);
  }

  @Post()
  @ApiCreate(User)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get(':id')
  @ApiShow(User)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiUpdate(User)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiRemove(User)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
