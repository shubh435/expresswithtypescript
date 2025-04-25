import request from 'supertest';
import app from '../src/app';
import path from "path"
import fs from 'fs';

describe('GET /hello', () => {
  it(`should return status code 200`, async () => {
    const response = await request(app).get('/hello');
    expect(response.statusCode).toBe(200);
  });

  it('should return the text "Hello, World!"', async () => {
    const response = await request(app).get('/hello');
    expect(response.text).toBe('Hello, World!');
  });
});


describe('GET / (root route)', () => {
  it('should return status code 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('should serve the index.html file', async () => {
    const response = await request(app).get('/');
    const indexPath = path.resolve(__dirname, '../src/public/index.html');
    const fileContent = fs.readFileSync(indexPath,'utf-8');
    expect(response.text).toBe(fileContent);

  });
});