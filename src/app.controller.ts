import { Body, Controller, Post } from '@nestjs/common';
import { RocketMembersRepository } from './repositories/rocket-members-repository';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';

@Controller('app')
export class AppController {
  constructor(private rocketMembersRepository: RocketMembersRepository) {}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    await this.rocketMembersRepository.create(name, memberFunction);
  }
}
