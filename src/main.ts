import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Automatically strip properties that are not in the DTO
      forbidNonWhitelisted: true, // Throw an error if non-whitelisted properties(unknown fileds that ar nnot define din dto) are found

    }));
  // Create Swagger configuration
  const config = new DocumentBuilder().setTitle('Your API Title').setDescription('Your API description').setVersion('1.0').addTag('Your API Tag').addBearerAuth( // ✅ This adds the "Authorize" button in Swagger
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT', // optional: just for UI
    },
    'access-token', // this name can be used in @ApiBearerAuth('access-token')
  )
    .build();

  // Create the Swagger document
  const document = SwaggerModule.createDocument(app, config);

  // Set up Swagger UI at a specific path
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
