FROM node:19-alpine

COPY . .

WORKDIR /app
 
RUN npm install --production
RUN npm run build

# Set environment variables if needed
ENV PORT=3000
ENV BASE_URL=https://api.themoviedb.org/3
ENV API_KEY=aa0b34d169414a371fa98f29e584298f


# Start the app
CMD ["npm","run"]