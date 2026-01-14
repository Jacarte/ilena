# Self-Hosted Deployment with Auto-Updates

This setup uses **Watchtower** to automatically redeploy when a new image is pushed to Docker Hub.

## Quick Start

1. **Set your Docker Hub username:**
   ```bash
   export DOCKERHUB_USERNAME=your-dockerhub-username
   ```

2. **Start the services:**
   ```bash
   docker compose up -d
   ```

3. **Access the app:**
   - http://localhost:8080

## How It Works

1. You push code to GitHub
2. GitHub Actions builds and pushes a new image to Docker Hub
3. Watchtower (running on your server) checks for new images every 5 minutes
4. When a new image is detected, Watchtower:
   - Pulls the new image
   - Stops the old container
   - Starts a new container with the updated image
   - Removes the old image (cleanup)

## Configuration

### Change poll interval
Edit `docker-compose.yml` and change `WATCHTOWER_POLL_INTERVAL` (in seconds):
- `300` = 5 minutes (default)
- `60` = 1 minute
- `3600` = 1 hour

### Manual update
Force an immediate update:
```bash
docker compose exec watchtower /watchtower --run-once
```

### View logs
```bash
docker compose logs -f watchtower
```

### Stop services
```bash
docker compose down
```

## With Reverse Proxy (Optional)

If you want HTTPS with a domain, add Traefik or Caddy. Example with Caddy:

```yaml
services:
  caddy:
    image: caddy:alpine
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
      - caddy_data:/data
    
  biz-insight-portfolio:
    image: ${DOCKERHUB_USERNAME}/biz-insight-portfolio:latest
    restart: unless-stopped
    expose:
      - "80"
    labels:
      - "com.centurylinklabs.watchtower.enable=true"

volumes:
  caddy_data:
```

Caddyfile:
```
yourdomain.com {
    reverse_proxy biz-insight-portfolio:80
}
```
