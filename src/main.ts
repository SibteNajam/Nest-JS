import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Create Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Your API Title')
    .setDescription('Your API description')
    .setVersion('1.0')
    .addTag('Your API Tag') // Optional: Add tags for grouping endpoints
    .build();

  // Create the Swagger document
  const document = SwaggerModule.createDocument(app, config);

  // Set up Swagger UI at a specific path
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
