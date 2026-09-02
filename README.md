# standard-zudda

## Production VPS Deployment

This app is intended to run as the second app on the OVH VPS and bind only to:

```text
127.0.0.1:3001
```

Inside the Docker container, Next.js listens on port `3000`.

After connecting to the VPS and entering the project directory:

```bash
git pull
docker compose build
docker compose up -d
docker compose ps
docker compose logs -f
```

Create a VPS `.env` file before starting the container. Use `.env.example` as
the list of required variables.
