import { Controller, Get, Post } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Get('ab*cd')
    findAll() {
        return 'This route uses a wildcard';
    }

    // @Post()
    // create(): string {
    //     return 'This action adds a new cat.';
    // }

    // @Get()
    // findAll(@Req() request: Request): string {
    //     return 'This action returns all cats';
    // }
}