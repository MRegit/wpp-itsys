
# 📘 Despliegue de Aplicación Node.js con PM2

Esta guía describe cómo usar **PM2** para correr tu aplicación Node.js como un servicio en segundo plano, reiniciarla automáticamente si falla, y arrancarla automáticamente al reiniciar el servidor.

---

## 📦 Requisitos

- Servidor
- Node.js y npm instalados
- `package.json` con un script:

  ```json
  "scripts": {
    "start": "node dist/server.js"
  }
  ```

---
## ✅ Paso 0: Instalar Dependencias del Proyecto si no se han instalado ( si no existe la carpeta `node_modules`)

```bash
npm install
```

---
## ✅ Paso 1: Instalar PM2 globalmente

```bash
npm install -g pm2
```

---

## 🚀 Paso 2: Ejecutar la app con PM2

Desde la raíz del proyecto:

```bash
pm2 start npm --name "wpp-itsys" -- start
```

- `npm` → ejecuta un script del `package.json`
- `--name` → nombre personalizado del proceso para identificarlo
- `-- start` → script que se ejecuta ("start")

Ejemplo:

```bash
pm2 start npm --name "wpp-itsys" -- start
```

---

## 📋 Paso 3: Guardar la lista de procesos

Guardar el estado actual para que PM2 lo restaure después de un reinicio del servidor:

```bash
pm2 save
```

---

## 🔄 Paso 4: Hacer que PM2 arranque al reiniciar el servidor

Ejecutar el siguiente comando:

```bash
pm2 startup
```

Este comando mostrará algo como:

```bash
[PM2] Init system found: systemd
[PM2] To setup the startup script, copy/paste the following command:
sudo env PATH=$PATH:/home/tu-usuario/.nvm/versions/node/vXX.X.X/bin \
  /home/tu-usuario/.nvm/versions/node/vXX.X.X/lib/node_modules/pm2/bin/pm2 startup systemd -u tu-usuario --hp /home/tu-usuario
```

Copiar y ejecutar el comando que se muestra. Eso permitirá que PM2 arranque automáticamente al prender el servidor.

Luego ejecutar nuevamente:

```bash
pm2 save
```

---

## 🔧 Comandos útiles

- 📜 Ver procesos activos:

  ```bash
  pm2 list
  ```

- 🪵 Ver logs en tiempo real:

  ```bash
  pm2 logs
  ```

- 🔄 Reiniciar app:

  ```bash
  pm2 restart wpp-itsys
  ```

- 🛑 Detener app:

  ```bash
  pm2 stop wpp-itsys
  ```

- ❌ Eliminar proceso:

  ```bash
  pm2 delete wpp-itsys
  ```

---

## 🧼 Extra: Limpieza de logs antiguos

```bash
pm2 flush
```

---

## 🧪 Ejemplo completo

```bash
sudo apt update && sudo apt install -y nodejs npm
npm install -g pm2

cd /ruta/de/tu/proyecto
npm install # si aun no se han instalado las dependencias
pm2 start npm --name "wpp-itsys" -- start
pm2 save
pm2 startup
# (ejecuta el comando que te indica)
```

---

> ✅ Tu aplicación ahora estará corriendo en segundo plano, con reinicio automático en fallos y al iniciar el sistema operativo.
