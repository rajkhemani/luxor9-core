# Luxor9 Core

A comprehensive AI agent platform with Linear-inspired UI, designed for autonomous AI agents and multi-agent workflows.

## Features

- 🤖 **Multi-Agent Orchestration**: Spawn and coordinate autonomous AI coding agents (Claude Code, OpenAI Codex, OpenCode)
- 💬 **Advanced Agent Capabilities**: Web browsing, file operations, terminal commands, code execution, vision, and more
- 📊 **Linear-Inspired UI**: Modern, dark-mode interface for monitoring and managing agents
- 🔧 **Extensible Skill System**: Modular skills for various domains (data science, devops, creative, etc.)
- 🐳 **Docker-Based Deployment**: Easy setup with docker-compose for development, OSS, and production
- 🧪 **Comprehensive Testing**: 27/27 passing test suite with security, linting, and performance checks
- 🔄 **GitHub Workflow Integration**: Automated CI/CD with PR reviews, code scanning, and deployment pipelines
- 💾 **Persistent Memory & Skills**: Cross-session memory and reusable skill library

## Technology Stack

- **Backend**: Python 3.14+, FastAPI, Redis, PostgreSQL
- **Frontend**: React 18+, TypeScript, Vite, Tailwind CSS
- **Agent Framework**: Hermes Agent (by Nous Research)
- **Database**: PostgreSQL with Redis caching
- **Infrastructure**: Docker Compose, Nginx (in production)
- **Testing**: Pytest, Playwright, Security scanning
- **CI/CD**: GitHub Actions

## Quick Start

### Prerequisites

- Docker and Docker Compose
- Git
- Node.js 18+ (for UI development)
- Python 3.14+ (for backend development)

### Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/luxor9-core.git
   cd luxor9-core
   ```

2. Copy environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` to configure API keys, database credentials, etc.

3. Start services:
   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

4. Access the UI at [http://localhost:5173](http://localhost:5173)

5. Access the API documentation at [http://localhost:8000/docs](http://localhost:8000/docs)

### Production Deployment

For production deployment, use the production docker-compose file:

```bash
docker-compose -f docker-compose.prod.yml up -d
```

Make sure to set appropriate environment variables in `.env.prod` or override them in the compose file.

### OSS Deployment

For open-source deployment (without proprietary components):

```bash
docker-compose -f docker-compose.oss.yml up --build
```

## Architecture

```
luxor9-core/
├── packages/
│   ├── api/          # Backend API (FastAPI)
│   ├── ui/           # Frontend UI (React/Vite)
│   └── ...           # Other internal packages
├── infra/            # Infrastructure configurations
├── monitoring/       # Monitoring and logging setup
├── scripts/          # Utility scripts
├── skills/           # Hermes skills library
├── tests/            # Test suite
├── docs/             # Documentation
└── docker-compose*.yml # Deployment configurations
```

## Configuration

### Environment Variables

Copy `.env.example` to `.env` and adjust the following key variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `POSTGRES_USER` | PostgreSQL username | `luxor9` |
| `POSTGRES_PASSWORD` | PostgreSQL password | `luxor9_pass` |
| `POSTGRES_DB` | PostgreSQL database name | `luxor9` |
| `REDIS_PASSWORD` | Redis password | `redis_pass` |
| `HERMES_PROVIDER` | LLM provider (custom, openai, anthropic, etc.) | `custom` |
| `HERMES_MODEL` | Model identifier | `nemotron-3-super:cloud` |
| `NEXT_PUBLIC_API_URL` | API URL for frontend | `http://localhost:8000` |

### Service Ports

- **API**: 8000 (HTTP)
- **UI**: 5173 (HTTP)
- **PostgreSQL**: 5432
- **Redis**: 6379
- **Monitoring** (if enabled): 9090 (Prometheus), 3000 (Grafana)

## Development Guidelines

### Code Style

- Backend: Black, Flake8, MyPy
- Frontend: ESLint, Prettier, TypeScript strict
- Commit messages: Conventional Commits

### Adding New Skills

Skills are reusable procedural memories for Hermes Agent. To create a new skill:

1. Use the `hermes skill create` command
2. Or manually create a SKILL.md file in `~/.hermes/skills/<skill-name>/`
3. Follow the skill template with frontmatter and clear instructions

### Running Tests

```bash
# Backend tests
cd packages/api
pytest

# Frontend tests
cd packages/ui
npm test

# Full test suite
./scripts/run-tests.sh
```

## GitHub Workflows

The repository includes enhanced GitHub Actions workflows for:

- **CI**: Build, test, and lint on every push
- **Security**: Dependency scanning, SAST, and secret detection
- **Performance**: Benchmarking and load testing
- **Deployment**: Automated staging and production deployments
- **PR Workflows**: Automatic labeling, assignment, and review requests

Workflows are located in `.github/workflows/`:
- `build-and-deploy.yml`: Main CI/CD pipeline
- `security-scan.yml`: Security vulnerability scanning
- `performance-test.yml`: Load and stress testing
- `code-review.yml`: Automated PR review assistance

## Monitoring and Logging

- **Logging**: Structured JSON logging with configurable levels
- **Metrics**: Prometheus metrics endpoint at `/metrics`
- **Health Checks**: API health endpoints at `/health` and `/ready`
- **Error Tracking**: Integrated with Sentry (configure via `SENTRY_DSN`)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -am 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Hermes Agent](https://hermes-agent.nousresearch.com) by Nous Research
- [Linear](https://linear.app) for design inspiration
- All contributors and the open-source community

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.

---
*Last updated: $(date)*