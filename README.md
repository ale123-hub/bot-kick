# 🤖 Kick Bot - @thesempapibot

¡Bienvenido al repositorio de **thesempapibot**! Un bot de chat para Kick.com desarrollado en Node.js, diseñado para ser ligero, funcional y fácil de personalizar.

## ✨ Características
- 🛡️ **Anti-Spam:** Sistema básico para mantener el chat limpio.
- 🎲 **Juegos de Chat:** Comandos interactivos como `!suerte` y `!moneda`.
- ⚙️ **Configuración Segura:** Uso de variables de entorno para proteger tus credenciales.
- 🚀 **Arquitectura Limpia:** Comandos separados en módulos para fácil edición.

## 📦 Dependencias
Este proyecto se mantiene ligero utilizando únicamente las librerías esenciales:
- **[@retconned/kick-js](https://github.com/retconned/kick-js)**: Para la conexión con la API de Kick.
- **[dotenv](https://www.npmjs.com/package/dotenv)**: Para la gestión de archivos `.env`.

## 🚀 Instalación y Configuración

### 1. Requisitos previos
Tener instalado [Node.js](https://nodejs.org/) (versión 16 o superior).

### 2. Clonar y preparar
```bash
# Clonar el repositorio
git clone [https://github.com/ale123-hub/bot-kick.git](https://github.com/ale123-hub/bot-kick.git)
cd bot-kick

# Instalar dependencias
npm install
```
### 3. Configurar credenciales
Crea un archivo llamado `.env` en la carpeta raíz y añade tus datos siguiendo esta estructura:

| Variable | Descripción / Valor |
| :--- | :--- |
| **KICK_USERNAME** | El nombre de usuario de tu bot |
| **KICK_TOKEN** | Tu Bearer Token de Kick |
| **KICK_COOKIES** | Tu cadena de Cookies completa |
| **CHANNEL** | El nombre de tu canal de stream |

## 📜 Lista de Comandos

| Comando | Acción |
| :--- | :--- |
| `!hola` | El bot te saluda personalmente. |
| `!response` | Confirmación de estado del bot. |
| `!suerte` | Lanza un dado de 6 caras. |
| `!moneda` | Lanza una moneda (Cara o Cruz). |
| `!commands` | Muestra todos los comandos disponibles. |
