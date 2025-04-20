FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Create custom nginx config
RUN echo 'server { \
    listen 8090; \
    server_name localhost; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Copy static assets to nginx directory
COPY . /usr/share/nginx/html/

# Expose port 8090
EXPOSE 8090

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
