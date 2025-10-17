import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // ✅ CORS enable
  app.enableCors({
    origin: ['http://localhost:5173', 'https://your-frontend-domain.com'], // allowed origins
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // optional, যদি cookies/token পাঠাও
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
