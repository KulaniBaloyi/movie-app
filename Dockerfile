FROM node:19-alpine

COPY . /app

WORKDIR  /app

RUN npm install

# Set environment variables if needed
ENV PORT=3000
ENV BASE_URL=https://api.themoviedb.org/3
ENV API_KEY=aa0b34d169414a371fa98f29e584298f

# Build the Next.js app
RUN npm run build

# Start the app
CMD ["npm", "start"]
