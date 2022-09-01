import { Test, TestingModule } from '@nestjs/testing';
import { CutomersService } from './cutomers.service';

describe('CutomersService', () => {
  let service: CutomersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CutomersService],
    }).compile();

    service = module.get<CutomersService>(CutomersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
