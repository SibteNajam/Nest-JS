import { Test, TestingModule } from '@nestjs/testing';
import { NynameController } from './nyname.controller';

describe('NynameController', () => {
  let controller: NynameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NynameController],
    }).compile();

    controller = module.get<NynameController>(NynameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
