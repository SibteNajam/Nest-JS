import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';
import { NameDto } from './dto/name.dto';

@Controller('myname')
export class NynameController {

    @Post('custom')
    @ApiOperation({ summary: 'Transform name to uppercase using custom pipe' })
    transormName(@Body(new UppercasePipe) body: NameDto) {
        return {
            message: `Received name in uppercase: ${body.name}`,
        };
    }
}
