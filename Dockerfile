# 1. Use the official Node.js image as a base
FROM node:18-alpine AS deps

# 2. Set working directory
WORKDIR /app

# 3. Install dependencies (only package.json + lock file first for better caching)
COPY package.json package-lock.json* yarn.lock* ./

# RUN npm ci || yarn install --frozen-lockfile
RUN npm install --legacy-peer-deps


# 4. Copy rest of the application
COPY . .

# 5. Build the Next.js app
RUN npm run build

# 6. Use a smaller image for production
FROM node:18-alpine AS runner

# Set environment variables
ENV NODE_ENV=production

# Create app directory
WORKDIR /app

# Copy built app and node_modules from previous stage
COPY --from=deps /app/.next ./.next
COPY --from=deps /app/public ./public
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/node_modules ./node_modules

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
