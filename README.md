# SauceDemo Automation Project

Automatización de pruebas para el sitio [SauceDemo](https://www.saucedemo.com/) usando **Playwright** y **TypeScript**, con patrón **Page Object Model (POM)**.

---

## Estructura del Proyecto

```
sauce_demo/
├── pages/                  # Clases que representan páginas (POM)
├── tests/                  # Casos de prueba automatizados
├── data/                   # Datos de prueba y mensajes
├── .github/workflows/      # Workflows de GitHub Actions (CI/CD)
├── playwright.config.ts    # Configuración de Playwright
├── package.json            # Dependencias y scripts
└── README.md               # Documentación del proyecto
```

---

## Tecnologías

- Playwright  
- TypeScript  
- Node.js  
- GitHub Actions (CI/CD)  

---

## Casos de prueba actuales

- Login válido con usuario estándar  
- Login inválido con credenciales incorrectas  
- Login con campos vacíos (usuario y contraseña)  
- Login con contraseña vacía  

---

## Instalación

```bash
git clone https://github.com/LautaroSando/Sauce_demo.git
cd Sauce_demo
npm install
```

---

## Uso

Ejecutar todos los tests:

```bash
npx playwright test
```

Ejecutar tests en modo visible:

```bash
npx playwright test --headed
```

Abrir reporte visual tras ejecución:

```bash
npx playwright show-report
```

---

## Integración Continua (CI/CD)

Este proyecto utiliza **GitHub Actions** para ejecutar automáticamente los tests en cada `push` o `pull request` hacia la rama `main`.

Esto garantiza que los cambios no rompan los tests existentes antes de integrarlos.

El archivo del workflow está en `.github/workflows/test.yml` y realiza:

- Instalación de dependencias  
- Ejecución de tests con Playwright  
- Verificación del resultado  

---

## Datos de prueba

Los datos y mensajes están en la carpeta `data/` para facilitar mantenimiento y escalabilidad.