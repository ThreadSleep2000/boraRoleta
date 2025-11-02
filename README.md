# boraRoleta
Trabalho 4ºSemestre Faculdade SENAC

## Desenvolvimento — Perfis e variáveis de ambiente

Este projeto usa perfis Spring para alternar entre ambientes:

- `prod` — configurações de produção (MySQL). Arquivo: `src/main/resources/application-prod.properties`.
- `test` — configuração para testes/desenvolvimento com H2 em memória. Arquivo: `src/main/resources/application-test.properties`.

Não force perfis dentro do `application.properties`. Use variáveis de ambiente ou argumentos de linha de comando para selecionar o perfil.

Há scripts úteis para Windows no repositório:

- `setenv.bat` — define `DB_USERNAME` e `DB_PASSWORD` via `setx` (persiste para o usuário). Exemplo:

	```cmd
	setenv.bat myuser mypass
	```

- `setenv.ps1` — PowerShell; setar na sessão ou persistir com `-Persist`:

	```powershell
	.\setenv.ps1 -Username myuser -Password mypass -Persist
	# ou apenas para sessão atual
	.\setenv.ps1 -Username myuser -Password mypass
	```

- `.env.example` — modelo com variáveis; copie para `.env` localmente se quiser (o `.env` está no `.gitignore`).

## Rodando localmente

1. Compilar:

```powershell
./mvnw.cmd clean package
```

2. Rodar com H2 (perfil `test`):

```powershell
./mvnw.cmd --% spring-boot:run -Dspring-boot.run.profiles=test
```

Abra depois:

- App: `http://localhost:8080`
- H2 Console: `http://localhost:8080/h2-console` (JDBC URL: `jdbc:h2:mem:testdb`, user `sa`, password em branco)

3. Rodar com MySQL (perfil `prod`): defina `DB_USERNAME` e `DB_PASSWORD` (via `setenv.*` ou variáveis do sistema) e então:

```powershell
./mvnw.cmd --% spring-boot:run -Dspring-boot.run.profiles=prod
```

## Rodando na sua IDE

### VS Code

1. Abra a pasta do projeto no VS Code.
2. Instale as extensões: `Language Support for Java(TM) by Red Hat`, `Debugger for Java`, `Spring Boot Extension Pack`.
3. Configure variáveis de ambiente (opcional): use `setenv.ps1` ou configure `launch.json` no `.vscode/` com `env` e, se preferir argumentos, inclua `"-Dspring-boot.run.profiles=test"` (as aspas mantêm o argumento intacto no PowerShell).
4. Use o comando `Spring Boot Dashboard` (ícone do Spring) e clique em ▶️ sobre `BoraRoletaApplication`, ou execute a task do Maven `spring-boot:run` no terminal integrado com `.\mvnw.cmd spring-boot:run "-Dspring-boot.run.profiles=test"`.

### IntelliJ IDEA

1. Abra o projeto (Import Maven Project se solicitado).
2. Configure as variáveis de ambiente em `Run -> Edit Configurations...` no template `Spring Boot` (adicione `SPRING_PROFILES_ACTIVE=test` ou `DB_USERNAME`/`DB_PASSWORD` conforme necessário).
3. Rode a aplicação clicando no ícone ▶️ da configuração criada.

### Eclipse / STS

1. Import -> Existing Maven Projects -> selecione a pasta do projeto.
2. Crie uma Run Configuration `Spring Boot App` (ou `Java Application` apontando para `com.example.demo.BoraRoletaApplication`).
3. Em `Environment` adicione `SPRING_PROFILES_ACTIVE=test` ou `DB_USERNAME`/`DB_PASSWORD`.
4. Execute.

## Boas práticas

- Nunca comite credenciais. Use `.env` local ou variáveis de ambiente (os scripts acima ajudam nisso).
- Não exponha o H2 console em produção. `application-prod.properties` tem `spring.h2.console.enabled=false`.
- Verifique o `.gitignore` antes de commitar.
