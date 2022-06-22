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
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  ApiCreate,
  ApiHttpExceptionResponse,
  ApiIndex,
  ApiRemove,
  ApiShow,
  ApiUpdate,
} from '@app/common/decorators';
import { User } from '@app/modules/user/entities/user.entity';
import {
  CreateAdminDto,
  FindAdminDto,
  UpdateAdminDto,
} from '@app/modules/user/admin/dto';
import { AdminRoleInterceptor } from '@app/modules/user/admin/interceptors/admin-role.interceptor';
import { AdminService } from '@app/modules/user/admin/admin.service';

@Controller('admins')
@ApiTags('admin')
@ApiHttpExceptionResponse()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  @ApiIndex(User, 'Admin')
  async findAll(@Query() findAdminDto: FindAdminDto): Promise<User[]> {
    let admins = [];
    try {
      admins = await this.adminService.findAll(findAdminDto);
    } catch (e) {
      console.log(e);
    } finally {
      return admins;
    }
  }

  @Post()
  @UseInterceptors(AdminRoleInterceptor)
  @ApiCreate(User, 'Admin')
  async create(@Body() createAdminDto: CreateAdminDto): Promise<User | null> {
    return await this.adminService.create(createAdminDto);
  }

  @Get(':id')
  @ApiShow(User, 'Admin')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return await this.adminService.findOne(id);
  }

  @Patch(':id')
  @ApiUpdate(User, 'Admin')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAdminDto: UpdateAdminDto,
  ) {
    return await this.adminService.update(id, updateAdminDto);
  }

  @Delete(':id')
  @ApiRemove(User, 'Admin')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.remove(id);
  }
}
