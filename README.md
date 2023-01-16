# <div align="center">Cronodoro</div>

Web App para ajudar com o foco em tarefas do dia a dia, através da técnica de ciclos temporais pomodoro. [deploy](https://cronodoro.netlify.app/)

## <div align="center">Tecnologias</div>

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" width="50px" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="50px" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width="50px" />
</div>

##

### <div align="center">Como usar</div>

Você vai precisar ter instalado [Git](https://git-scm.com/), [Docker](https://docs.docker.com/engine/install/), [docker-compose plugin](https://docs.docker.com/compose/install/)\*\*

\*\*Apenas linux. Windows e Mac já instalam junto ao docker desktop.

##

Abra um terminal e clone o repositório - exemplo com chave SSH.
```
git clone git@github.com:Valdeci97/pomodoro-timer.git
```

Entre na pasta do projeto
```
cd pomodoro-timer/app
```

Inicie o container docker.

```
docker-compose up -d
```

Caso o comando falhe, tente

```
docker compose up -d
```

Se nada de errado aconteceu a aplicação estará rodando no localhost na porta 5000.

Parando os containeres

```
docker compose down

ou

docker-compose down
```
